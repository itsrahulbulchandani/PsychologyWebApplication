// Intake + informed consent details captured on the booking form.
// These are written into the Google Calendar event description so the full
// client context is visible on the event itself.

export interface IntakeDetails {
  name: string;
  email: string;
  mobileNumber: string;
  emergencyContact?: string;
  address?: string;
  preferredLanguage?: string;
  reasonForCounselling?: string;
  problemDuration?: string;
  psychiatricMedication?: string;
  medicationDetails?: string;
  concerns?: string[];
  anythingElse?: string;
  mode?: string;
  consultationType?: string;
  packageName: string;
  bookingId: string;
  consentSigned: boolean;
  consentSignedAt?: string;
}

const CONSENT_VERSION = 'Informed Consent for Counselling & Therapy (v1)';

const CONSENT_SUMMARY = [
  'Nature of therapy as a collaborative, individually tailored process',
  'Client rights: to ask questions, decline any technique, stop at any time, and be treated with respect',
  'Confidentiality, and its legal limits (risk of harm, suspected abuse, court order)',
  'Emergency contact may be reached only if the client’s safety is at immediate risk',
  'Online therapy disclaimer: not a substitute for medical, psychiatric or emergency care',
  'Not a legal or crisis service, and the therapist is available only during scheduled sessions',
];

export function generateBookingId(): string {
  return `STH-${Math.floor(10000 + Math.random() * 90000)}`;
}

function formatIst(iso?: string): string {
  if (!iso) return '';
  const dt = new Date(iso);
  if (isNaN(dt.getTime())) return iso;
  return `${dt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })} IST`;
}

function row(label: string, value?: string): string {
  return `${label} : ${(value || '').trim()}`;
}

/**
 * Build the Google Calendar event description: customer info block followed by
 * the informed consent record.
 */
export function buildEventDescription(details: IntakeDetails, appointmentIso: string): string {
  const medication =
    details.psychiatricMedication === 'Yes' && details.medicationDetails?.trim()
      ? `Yes (${details.medicationDetails.trim()})`
      : details.psychiatricMedication;

  const customerInfo = [
    'Customer Info',
    row('Name', details.name),
    row('Email', details.email),
    row('Contact Number', details.mobileNumber),
    row('Emergency Contact Number', details.emergencyContact),
    row('Address', details.address),
    row('Preferred Language', details.preferredLanguage),
    row('Please state why you decided to come for counseling', details.reasonForCounselling),
    row('How long has this been a problem for you?', details.problemDuration),
    row('Areas of concern', (details.concerns || []).join(', ')),
    row('Are you taking any psychiatric medication?', medication),
    row('Anything else you wish your counselor to know before the session', details.anythingElse),
    row('Mode', details.mode),
    row('Type of Consultation', details.consultationType),
    row('Package', details.packageName),
    row('Session', formatIst(appointmentIso)),
    row('Booking ID', details.bookingId),
  ].join('\n');

  const consent = [
    'Informed Consent',
    row('Status', details.consentSigned ? 'Signed' : 'Not signed'),
    row('Form', CONSENT_VERSION),
    row('Agreed at', formatIst(details.consentSignedAt)),
    '',
    'The client has read, understood and voluntarily agreed to:',
    ...CONSENT_SUMMARY.map((item) => `- ${item}`),
  ].join('\n');

  return `${customerInfo}\n\n${consent}`;
}
