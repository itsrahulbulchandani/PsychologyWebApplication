import nodemailer from 'nodemailer';

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
};

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !portRaw || !user || !pass) return null;

  const port = Number(portRaw);
  if (!Number.isFinite(port)) return null;

  return { host, port, user, pass };
}

export async function sendEmail(params: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<{ success: boolean; error?: string }> {
  const config = getSmtpConfig();
  if (!config) {
    return { success: false, error: 'SMTP not configured' };
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

    await transporter.sendMail({
      from: config.user,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'Failed to send email' };
  }
}

export async function sendTherapistBookingEmail(params: {
  therapistEmail: string;
  clientName: string;
  clientEmail: string;
  packageName: string;
  appointmentIso: string;
  amount: number;
  transactionId: string;
  meetLink?: string;
  eventLink?: string;
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
    params.meetLink ? `Meet: ${params.meetLink}` : undefined,
    params.eventLink ? `Event: ${params.eventLink}` : undefined,
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
      ${params.meetLink ? `<p style="margin: 0 0 6px;"><strong>Meet:</strong> <a href="${escapeAttr(params.meetLink)}">${escapeHtml(params.meetLink)}</a></p>` : ''}
      ${params.eventLink ? `<p style="margin: 0 0 6px;"><strong>Event:</strong> <a href="${escapeAttr(params.eventLink)}">Open in Google Calendar</a></p>` : ''}
    </div>
  `.trim();

  return sendEmail({
    to: params.therapistEmail,
    subject: `New booking: ${params.clientName} (${readable})`,
    text,
    html,
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
