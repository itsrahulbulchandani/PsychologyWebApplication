import Link from 'next/link';
import { XCircle, RefreshCcw, Mail } from 'lucide-react';

export default function BookingErrorPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="text-red-600" size={48} />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Booking Failed
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We encountered an issue processing your booking or payment. Please try again.
          </p>

          {/* Possible Reasons */}
          <div className="bg-red-50 rounded-xl p-8 mb-8 text-left">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Possible Reasons:</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Payment was not completed</li>
              <li>Payment was cancelled</li>
              <li>Network connection issue</li>
              <li>Invalid payment details</li>
              <li>Technical error during booking</li>
            </ul>
          </div>

          {/* What to Do */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8 text-left">
            <h2 className="text-xl font-bold mb-4 text-gray-900">What You Can Do:</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <RefreshCcw className="text-blue-600 flex-shrink-0 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-bold mb-1">Try Again</h3>
                  <p className="text-gray-700">Go back to the booking page and try booking again</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-purple-600 flex-shrink-0 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-bold mb-1">Contact Support</h3>
                  <p className="text-gray-700">If the problem persists, please reach out to us directly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 rounded-xl p-6 mb-8">
            <p className="text-gray-800">
              <strong>Note:</strong> If money was deducted from your account but booking failed, 
              please contact us immediately. We'll verify the payment and create your booking manually.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <RefreshCcw className="mr-2" size={20} />
              Try Again
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 border-2 border-gray-300"
            >
              Back to Home
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-2">Need immediate assistance?</p>
            <a 
              href="mailto:bhavana@counselling.com" 
              className="text-blue-600 hover:text-purple-600 font-semibold text-lg"
            >
              bhavana@counselling.com
            </a>
            <p className="text-gray-600 mt-2">+91 XXXX XXXXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}

