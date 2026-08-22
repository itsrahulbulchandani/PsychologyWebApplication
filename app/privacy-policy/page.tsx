import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy: Confidentiality & Your Rights',
  description:
    'How your privacy is protected in therapy: confidential sessions, secure records, no sharing without consent, and the rare legal exceptions to confidentiality.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  const protections = [
    {
      title: 'Confidential Sessions',
      description: 'What you share during therapy remains private between you and me.',
    },
    {
      title: 'No Sharing Without Permission',
      description:
        'Your personal information, session details, and identity will never be disclosed to anyone without your clear, written consent.',
    },
    {
      title: 'Secure Records',
      description:
        'Any notes or records are stored securely and maintained in line with professional and legal standards.',
    },
    {
      title: 'Website Analytics',
      description:
        'This website uses Google Analytics to count visits and see which pages are read. It records pages viewed, approximate location, and device type. It never receives anything you share in a session, and nothing you enter on the booking form is sent to it.',
    },
  ];

  const exceptions = [
    {
      title: 'Risk of Serious Harm',
      description: "If there is an immediate danger to your safety or to someone else's safety.",
    },
    {
      title: 'Emergency Situations',
      description: 'When urgent action is needed to protect life or wellbeing.',
    },
    {
      title: 'Legal Obligations',
      description: 'If information is required by law or court order.',
    },
  ];

  return (
    <div className="px-5 sm:px-8">
      {/* ——— Header ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-16 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">Legal</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight">
          Privacy <em className="text-pine">policy</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
          Your privacy is deeply respected and protected. Everything you share in therapy is treated
          with care and confidentiality. My goal is to create a safe and trusting space where you can
          speak openly without fear of judgment or exposure.
        </p>
      </section>

      {/* ——— What this means ——— */}
      <section className="max-w-6xl mx-auto py-14 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight">
              What this means <em className="text-pine">for you</em>
            </h2>
          </div>
          <div className="lg:col-span-8">
            {protections.map((item, index) => (
              <div key={index} className="border-t border-ink/10 first:border-t-0 py-6 first:pt-0">
                <h3 className="font-display text-xl text-ink mb-1.5">{item.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed max-w-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Exceptions ——— */}
      <section className="max-w-6xl mx-auto py-14 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight">
              When confidentiality <em className="text-clay">may be limited</em>
            </h2>
            <p className="text-ink-soft text-sm mt-4 max-w-xs leading-relaxed">
              A few rare situations, as required by law and ethical guidelines.
            </p>
          </div>
          <div className="lg:col-span-8">
            {exceptions.map((item, index) => (
              <div key={index} className="border-t border-ink/10 first:border-t-0 py-6 first:pt-0">
                <h3 className="font-display text-xl text-ink mb-1.5">{item.title}</h3>
                <p className="text-ink-soft text-[15px] leading-relaxed max-w-xl">{item.description}</p>
              </div>
            ))}
            <p className="text-ink-soft text-sm italic pt-4 border-t border-ink/10 max-w-xl">
              In such situations, only the minimum necessary information will be shared, and only with
              the appropriate authorities or emergency contacts to ensure safety.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Your rights ——— */}
      <section className="max-w-6xl mx-auto py-14 border-t border-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-tight">
              Your <em className="text-pine">rights</em>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-ink-soft leading-relaxed max-w-xl">
              You have the right to know how your information is handled and protected. These
              confidentiality guidelines will be discussed during your first session, and you are always
              welcome to ask questions or seek clarification at any point in therapy.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Closing ——— */}
      <section className="max-w-6xl mx-auto pt-4">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 text-center">
          <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink max-w-2xl mx-auto">
            Your trust is central to this work. Protecting your privacy is not just a policy.{' '}
            <em className="text-pine">
              it is a professional and ethical commitment I take very seriously.
            </em>
          </p>
        </div>
      </section>
    </div>
  );
}
