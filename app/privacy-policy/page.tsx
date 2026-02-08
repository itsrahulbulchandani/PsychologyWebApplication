import { Shield, Lock, AlertTriangle, UserCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Privacy <span className="text-teal-700">Policy</span>
        </h1>
        <p className="text-xl text-teal-700 font-medium">Your Privacy Matters</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            Your privacy is deeply respected and protected. Everything you share in therapy is treated with care and confidentiality. My goal is to create a safe and trusting space where you can speak openly without fear of judgment or exposure.
          </p>
        </div>

        {/* What This Means */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center space-x-3">
            <Shield className="text-teal-700" size={28} />
            <span>What This Means for You</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900">Confidential Sessions</h3>
                <p className="text-gray-700">What you share during therapy remains private between you and me.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900">No Sharing Without Permission</h3>
                <p className="text-gray-700">Your personal information, session details, and identity will never be disclosed to anyone without your clear, written consent.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-teal-600 rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900">Secure Records</h3>
                <p className="text-gray-700">Any notes or records are stored securely and maintained in line with professional and legal standards.</p>
              </div>
            </div>
          </div>
        </div>

        {/* When Confidentiality May Be Broken */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center space-x-3">
            <AlertTriangle className="text-amber-600" size={28} />
            <span>When Confidentiality May Be Broken</span>
          </h2>
          <p className="text-gray-700 mb-6">
            There are a few rare situations where confidentiality must be limited, as required by law and ethical guidelines:
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900">Risk of Serious Harm</h3>
                <p className="text-gray-700">If there is an immediate danger to your safety or to someone else&apos;s safety.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900">Emergency Situations</h3>
                <p className="text-gray-700">When urgent action is needed to protect life or wellbeing.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-bold text-gray-900">Legal Obligations</h3>
                <p className="text-gray-700">If information is required by law or court order.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-6 text-sm italic">
            In such situations, only the minimum necessary information will be shared, and only with the appropriate authorities or emergency contacts to ensure safety.
          </p>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center space-x-3">
            <UserCheck className="text-teal-700" size={28} />
            <span>Your Rights</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to know how your information is handled and protected. These confidentiality guidelines will be discussed during your first session, and you are always welcome to ask questions or seek clarification at any point in therapy.
          </p>
        </div>

        {/* Closing */}
        <div className="bg-teal-50 rounded-2xl p-8 md:p-12 text-center">
          <Lock className="text-teal-700 mx-auto mb-4" size={32} />
          <p className="text-gray-800 leading-relaxed text-lg font-medium">
            Your trust is central to this work. Protecting your privacy is not just a policy &mdash; it is a professional and ethical commitment I take very seriously.
          </p>
        </div>
      </div>
    </div>
  );
}
