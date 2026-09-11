import nodemailer from 'nodemailer';

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
};

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !portRaw || !user || !pass) return null;

  const port = Number(portRaw);
  if (!Number.isFinite(port)) return null;

  // Relays such as Resend authenticate with a fixed username ("resend") rather
  // than an address, so the visible sender has to be configured separately.
  // Falls back to the SMTP username, which is correct for direct Gmail SMTP.
  const from = (process.env.MAIL_FROM || '').trim() || user;

  return { host, port, user, pass, from };
}

/**
 * Who gets notified when a booking comes in: THERAPIST_EMAIL plus any extra
 * addresses in BOOKING_NOTIFY_EMAILS (comma-separated).
 */
export function getBookingNotificationRecipients(): string[] {
  const recipients = [
    process.env.THERAPIST_EMAIL,
    ...(process.env.BOOKING_NOTIFY_EMAILS || '').split(','),
  ]
    .map((value) => (value || '').trim())
    .filter(Boolean);

  return Array.from(new Set(recipients.map((value) => value.toLowerCase())));
}

export async function sendEmail(params: {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}): Promise<{ success: boolean; error?: string }> {
  const config = getSmtpConfig();
  if (!config) {
    console.error('Email not sent — SMTP is not configured (SMTP_HOST/PORT/USER/PASSWORD)', {
      subject: params.subject,
    });
    return { success: false, error: 'SMTP not configured' };
  }

  const to = Array.isArray(params.to) ? params.to.filter(Boolean) : [params.to];
  if (to.length === 0) {
    console.error('Email not sent — no recipients', { subject: params.subject });
    return { success: false, error: 'No recipients' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.port === 465,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });

    const info = await transporter.sendMail({
      from: config.from,
      to,
      subject: params.subject,
      text: params.text,
      html: params.html,
      replyTo: params.replyTo,
    });

    if (info.rejected && info.rejected.length > 0) {
      console.error('Email partially rejected by SMTP server', {
        subject: params.subject,
        rejected: info.rejected,
      });
    }

    return { success: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Failed to send email';
    console.error('Email send failed', { subject: params.subject, to, error });
    return { success: false, error };
  }
}

export async function sendTherapistBookingEmail(params: {
  therapistEmail: string | string[];
  clientName: string;
  clientEmail: string;
  packageName: string;
  appointmentIso: string;
  amount: number;
  transactionId: string;
  meetLink?: string;
  eventLink?: string;
  bookingId?: string;
  intakeSummary?: string;
}): Promise<{ success: boolean; error?: string }> {
  const dt = new Date(params.appointmentIso);
  const readable = isNaN(dt.getTime()) ? params.appointmentIso : dt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const lines = [
    `New booking received`,
    ``,
    `Client: ${params.clientName} (${params.clientEmail})`,
    `Package: ${params.packageName}`,
    `When: ${readable}`,
    `Amount: ₹${params.amount}`,
    `Transaction: ${params.transactionId}`,
    params.bookingId ? `Booking ID: ${params.bookingId}` : undefined,
    params.meetLink ? `Meet: ${params.meetLink}` : undefined,
    params.eventLink ? `Event: ${params.eventLink}` : undefined,
    params.intakeSummary ? `\n${params.intakeSummary}` : undefined,
  ].filter(Boolean) as string[];

  const text = lines.join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.4;">
      <h2 style="margin: 0 0 12px;">New booking received</h2>
      <p style="margin: 0 0 6px;"><strong>Client:</strong> ${escapeHtml(params.clientName)} (${escapeHtml(params.clientEmail)})</p>
      <p style="margin: 0 0 6px;"><strong>Package:</strong> ${escapeHtml(params.packageName)}</p>
      <p style="margin: 0 0 6px;"><strong>When:</strong> ${escapeHtml(readable)}</p>
      <p style="margin: 0 0 6px;"><strong>Amount:</strong> ₹${params.amount}</p>
      <p style="margin: 0 0 6px;"><strong>Transaction:</strong> ${escapeHtml(params.transactionId)}</p>
      ${params.bookingId ? `<p style="margin: 0 0 6px;"><strong>Booking ID:</strong> ${escapeHtml(params.bookingId)}</p>` : ''}
      ${params.meetLink ? `<p style="margin: 0 0 6px;"><strong>Meet:</strong> <a href="${escapeAttr(params.meetLink)}">${escapeHtml(params.meetLink)}</a></p>` : ''}
      ${params.eventLink ? `<p style="margin: 0 0 6px;"><strong>Event:</strong> <a href="${escapeAttr(params.eventLink)}">Open in Google Calendar</a></p>` : ''}
      ${params.intakeSummary ? `<pre style="margin: 16px 0 0; padding: 12px; background: #f6f6f4; border-radius: 6px; font-family: Arial, sans-serif; font-size: 13px; white-space: pre-wrap;">${escapeHtml(params.intakeSummary)}</pre>` : ''}
    </div>
  `.trim();

  return sendEmail({
    to: params.therapistEmail,
    subject: `New booking: ${params.clientName} (${readable})`,
    text,
    html,
    replyTo: params.clientEmail,
  });
}

export async function sendClientBookingEmail(params: {
  clientEmail: string;
  clientName: string;
  packageName: string;
  appointmentIso: string;
  amount: number;
  meetLink?: string;
  therapistEmail: string;
  bookingId?: string;
}): Promise<{ success: boolean; error?: string }> {
  const dt = new Date(params.appointmentIso);
  const readable = isNaN(dt.getTime()) ? params.appointmentIso : dt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const text = [
    `Hi ${params.clientName},`,
    ``,
    `Your session has been confirmed!`,
    ``,
    `Package: ${params.packageName}`,
    `When: ${readable}`,
    `Amount Paid: ₹${params.amount}`,
    params.bookingId ? `Booking ID: ${params.bookingId}` : undefined,
    params.meetLink ? `Google Meet Link: ${params.meetLink}` : undefined,
    ``,
    `Please join the meeting 2-3 minutes early. If you need to reschedule, contact us at ${params.therapistEmail} at least 24 hours in advance.`,
    ``,
    `Take care,`,
    `Bhavana Bulchandani`,
  ].filter(Boolean).join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #0f766e; margin: 0 0 16px;">Session Confirmed!</h2>
      <p style="margin: 0 0 8px;">Hi ${escapeHtml(params.clientName)},</p>
      <p style="margin: 0 0 16px;">Your therapy session has been confirmed. Here are your details:</p>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Package</td><td>${escapeHtml(params.packageName)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">When</td><td>${escapeHtml(readable)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold;">Amount Paid</td><td>₹${params.amount}</td></tr>
        ${params.bookingId ? `<tr><td style="padding: 6px 0; font-weight: bold;">Booking ID</td><td>${escapeHtml(params.bookingId)}</td></tr>` : ''}
        ${params.meetLink ? `<tr><td style="padding: 6px 0; font-weight: bold;">Meet Link</td><td><a href="${escapeAttr(params.meetLink)}" style="color: #0f766e;">${escapeHtml(params.meetLink)}</a></td></tr>` : ''}
      </table>
      <p style="margin: 0 0 8px; font-size: 14px; color: #555;">Please join the meeting 2–3 minutes early and ensure a quiet, private space.</p>
      <p style="margin: 0 0 8px; font-size: 14px; color: #555;">Need to reschedule? Contact us at <a href="mailto:${escapeAttr(params.therapistEmail)}">${escapeHtml(params.therapistEmail)}</a> at least 24 hours in advance.</p>
      <p style="margin: 16px 0 0; font-size: 14px; color: #555;">Take care,<br/><strong>Bhavana Bulchandani</strong></p>
    </div>
  `.trim();

  return sendEmail({
    to: params.clientEmail,
    subject: `Session Confirmed: ${params.packageName} on ${readable}`,
    text,
    html,
    // The sending domain has no mailbox, so replies must go to the therapist.
    replyTo: params.therapistEmail,
  });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeAttr(value: string): string {
  return escapeHtml(value);
}
