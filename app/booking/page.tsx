'use client';

import { useState } from 'react';
import { Check, Clock, Video, AlertCircle } from 'lucide-react';
import BookingCalendar from '@/components/BookingCalendar';

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<{ date: Date; time: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const packages = [
    {
      id: 'single',
      name: "Single Session",
      price: 999,
      displayPrice: "₹999",
      originalPrice: null,
      sessions: 1,
      perSession: "₹999",
      features: [
        "50-minute counselling session",
        "Video/Audio call",
        "Follow-up summary notes",
        "Email support between sessions"
      ],
      popular: false,
      discount: null
    },
    {
      id: '3-session',
      name: "3-Session Package",
      price: 2699,
      displayPrice: "₹2,699",
      originalPrice: "₹2,997",
      sessions: 3,
      perSession: "₹900",
      features: [
        "Three 50-minute sessions",
        "10% discount on total cost",
        "Priority scheduling",
        "Personalized therapy plan",
        "Progress tracking tools",
        "Email support between sessions"
      ],
      popular: true,
      discount: "Save ₹298"
    },
    {
      id: '5-session',
      name: "5-Session Package",
      price: 4249,
      displayPrice: "₹4,249",
      originalPrice: "₹4,995",
      sessions: 5,
      perSession: "₹850",
      features: [
        "Five 50-minute sessions",
        "15% discount on total cost",
        "Priority scheduling",
        "Comprehensive therapy plan",
        "Progress tracking & assessments",
        "Unlimited email support",
        "Resource library access"
      ],
      popular: false,
      discount: "Save ₹746"
    }
  ];

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDateTime({ date, time });
    setError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.mobile) {
      setError('Please fill in all your details');
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

    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(formData.mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      // Create appointment date-time string
      const appointmentDateTime = new Date(selectedDateTime.date);
      const [time, period] = selectedDateTime.time.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      
      appointmentDateTime.setHours(hours, minutes, 0, 0);

      // Initiate payment
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
        // Redirect to PhonePe payment page
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
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Book Your Session
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Choose a package, select your preferred date & time, and complete payment to confirm your booking.
        </p>
      </div>

      {/* Session Information */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-blue-600" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">50-Minute Sessions</h3>
            <p className="text-gray-600">Dedicated time for your mental wellness</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="text-purple-600" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Online Sessions</h3>
            <p className="text-gray-600">Convenient video consultations via Google Meet</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-pink-600 text-2xl font-bold">₹</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
            <p className="text-gray-600">Pay safely via PhonePe</p>
          </div>
        </div>
      </div>

      {/* Step 1: Choose Package */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Step 1: Choose Your Package
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`cursor-pointer relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'ring-4 ring-blue-500' : ''
              } ${
                selectedPackage?.id === pkg.id ? 'ring-4 ring-green-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              {selectedPackage?.id === pkg.id && (
                <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-2 text-sm font-bold rounded-br-lg">
                  ✓ SELECTED
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{pkg.displayPrice}</span>
                    {pkg.originalPrice && (
                      <span className="ml-2 text-xl text-gray-400 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mt-1">
                    {pkg.perSession} per session
                  </p>
                  {pkg.discount && (
                    <div className="mt-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.discount}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="ml-3 text-gray-700">{feature}</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Step 2: Select Date & Time
          </h2>
          <BookingCalendar
            onDateTimeSelect={handleDateTimeSelect}
            selectedPackage={selectedPackage}
          />
        </div>
      )}

      {/* Step 3: Enter Details & Pay */}
      {selectedPackage && selectedDateTime && (
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Step 3: Enter Your Details
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  required
                />
              </div>

              {/* Booking Summary */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
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
                  <p><strong>Duration:</strong> 50 minutes</p>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5 mr-3" size={20} />
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-200 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isProcessing ? 'Processing...' : `Pay ${selectedPackage.displayPrice} via PhonePe`}
              </button>

              <p className="text-sm text-gray-600 text-center">
                You'll receive a Google Meet link via email after successful payment
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
