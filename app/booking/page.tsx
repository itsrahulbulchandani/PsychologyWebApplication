'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, ArrowRight } from 'lucide-react';
import BookingCalendar, { type SlotSource } from '@/components/BookingCalendar';
import { BOOKING_LEAD_TIME_MINUTES, isSlotTooSoon } from '@/lib/time';
import { normalizeMobile } from '@/lib/phone';
import { siteConfig, whatsappUrl } from '@/lib/site';
import { trackEvent, BOOKING_CURRENCY, BOOKING_HANDOFF_KEY } from '@/lib/analytics';

const TEXT_LINK = 'text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine';

const EMAIL_LINK = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  'Question before booking a discovery call'
)}`;

const WHATSAPP_LINK = whatsappUrl('Hi Bhavana, I have a question before booking a discovery call.');

// The only package bookable online; paid sessions are arranged after this call.
const DISCOVERY_CALL = {
  id: 'discovery',
  name: 'Discovery Call',
  price: 0,
  displayPrice: 'Free',
};

type FieldName =
  | 'name'
  | 'email'
  | 'mobile'
  | 'emergencyContact'
  | 'preferredLanguage'
  | 'problemDuration'
  | 'reasonForCounselling'
  | 'psychiatricMedication'
  | 'consent';

type FieldErrors = Partial<Record<FieldName, string>>;

function FieldError({ name, message }: { name: FieldName; message?: string }) {
  if (!message) return null;
  return (
    <p id={`${name}-error`} className="mt-1.5 text-xs text-red-700">
      {message}
    </p>
  );
}

export default function BookingPage() {
  const [selectedDateTime, setSelectedDateTime] = useState<{ date: Date; time: string } | null>(null);
  const [showConsentForm, setShowConsentForm] = useState(false);
  const [consentSigned, setConsentSigned] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    emergencyContact: '',
    address: '',
    preferredLanguage: '',
    reasonForCounselling: '',
    problemDuration: '',
    psychiatricMedication: '',
    medicationDetails: '',
    anythingElse: '',
    mode: 'Video',
    consultationType: 'Individual',
  });
  const [concerns, setConcerns] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [showStickyCta, setShowStickyCta] = useState(false);
  const calendarRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const formStarted = useRef(false);

  // On a phone the calendar can start below the fold. Only offer the shortcut
  // while it is still ahead: once past it, the bar would sit over the page's
  // footer, which carries the crisis helpline numbers. The top margin stretches
  // the observed area far above the screen so that past the calendar still
  // counts as reached; otherwise a jump straight past it crosses no threshold
  // and leaves the bar on.
  useEffect(() => {
    const calendar = calendarRef.current;
    if (!calendar) return;

    const observer = new IntersectionObserver(
      (entries) => setShowStickyCta(!entries[entries.length - 1].isIntersecting),
      { rootMargin: '100000px 0px -200px 0px' }
    );
    observer.observe(calendar);
    return () => observer.disconnect();
  }, []);

  // The form opens below the calendar, out of sight on a phone.
  useEffect(() => {
    if (selectedDateTime) formRef.current?.scrollIntoView({ block: 'start' });
  }, [selectedDateTime]);

  const sessionPackages = [
    {
      id: 'single',
      name: "Single Session",
      price: 1200,
      displayPrice: "₹1,200",
      originalPrice: null,
      sessions: 1,
      perSession: "₹1,200",
      features: [
        "Up to 60-minute session",
        "Online video session",
        "Follow-up homework & exercises",
        "Chat support between sessions"
      ],
      popular: false,
      discount: null
    },
    {
      id: '3-session',
      name: "3-Session Bundle",
      price: 3200,
      displayPrice: "₹3,200",
      originalPrice: "₹3,600",
      sessions: 3,
      perSession: "₹1,067",
      features: [
        "Three 60-minute sessions",
        "Personalized therapy plan",
        "Homework & exercises",
        "Chat support between sessions",
        "Progress tracking"
      ],
      popular: true,
      discount: "Save ₹400"
    },
    {
      id: '6-session',
      name: "6-Session Bundle",
      price: 6000,
      displayPrice: "₹6,000",
      originalPrice: "₹7,200",
      sessions: 6,
      perSession: "₹1,000",
      features: [
        "Six 60-minute sessions",
        "Comprehensive therapy plan",
        "Homework & exercises",
        "Priority chat support",
        "Progress tracking & review",
        "Goal setting & monitoring"
      ],
      popular: false,
      discount: "Save ₹1,200"
    }
  ];

  const discoveryFacts = [
    { label: 'How long', value: '15 to 20 minutes.' },
    { label: 'What it costs', value: 'Nothing. The discovery call is free.' },
    {
      label: 'What happens',
      value:
        'You describe what has been going on and what you are hoping for. You can ask me anything: my qualifications, how I work, fees, or the practicalities. I will tell you honestly whether I think I can help.',
    },
    {
      label: 'Where',
      value:
        'Online, over Google Meet. You will get a confirmation email and a calendar invite with the link as soon as you confirm your booking.',
    },
    {
      label: 'Any obligation?',
      value:
        'None. Plenty of people take the call and decide to think about it, or decide therapy is not what they need right now. That is a perfectly good outcome.',
    },
    {
      label: 'If we continue',
      value:
        'We schedule your first full session, up to 60 minutes, usually weekly to begin with. A single session is ₹1,200, with 3-session (₹3,200) and 6-session (₹6,000) bundles available. Paid sessions are arranged after the discovery call, and are paid in advance.',
    },
    {
      label: 'If I am not the right fit',
      value:
        'I will say so, and where I can I will point you toward the kind of professional who would serve you better. This is not a crisis service; for urgent help, call Tele-MANAS on 14416 or emergency services on 112.',
    },
  ];

  const languageOptions = ['English', 'Hindi', 'Hindi & English'];

  const durationOptions = [
    'Less than 1 month',
    '1-3 Months',
    '3-6 Months',
    '6-12 Months',
    'More than a year',
  ];

  const modeOptions = ['Video', 'Audio'];

  const consultationTypeOptions = ['Individual', 'Couple', 'Family'];

  const concernOptions = [
    "Anxiety, nervousness, fears",
    "Stress",
    "Depression or low mood",
    "Anger or hostility",
    "Self-esteem or confidence",
    "Relationship or marital concerns",
    "Family issues",
    "Work or career concerns",
    "Social conflicts or shyness",
    "Trauma or difficult past experiences",
    "Suicidal thoughts or behaviors",
    "Eating or appetite concerns",
    "Procrastination",
    "Physical distress",
    "Self-control difficulties",
  ];

  const handleDateTimeSelect = (date: Date, time: string, source: SlotSource) => {
    setSelectedDateTime({ date, time });
    setError('');
    trackEvent('booking_slot_selected', {
      item_id: DISCOVERY_CALL.id,
      item_name: DISCOVERY_CALL.name,
      slot_time: time,
      slot_source: source,
    });
  };

  const clearFieldError = (name: string) => {
    setFieldErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name as FieldName];
      return next;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    clearFieldError(e.target.name);
  };

  const handleFormFocus = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent('booking_form_started', {
      item_id: DISCOVERY_CALL.id,
      item_name: DISCOVERY_CALL.name,
    });
  };

  const fieldProps = (name: FieldName) => ({
    id: name,
    'aria-invalid': fieldErrors[name] ? true : undefined,
    'aria-describedby': fieldErrors[name] ? `${name}-error` : undefined,
  });

  const inputClass = (name: FieldName) =>
    `input-field${fieldErrors[name] ? ' border-red-400' : ''}`;

  // Errors are built in the order the fields appear, so the first is the
  // highest one on the page.
  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {};

    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
    if (!/^\d{10}$/.test(normalizeMobile(formData.mobile))) {
      errors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!/^\d{10}$/.test(normalizeMobile(formData.emergencyContact))) {
      errors.emergencyContact = 'Please enter a valid 10-digit emergency contact number';
    }
    if (!formData.preferredLanguage) {
      errors.preferredLanguage = 'Please select your preferred language';
    }
    if (!formData.problemDuration) {
      errors.problemDuration = 'Please tell us how long this has been a problem for you';
    }
    if (!formData.reasonForCounselling.trim()) {
      errors.reasonForCounselling = 'Please tell us why you decided to come for counselling';
    }
    if (!formData.psychiatricMedication) {
      errors.psychiatricMedication = 'Please tell us whether you are taking any psychiatric medication';
    }
    if (!consentSigned) errors.consent = 'Please read and sign the informed consent form';

    return errors;
  };

  const focusField = (name: string) => {
    const field = document.getElementById(name);
    if (!field) return;
    field.focus({ preventScroll: true });
    field.scrollIntoView({ block: 'center' });
  };

  const toggleConcern = (concern: string) => {
    setConcerns(prev =>
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const handlePayment = async () => {
    if (!selectedDateTime) return;

    if (isSlotTooSoon(selectedDateTime.date)) {
      setError(
        `That slot is no longer bookable. Please pick a time at least ${BOOKING_LEAD_TIME_MINUTES / 60} hours from now.`
      );
      setSelectedDateTime(null);
      document.getElementById('pick-a-time')?.scrollIntoView({ block: 'start' });
      return;
    }

    const errors = validateForm();
    setFieldErrors(errors);

    const invalidFields = Object.keys(errors);
    if (invalidFields.length > 0) {
      // Field names only: what someone typed never goes to analytics.
      trackEvent('booking_form_error', { fields: invalidFields.join(',') });
      focusField(invalidFields[0]);
      return;
    }

    setIsProcessing(true);
    setError('');

    // All validation passed and the request is about to go out.
    trackEvent('begin_checkout', {
      item_id: DISCOVERY_CALL.id,
      item_name: DISCOVERY_CALL.name,
      value: DISCOVERY_CALL.price,
      currency: BOOKING_CURRENCY,
      mode: formData.mode,
      consultation_type: formData.consultationType,
    });

    try {
      // selectedDateTime.date is already the exact instant of the IST slot.
      const appointmentDateTime = selectedDateTime.date;

      // --- PhonePe payment flow disabled (only free Discovery Call is bookable for now) ---
      // const response = await fetch('/api/payment/initiate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     amount: DISCOVERY_CALL.price,
      //     mobileNumber: formData.mobile,
      //     packageName: DISCOVERY_CALL.name,
      //     appointmentDate: appointmentDateTime.toISOString(),
      //     email: formData.email,
      //     name: formData.name,
      //   }),
      // });
      // const data = await response.json();
      // if (data.success && data.paymentUrl) {
      //   window.location.href = data.paymentUrl;
      // } else {
      //   setError(data.error || 'Failed to initiate payment. Please try again.');
      //   setIsProcessing(false);
      // }
      // --- end PhonePe flow ---

      // Free booking: confirm directly into Google Calendar, no payment.
      const response = await fetch('/api/booking/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageName: DISCOVERY_CALL.name,
          appointmentDate: appointmentDateTime.toISOString(),
          email: formData.email.trim(),
          name: formData.name,
          mobileNumber: normalizeMobile(formData.mobile),
          emergencyContact: normalizeMobile(formData.emergencyContact),
          address: formData.address,
          preferredLanguage: formData.preferredLanguage,
          reasonForCounselling: formData.reasonForCounselling,
          problemDuration: formData.problemDuration,
          psychiatricMedication: formData.psychiatricMedication,
          medicationDetails:
            formData.psychiatricMedication === 'Yes' ? formData.medicationDetails : '',
          anythingElse: formData.anythingElse,
          mode: formData.mode,
          consultationType: formData.consultationType,
          concerns,
          consentSigned,
          consentSignedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        // The confirmation page only reports a conversion when it finds this
        // handoff, so reopening that page later can't count as another lead.
        try {
          window.sessionStorage.setItem(
            BOOKING_HANDOFF_KEY,
            JSON.stringify({
              bookingId: data.bookingId,
              id: DISCOVERY_CALL.id,
              name: DISCOVERY_CALL.name,
              price: DISCOVERY_CALL.price,
            })
          );
        } catch {
          // Storage blocked: the booking stands, only the conversion goes unreported.
        }

        window.location.href = data.bookingId
          ? `/booking/success?bookingId=${encodeURIComponent(data.bookingId)}`
          : '/booking/success';
      } else {
        setError(data.error || 'Failed to confirm booking. Please try again.');
        setIsProcessing(false);
        trackEvent('booking_failed', {
          item_id: DISCOVERY_CALL.id,
          item_name: DISCOVERY_CALL.name,
          failure_reason: data.error || 'confirm_rejected',
        });
      }
    } catch (error) {
      console.error('Booking error:', error);
      setError('An error occurred. Please try again.');
      setIsProcessing(false);
      trackEvent('booking_failed', {
        item_id: DISCOVERY_CALL.id,
        item_name: DISCOVERY_CALL.name,
        failure_reason: 'request_error',
      });
    }
  };

  return (
    <div className="px-5 sm:px-8">
      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-10 pb-8 sm:pt-16 sm:pb-12 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Booking</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          Book a free <em className="text-pine">discovery call</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
          Everyone starts here. Pick a time that suits you, complete the consent form, and you&apos;ll
          have a free 15 to 20 minute video call with me, Bhavana Bulchandani, counselling
          psychologist. There is no payment and no obligation to book a session afterwards.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-ink/10">
            <Image
              src="/bhavana.webp"
              alt="Bhavana Bulchandani, counselling psychologist"
              fill
              sizes="64px"
              className="object-cover object-center"
              priority
            />
          </span>
          <div className="text-sm leading-snug text-ink-soft">
            <p className="font-medium text-ink">{siteConfig.therapist}</p>
            <p className="mt-0.5">
              MA Psychology, Banaras Hindu University. PG Diploma, Jamia Millia Islamia.
            </p>
            <p className="mt-0.5">
              Registered Psychologist, NCAHP. Member, American Psychological Association.{' '}
              <Link href="/about" className={TEXT_LINK}>
                About me
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ——— Session facts ——— */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="border-t border-b border-ink/10 py-5 flex flex-wrap justify-center lg:justify-between gap-x-10 gap-y-2 text-[13px] tracking-wide text-ink-soft">
          <span>Free 15–20 minute discovery call</span>
          <span className="hidden sm:inline text-ink/20">·</span>
          <span>Online video, anywhere in India</span>
          <span className="hidden sm:inline text-ink/20">·</span>
          <span>English or Hindi</span>
          <span className="hidden sm:inline text-ink/20">·</span>
          <span>Strictly confidential</span>
        </div>
      </section>

      {/* ——— Step 1: Pick a time ——— */}
      <section id="pick-a-time" ref={calendarRef} className="max-w-4xl mx-auto mb-20 scroll-mt-24">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="font-display text-sm text-clay">01</span>
          <h2 className="font-display text-2xl sm:text-3xl text-ink">Pick a time</h2>
        </div>
        {error && !selectedDateTime && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5 mr-3" size={20} />
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}
        <BookingCalendar onDateTimeSelect={handleDateTimeSelect} />
        <div className="mt-6 text-center text-sm text-ink-soft leading-relaxed">
          <p>
            Have a question before you book?{' '}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={TEXT_LINK}
              onClick={() => trackEvent('booking_contact_clicked', { channel: 'whatsapp' })}
            >
              Message me on WhatsApp
            </a>{' '}
            or{' '}
            <a
              href={EMAIL_LINK}
              className={TEXT_LINK}
              onClick={() => trackEvent('booking_contact_clicked', { channel: 'email' })}
            >
              email me
            </a>
            .
          </p>
          <p className="mt-1 text-xs">
            I reply when I can, so this is not for urgent help. In a crisis, call Tele-MANAS on{' '}
            <a href="tel:14416" className={TEXT_LINK}>
              14416
            </a>{' '}
            or emergency services on{' '}
            <a href="tel:112" className={TEXT_LINK}>
              112
            </a>
            .
          </p>
        </div>
      </section>

      {/* ——— Step 2: Details & Consent ——— */}
      {selectedDateTime && (
        <section ref={formRef} className="max-w-3xl mx-auto mb-20 scroll-mt-24">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="font-display text-sm text-clay">02</span>
            <h2 className="font-display text-2xl sm:text-3xl text-ink">Your details &amp; consent</h2>
          </div>
          <p className="-mt-6 mb-8 text-sm text-ink-soft">
            Your call:{' '}
            <span className="font-medium text-ink">
              {selectedDateTime.date.toLocaleDateString('en-IN', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                timeZone: 'Asia/Kolkata',
              })}
              , {selectedDateTime.time} IST
            </span>
            .{' '}
            <a href="#pick-a-time" className={TEXT_LINK}>
              Change
            </a>
          </p>
          <div className="bg-white border border-ink/15 rounded-xl p-6 sm:p-10" onFocus={handleFormFocus}>
            <div className="space-y-8">
              {/* Why these questions */}
              <div className="bg-sage-pale border border-ink/10 rounded-lg p-4 text-sm text-ink-soft leading-relaxed">
                <p className="font-medium text-ink mb-1">Why I ask these questions</p>
                <p>
                  They help me prepare, so we can spend our time on what matters to you. A few words
                  is enough, and there are no wrong answers. Your emergency contact is used only if
                  your safety is at immediate risk.
                </p>
              </div>

              {/* Client Information */}
              <div>
                <h3 className="font-display text-xl text-ink border-b border-ink/10 pb-3 mb-6">
                  Client information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={inputClass('name')}
                      placeholder="Your full name"
                      required
                      {...fieldProps('name')}
                    />
                    <FieldError name="name" message={fieldErrors.name} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={inputClass('email')}
                      placeholder="your.email@example.com"
                      required
                      {...fieldProps('email')}
                    />
                    <FieldError name="email" message={fieldErrors.email} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="mobile" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className={inputClass('mobile')}
                      placeholder="10-digit mobile number"
                      required
                      {...fieldProps('mobile')}
                    />
                    <FieldError name="mobile" message={fieldErrors.mobile} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="emergencyContact" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      Emergency Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      autoComplete="off"
                      inputMode="tel"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className={inputClass('emergencyContact')}
                      placeholder="Emergency contact number"
                      required
                      {...fieldProps('emergencyContact')}
                    />
                    <FieldError name="emergencyContact" message={fieldErrors.emergencyContact} />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="address" className="block text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Your address"
                  />
                </div>
              </div>

              {/* Session details */}
              <div>
                <h3 className="font-display text-xl text-ink border-b border-ink/10 pb-3 mb-6">
                  Session details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="preferredLanguage" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      Preferred Language *
                    </label>
                    <select
                      name="preferredLanguage"
                      value={formData.preferredLanguage}
                      onChange={handleInputChange}
                      className={inputClass('preferredLanguage')}
                      required
                      {...fieldProps('preferredLanguage')}
                    >
                      <option value="">Select a language</option>
                      {languageOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <FieldError name="preferredLanguage" message={fieldErrors.preferredLanguage} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="mode" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      Mode *
                    </label>
                    <select
                      id="mode"
                      name="mode"
                      value={formData.mode}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      {modeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="consultationType" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      Type of Consultation *
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      {consultationTypeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="problemDuration" className="block flex-1 text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                      How long has this been a problem for you? *
                    </label>
                    <select
                      name="problemDuration"
                      value={formData.problemDuration}
                      onChange={handleInputChange}
                      className={inputClass('problemDuration')}
                      required
                      {...fieldProps('problemDuration')}
                    >
                      <option value="">Select a duration</option>
                      {durationOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <FieldError name="problemDuration" message={fieldErrors.problemDuration} />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="reasonForCounselling" className="block text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                    Please state why you decided to come for counselling *
                  </label>
                  <textarea
                    name="reasonForCounselling"
                    value={formData.reasonForCounselling}
                    onChange={handleInputChange}
                    className={inputClass('reasonForCounselling')}
                    rows={3}
                    placeholder="In a few words, what brings you here?"
                    required
                    {...fieldProps('reasonForCounselling')}
                  />
                  <FieldError name="reasonForCounselling" message={fieldErrors.reasonForCounselling} />
                </div>

                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                    Are you taking any psychiatric medication? *
                  </label>
                  <div className="flex gap-6 pt-1">
                    {['Yes', 'No'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          id={option === 'Yes' ? 'psychiatricMedication' : undefined}
                          name="psychiatricMedication"
                          value={option}
                          checked={formData.psychiatricMedication === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-pine"
                        />
                        <span className="text-sm text-ink-soft">{option}</span>
                      </label>
                    ))}
                  </div>
                  {formData.psychiatricMedication === 'Yes' && (
                    <input
                      type="text"
                      name="medicationDetails"
                      value={formData.medicationDetails}
                      onChange={handleInputChange}
                      className="input-field mt-3"
                      placeholder="Which medication, and who prescribed it?"
                    />
                  )}
                  <FieldError name="psychiatricMedication" message={fieldErrors.psychiatricMedication} />
                </div>

                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-[0.12em] font-semibold text-ink-soft mb-1.5">
                    Anything else you wish your counsellor to know before the session
                  </label>
                  <textarea
                    name="anythingElse"
                    value={formData.anythingElse}
                    onChange={handleInputChange}
                    className="input-field"
                    rows={3}
                    placeholder="Optional"
                  />
                </div>
              </div>

              {/* Areas of Concern */}
              <div>
                <h3 className="font-display text-xl text-ink border-b border-ink/10 pb-3 mb-4">
                  Areas of concern
                </h3>
                <p className="text-sm text-ink-soft mb-3">Please tick all that apply:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {concernOptions.map((concern, i) => (
                    <label key={i} className="flex items-center space-x-2.5 cursor-pointer p-2 rounded hover:bg-cream">
                      <input
                        type="checkbox"
                        checked={concerns.includes(concern)}
                        onChange={() => toggleConcern(concern)}
                        className="w-4 h-4 accent-pine rounded border-ink/30"
                      />
                      <span className="text-sm text-ink-soft">{concern}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Informed Consent */}
              <div>
                <h3 className="font-display text-xl text-ink border-b border-ink/10 pb-3 mb-4">
                  Informed consent for counselling &amp; therapy
                </h3>
                <button
                  onClick={() => setShowConsentForm(!showConsentForm)}
                  className="link-arrow mb-4"
                >
                  {showConsentForm ? 'Hide consent details' : 'Read full informed consent'}
                </button>

                {showConsentForm && (
                  <div className="bg-cream border border-ink/10 rounded-lg p-6 mb-4 text-sm text-ink-soft space-y-4 max-h-96 overflow-y-auto">
                    <p className="font-medium text-ink">Thank you for choosing to begin your therapy journey. This form is meant to help you understand how counselling works, your rights as a client, and the responsibilities of both you and your therapist.</p>

                    <div>
                      <h4 className="font-semibold text-ink mb-1">Nature of Therapy</h4>
                      <p>Therapy is a collaborative process based on trust, respect, and open communication. Every individual is unique, and therapy is tailored to your personal needs, experiences, and goals. There is no fixed or generic method that works for everyone. Our work together will focus on supporting your emotional and mental well-being and helping you develop insight, coping skills, and personal growth.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ink mb-1">Your Rights as a Client</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ask questions about the therapy process and what to expect from sessions.</li>
                        <li>Choose whether or not to participate in any technique or activity suggested by the therapist.</li>
                        <li>Stop therapy at any time and return later if you wish.</li>
                        <li>Be treated with respect, dignity, and without judgment.</li>
                      </ul>
                      <p className="mt-2">The therapist also has the right to discontinue therapy if it is determined that continuing would not be clinically appropriate.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ink mb-1">Confidentiality</h4>
                      <p>Your privacy is very important. All information shared in therapy will be kept confidential in accordance with professional and legal guidelines. No information will be shared with any person or organization without your written consent, except in the following situations required by law:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>If there is a serious risk of harm to yourself or others.</li>
                        <li>If there is suspected abuse of a child, elderly person, or dependent adult.</li>
                        <li>If records are requested by a court of law.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ink mb-1">Emergency Contact</h4>
                      <p>You agree to provide an emergency contact person who may be contacted only if your safety is at immediate risk.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ink mb-1">Online Therapy Disclaimer</h4>
                      <p>Online counselling is provided for emotional and mental health support. It is not a substitute for medical care, psychiatric treatment, or emergency services. Therapy is based on the information you choose to share. While the therapist will make every effort to support you, you are responsible for deciding how to use the insights and suggestions offered. No guarantees are made regarding outcomes of therapy.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-ink mb-1">Not a Legal or Crisis Service</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Therapy does not provide legal advice or representation.</li>
                        <li>Statements made in therapy are not to be used for legal proceedings.</li>
                        <li>Therapist will not participate in court cases or act as expert witnesses.</li>
                        <li>Therapy sessions are confidential but may be disclosed if ordered by a court.</li>
                        <li>Therapist is available only during scheduled session times.</li>
                        <li>Messages or calls outside session hours may not receive immediate responses.</li>
                        <li>This service is not a crisis helpline. In case of emergency, please contact local emergency services or a crisis helpline immediately.</li>
                      </ul>
                    </div>
                  </div>
                )}

                <label className="flex items-start space-x-3 cursor-pointer p-4 bg-sage-pale border border-ink/10 rounded-lg">
                  <input
                    type="checkbox"
                    checked={consentSigned}
                    onChange={(e) => {
                      setConsentSigned(e.target.checked);
                      clearFieldError('consent');
                    }}
                    className="w-5 h-5 accent-pine rounded border-ink/30 mt-0.5"
                    {...fieldProps('consent')}
                  />
                  <span className="text-sm text-ink-soft">
                    I have read and understood the informed consent above. I have had the opportunity to ask questions. I voluntarily agree to participate in counselling sessions under these terms.
                  </span>
                </label>
                <FieldError name="consent" message={fieldErrors.consent} />
              </div>

              {/* Booking Summary */}
              <div className="border border-ink/15 rounded-lg p-6">
                <h4 className="font-display text-lg text-ink mb-4">Booking summary</h4>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">Package</dt>
                    <dd className="text-ink font-medium">{DISCOVERY_CALL.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">Price</dt>
                    <dd className="text-ink font-medium">{DISCOVERY_CALL.displayPrice}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">Date</dt>
                    <dd className="text-ink font-medium text-right">{selectedDateTime.date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      timeZone: 'Asia/Kolkata',
                    })}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">Time</dt>
                    <dd className="text-ink font-medium">{selectedDateTime.time} IST</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-soft">Duration</dt>
                    <dd className="text-ink font-medium">15–20 minutes</dd>
                  </div>
                </dl>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5 mr-3" size={20} />
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              {/* Payment / Confirm Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full py-4 rounded-full font-medium tracking-wide transition-colors duration-200 flex items-center justify-center gap-2 ${
                  isProcessing
                    ? 'bg-ink/20 cursor-not-allowed text-white'
                    : 'bg-pine text-cream hover:bg-pine-dark'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Confirm discovery call'}
                {!isProcessing && <ArrowRight size={18} />}
              </button>

              <p className="text-sm text-ink-soft text-center">
                You&apos;ll receive a session link via email after confirmation.
              </p>
            </div>
          </div>
        </section>
      )}
      {/* ——— What the discovery call is ——— */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Not sure yet?</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
              What the discovery call <em className="text-pine">actually is</em>
            </h2>
            <p className="mt-5 text-ink-soft text-[15px] leading-relaxed">
              It is a short conversation, not a therapy session, and not a sales call. Its only
              purpose is to work out whether we are a good fit.
            </p>
          </div>

          <div className="lg:col-span-8 max-w-2xl">
            <dl className="space-y-0">
              {discoveryFacts.map((fact, index) => (
                <div
                  key={index}
                  className="border-t border-ink/10 last:border-b py-5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6"
                >
                  <dt className="sm:col-span-4 text-[11px] uppercase tracking-[0.18em] text-ink-soft font-semibold pt-1">
                    {fact.label}
                  </dt>
                  <dd className="sm:col-span-8 text-ink-soft text-[15px] leading-relaxed">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 text-ink-soft text-[15px] leading-relaxed">
              Want the full session-by-session process first?{' '}
              <Link
                href="/what-to-expect"
                className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
              >
                Read what to expect
              </Link>
              , or{' '}
              <Link
                href="/faq"
                className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
              >
                the FAQ
              </Link>{' '}
              for fees, rescheduling and confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Professional memberships ——— */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Credentials</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
              Professional <em className="text-pine">memberships</em>
            </h2>
          </div>
          <ul className="lg:col-span-8 max-w-2xl space-y-2">
            {siteConfig.memberships.map((item) => (
              <li key={item} className="text-ink-soft text-[15px] leading-relaxed">
                <span className="text-pine mr-2">✳</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— After the discovery call ——— */}
      <section className="max-w-6xl mx-auto mb-20">
        <p className="eyebrow mb-4">After your discovery call</p>
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-10">Session packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sessionPackages.map((pkg) => (
            <div key={pkg.id} className="rounded-xl border border-ink/15 bg-white overflow-hidden">
              <div className="p-6">
                <h3 className="font-display text-xl text-ink mb-1">{pkg.name}</h3>
                {pkg.popular && (
                  <p className="text-[11px] uppercase tracking-[0.18em] text-clay font-semibold mb-2">
                    Most popular
                  </p>
                )}
                <div className="mb-5 mt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl text-pine">{pkg.displayPrice}</span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-ink/40 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-ink-soft text-xs mt-1">{pkg.perSession} per session</p>
                  {pkg.discount && (
                    <p className="text-clay text-xs font-medium mt-1">{pkg.discount}</p>
                  )}
                </div>

                <ul className="space-y-2 border-t border-ink/10 pt-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-[13px] text-ink-soft leading-relaxed">
                      <span className="text-pine/50 mr-2 shrink-0">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#pick-a-time" className="btn-primary">
            Pick a time
          </a>
        </div>
      </section>

      {/* ——— Phone shortcut to the calendar ——— */}
      {showStickyCta && !selectedDateTime && (
        <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-ink/10 bg-cream/95 backdrop-blur-sm px-5 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <a href="#pick-a-time" className="btn-primary w-full">
            Pick a time
          </a>
        </div>
      )}
    </div>
  );
}
