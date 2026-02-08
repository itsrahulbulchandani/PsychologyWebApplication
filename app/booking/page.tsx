'use client';

import { useState } from 'react';
import { Check, Clock, Video, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import BookingCalendar from '@/components/BookingCalendar';

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<{ date: Date; time: string } | null>(null);
  const [showConsentForm, setShowConsentForm] = useState(false);
  const [consentSigned, setConsentSigned] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    emergencyContact: '',
    address: '',
    identityProof: '',
  });
  const [concerns, setConcerns] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const packages = [
    {
      id: 'discovery',
      name: "Discovery Call",
      price: 0,
      displayPrice: "Free",
      originalPrice: null,
      sessions: 1,
      perSession: "Free",
      features: [
        "15\u201320 minute call",
        "Share your concerns and ask questions",
        "See if my approach is a good fit",
        "No obligation to start therapy"
      ],
      popular: false,
      discount: null
    },
    {
      id: 'single',
      name: "Single Session",
      price: 1200,
      displayPrice: "\u20B91,200",
      originalPrice: null,
      sessions: 1,
      perSession: "\u20B91,200",
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
      displayPrice: "\u20B93,200",
      originalPrice: "\u20B93,600",
      sessions: 3,
      perSession: "\u20B91,067",
      features: [
        "Three 60-minute sessions",
        "Personalized therapy plan",
        "Homework & exercises",
        "Chat support between sessions",
        "Progress tracking"
      ],
      popular: true,
      discount: "Save \u20B9400"
    },
    {
      id: '6-session',
      name: "6-Session Bundle",
      price: 6000,
      displayPrice: "\u20B96,000",
      originalPrice: "\u20B97,200",
      sessions: 6,
      perSession: "\u20B91,000",
      features: [
        "Six 60-minute sessions",
        "Comprehensive therapy plan",
        "Homework & exercises",
        "Priority chat support",
        "Progress tracking & review",
        "Goal setting & monitoring"
      ],
      popular: false,
      discount: "Save \u20B91,200"
    }
  ];

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

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDateTime({ date, time });
    setError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleConcern = (concern: string) => {
    setConcerns(prev =>
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const handlePayment = async () => {
    if (!formData.name || !formData.email || !formData.mobile) {
      setError('Please fill in all required details');
      return;
    }

    if (!selectedPackage) {
      setError('Please select a package');
      return;
    }

    if (!selectedDateTime) {
      setError('Please select date and time');
      return;
    }

    if (!consentSigned) {
      setError('Please read and sign the informed consent form');
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      const appointmentDateTime = new Date(selectedDateTime.date);
      const [time, period] = selectedDateTime.time.split(' ');
      let [hours, minutes] = time.split(':').map(Number);

      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;

      appointmentDateTime.setHours(hours, minutes, 0, 0);

      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: selectedPackage.price,
          mobileNumber: formData.mobile,
          packageName: selectedPackage.name,
          appointmentDate: appointmentDateTime.toISOString(),
          email: formData.email,
          name: formData.name,
        }),
      });

      const data = await response.json();

      if (data.success && data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        setError(data.error || 'Failed to initiate payment. Please try again.');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError('An error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Book Your <span className="text-teal-700">Session</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose a package, select your preferred date &amp; time, complete the consent form, and confirm your booking.
        </p>
      </div>

      {/* Session Info */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-teal-700" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Up to 60 Minutes</h3>
            <p className="text-gray-600">Dedicated time for your wellbeing</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="text-teal-700" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Online Sessions</h3>
            <p className="text-gray-600">Attend from the comfort of your home</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-teal-700" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Free Discovery Call</h3>
            <p className="text-gray-600">15&ndash;20 min call to connect first</p>
          </div>
        </div>
      </div>

      {/* Step 1: Choose Package */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
          Step 1: Choose Your Package
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => { setSelectedPackage(pkg); setError(''); }}
              className={`cursor-pointer relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'ring-2 ring-teal-500' : ''
              } ${
                selectedPackage?.id === pkg.id ? 'ring-2 ring-teal-600 transform scale-[1.02]' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-teal-700 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}

              {selectedPackage?.id === pkg.id && (
                <div className="absolute top-0 left-0 bg-teal-600 text-white px-3 py-1 text-xs font-bold rounded-br-lg">
                  &#10003; SELECTED
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{pkg.displayPrice}</span>
                    {pkg.originalPrice && (
                      <span className="ml-2 text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  {pkg.id !== 'discovery' && (
                    <p className="text-gray-500 text-sm mt-1">{pkg.perSession} per session</p>
                  )}
                  {pkg.discount && (
                    <div className="mt-2 inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">
                      {pkg.discount}
                    </div>
                  )}
                </div>

                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="text-teal-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2: Select Date & Time */}
      {selectedPackage && (
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Step 2: Select Date &amp; Time
          </h2>
          <BookingCalendar
            onDateTimeSelect={handleDateTimeSelect}
            selectedPackage={selectedPackage}
          />
        </div>
      )}

      {/* Step 3: Enter Details & Consent Form */}
      {selectedPackage && selectedDateTime && (
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Step 3: Your Details &amp; Consent
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Client Information */}
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Client Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Emergency Contact Number *</label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                    placeholder="Emergency contact number"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Your address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Identity Proof (Aadhar / PAN / Voter ID / Driving License)</label>
                <input
                  type="text"
                  name="identityProof"
                  value={formData.identityProof}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="ID number"
                />
              </div>

              {/* Areas of Concern */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Areas of Concern</h3>
                <p className="text-sm text-gray-600 mb-3">Please tick all that apply:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {concernOptions.map((concern, i) => (
                    <label key={i} className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={concerns.includes(concern)}
                        onChange={() => toggleConcern(concern)}
                        className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700">{concern}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Informed Consent */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Informed Consent for Counselling &amp; Therapy</h3>
                <button
                  onClick={() => setShowConsentForm(!showConsentForm)}
                  className="text-teal-700 font-medium underline text-sm mb-4"
                >
                  {showConsentForm ? 'Hide consent details' : 'Read full informed consent'}
                </button>

                {showConsentForm && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-4 text-sm text-gray-700 space-y-4 max-h-96 overflow-y-auto">
                    <p className="font-medium">Thank you for choosing to begin your therapy journey. This form is meant to help you understand how counselling works, your rights as a client, and the responsibilities of both you and your therapist.</p>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Nature of Therapy</h4>
                      <p>Therapy is a collaborative process based on trust, respect, and open communication. Every individual is unique, and therapy is tailored to your personal needs, experiences, and goals. There is no fixed or generic method that works for everyone. Our work together will focus on supporting your emotional and mental well-being and helping you develop insight, coping skills, and personal growth.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Your Rights as a Client</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ask questions about the therapy process and what to expect from sessions.</li>
                        <li>Choose whether or not to participate in any technique or activity suggested by the therapist.</li>
                        <li>Stop therapy at any time and return later if you wish.</li>
                        <li>Be treated with respect, dignity, and without judgment.</li>
                      </ul>
                      <p className="mt-2">The therapist also has the right to discontinue therapy if it is determined that continuing would not be clinically appropriate.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Confidentiality</h4>
                      <p>Your privacy is very important. All information shared in therapy will be kept confidential in accordance with professional and legal guidelines. No information will be shared with any person or organization without your written consent, except in the following situations required by law:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>If there is a serious risk of harm to yourself or others.</li>
                        <li>If there is suspected abuse of a child, elderly person, or dependent adult.</li>
                        <li>If records are requested by a court of law.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Emergency Contact</h4>
                      <p>You agree to provide an emergency contact person who may be contacted only if your safety is at immediate risk.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Online Therapy Disclaimer</h4>
                      <p>Online counselling is provided for emotional and mental health support. It is not a substitute for medical care, psychiatric treatment, or emergency services. Therapy is based on the information you choose to share. While the therapist will make every effort to support you, you are responsible for deciding how to use the insights and suggestions offered. No guarantees are made regarding outcomes of therapy.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Not a Legal or Crisis Service</h4>
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

                <label className="flex items-start space-x-3 cursor-pointer p-3 bg-teal-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={consentSigned}
                    onChange={(e) => setConsentSigned(e.target.checked)}
                    className="w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500 mt-0.5"
                  />
                  <span className="text-sm text-gray-700">
                    I have read and understood the informed consent above. I have had the opportunity to ask questions. I voluntarily agree to participate in counselling sessions under these terms.
                  </span>
                </label>
              </div>

              {/* Booking Summary */}
              <div className="bg-teal-50 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 text-gray-900">Booking Summary</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Package:</strong> {selectedPackage.name}</p>
                  <p><strong>Price:</strong> {selectedPackage.displayPrice}</p>
                  <p><strong>Date:</strong> {selectedDateTime.date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                  <p><strong>Time:</strong> {selectedDateTime.time}</p>
                  <p><strong>Duration:</strong> {selectedPackage.id === 'discovery' ? '15\u201320 minutes' : 'Up to 60 minutes'}</p>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5 mr-3" size={20} />
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              {/* Payment / Confirm Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-200 flex items-center justify-center ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-teal-700 text-white hover:bg-teal-800 hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isProcessing
                  ? 'Processing...'
                  : selectedPackage.id === 'discovery'
                    ? 'Confirm Discovery Call'
                    : `Pay ${selectedPackage.displayPrice} & Confirm`
                }
                {!isProcessing && <ArrowRight className="ml-2" size={20} />}
              </button>

              <p className="text-sm text-gray-500 text-center">
                You&apos;ll receive a session link via email after confirmation.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
