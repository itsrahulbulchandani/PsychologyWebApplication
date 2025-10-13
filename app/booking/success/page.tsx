import Link from 'next/link';
import { CheckCircle, Calendar, Mail, Video } from 'lucide-react';

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Booking Confirmed! 🎉
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Your therapy session has been successfully booked and added to the calendar.
          </p>

          {/* What's Next */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8 text-left">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    <Mail className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-900">Check Your Email</h3>
                  </div>
                  <p className="text-gray-700">
                    You'll receive a confirmation email with all the details about your session.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    <Calendar className="text-purple-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-900">Calendar Invite</h3>
                  </div>
                  <p className="text-gray-700">
                    A calendar invite has been added to your Google Calendar with all the appointment details.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-1">
                    <Video className="text-pink-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-900">Google Meet Link</h3>
                  </div>
                  <p className="text-gray-700">
                    Your email will contain a Google Meet link. Simply click it at your appointment time to join.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-lg mb-3 text-gray-900">Important Notes:</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Please join the meeting 2-3 minutes before your scheduled time</li>
              <li>Ensure you have a stable internet connection</li>
              <li>Find a quiet, private space for the session</li>
              <li>Have your camera and microphone ready</li>
              <li>If you need to reschedule, please contact us at least 24 hours in advance</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Back to Home
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 border-2 border-blue-600"
            >
              Browse Resources
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Questions? Contact me at{' '}
              <a href="mailto:bhavana@counselling.com" className="text-blue-600 hover:text-purple-600 font-semibold">
                bhavana@counselling.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

