export default function TermsPage() {
  const sections = [
    {
      number: "1",
      title: "Payment Policy",
      points: [
        "All sessions must be paid in full in advance before the session begins.",
        "A session is confirmed only after payment has been received.",
      ]
    },
    {
      number: "2",
      title: "Cancellation & Rescheduling",
      points: [
        "Sessions can be rescheduled if you inform the therapist at least 24 hours in advance.",
        "Requests made within 24 hours of the scheduled session may not be eligible for rescheduling.",
      ]
    },
    {
      number: "3",
      title: "Emergency Exceptions",
      points: [
        "In cases of genuine emergencies (such as serious illness or critical family situations), one reschedule may be offered as a courtesy, at the therapist\u2019s discretion, even if prior notice could not be given.",
      ]
    },
    {
      number: "4",
      title: "Missed Sessions / No-Shows",
      points: [
        "If you miss a session without prior notice and without an emergency reason, the session will be considered completed.",
        "No refunds or rescheduling will be provided in such cases, as the time was reserved specifically for you.",
      ]
    },
    {
      number: "5",
      title: "Late Arrival",
      points: [
        "The therapist will wait up to 10 minutes from the scheduled session time.",
        "If you do not join within this time, the session will be marked as completed.",
        "If you arrive late, the session will still end at the original scheduled time.",
      ]
    },
    {
      number: "6",
      title: "Technical & Internet Issues",
      points: [
        "In case of internet or technical difficulties, both the client and therapist will attempt to reconnect for up to 10 minutes.",
        "If the session cannot be conducted due to persistent connection issues, the session will be considered completed.",
      ]
    },
    {
      number: "7",
      title: "Therapist\u2019s Rights",
      points: [
        "The therapist reserves the right to reschedule sessions in case of personal emergencies or unforeseen circumstances.",
        "The therapist reserves the right to refer the client to another mental health professional if continuing therapy is not clinically appropriate or beneficial, with prior communication.",
      ]
    },
    {
      number: "8",
      title: "Client Responsibilities",
      points: [
        "The client agrees to attend sessions on time and in a private, quiet space.",
        "The client agrees to provide accurate information necessary for therapeutic work.",
        "The client agrees to follow the informed consent and confidentiality guidelines.",
      ]
    },
    {
      number: "9",
      title: "Acceptance of Terms",
      points: [
        "By booking a session, you confirm that you have read, understood, and agreed to these Terms & Conditions, along with the Informed Consent policy.",
      ]
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Terms &amp; <span className="text-teal-700">Conditions</span>
        </h1>
        <p className="text-gray-500">Last updated: January 26, 2026</p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          These terms are designed to ensure clarity, respect for time, and a smooth therapeutic process for both the client and the therapist.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                    {section.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-teal-600 mt-1 flex-shrink-0">&#8226;</span>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
