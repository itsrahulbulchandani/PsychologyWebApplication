import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import FAQList from '@/components/FAQList';
import type { Service } from '@/lib/services';
import { getGuide } from '@/lib/guides';
import { breadcrumbSchema, faqSchema, localServiceSchema, jsonLdScript } from '@/lib/schema';
import { siteConfig } from '@/lib/site';

/**
 * Shared layout for the service landing pages, so adding a service is a data
 * change rather than another copy of this markup.
 */
export default function ServiceLanding({ service }: { service: Service }) {
  const guides = service.guides.map((slug) => getGuide(slug)).filter(Boolean);

  return (
    <div className="px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          localServiceSchema({
            path: service.path,
            name: service.schemaName,
            description: service.schemaDescription,
            cityNames: siteConfig.location.servesCities,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          faqSchema(service.faqs, { id: `${siteConfig.url}${service.path}#faqpage` })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([{ name: service.schemaName, path: service.path }])
        )}
      />

      {/* ——— Hero ——— */}
      <section className="max-w-6xl mx-auto pt-16 pb-14 lg:pt-24 animate-fadeInUp">
        <p className="eyebrow mb-6">{service.eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-6xl text-ink leading-tight max-w-3xl">
          {service.headingLead} <em className="text-pine">{service.headingEmphasis}</em>
        </h1>
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">{service.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link href="/booking" className="btn-primary">
            Book a free discovery call
            <ArrowRight size={16} />
          </Link>
          <p className="text-sm text-ink-soft">
            Free 15–20 minutes · Sessions from ₹1,200 · English or Hindi
          </p>
        </div>
      </section>

      {/* ——— Self-recognition ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="border-t border-ink/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">{service.recogniseHeading}</h2>
          <p className="mt-4 text-ink-soft leading-relaxed max-w-xl">{service.recogniseIntro}</p>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl">
            {service.recognise.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                <span className="text-pine/50 shrink-0 mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Approach ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="border-t border-ink/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">{service.approachHeading}</h2>
          <div className="mt-4 max-w-xl space-y-4">
            {service.approachBody.map((paragraph) => (
              <p key={paragraph} className="text-ink-soft leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
            {service.approach.map((step) => (
              <div key={step.title}>
                <h3 className="font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Outcomes ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="border-t border-ink/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">{service.outcomesHeading}</h2>
          <ul className="mt-8 space-y-3 max-w-2xl">
            {service.outcomes.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                <Check size={18} className="text-pine shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] text-ink-soft leading-relaxed max-w-2xl border-l-2 border-pine/30 pl-5">
            {service.limits}
          </p>
        </div>
      </section>

      {/* ——— Pricing ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="border-t border-ink/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">What it costs</h2>
          <dl className="mt-8 max-w-2xl">
            {[
              ['Discovery call, 15–20 minutes', 'Free'],
              ['Single session, up to 60 minutes', '₹1,200'],
              ['Three-session bundle', '₹3,200'],
              ['Six-session bundle', '₹6,000'],
            ].map(([label, price]) => (
              <div
                key={label}
                className="flex justify-between gap-6 border-t border-ink/10 last:border-b py-4"
              >
                <dt className="text-ink-soft">{label}</dt>
                <dd className="text-ink font-medium">{price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[15px] text-ink-soft leading-relaxed max-w-xl">
            Paid sessions are arranged after the discovery call. There is no obligation to book one.
          </p>
        </div>
      </section>

      {/* ——— FAQs ——— */}
      <section className="max-w-6xl mx-auto pb-16">
        <div className="border-t border-ink/10 pt-12">
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-8">Common questions</h2>
          <div className="max-w-3xl">
            <FAQList faqs={service.faqs} idPrefix={service.path.replace(/\//g, '')} />
          </div>
        </div>
      </section>

      {/* ——— Related guides ——— */}
      {guides.length > 0 && (
        <section className="max-w-6xl mx-auto pb-16">
          <div className="border-t border-ink/10 pt-12">
            <p className="eyebrow mb-4">Read more</p>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-8">
              Related <em className="text-pine">guides</em>
            </h2>
            <div>
              {guides.map((guide) => (
                <Link
                  key={guide!.slug}
                  href={`/guides/${guide!.slug}`}
                  className="group border-t border-ink/10 last:border-b py-5 flex items-center justify-between gap-6"
                >
                  <span className="font-display text-lg text-ink group-hover:text-pine transition-colors">
                    {guide!.title}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-ink/30 group-hover:text-pine transition-colors shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ——— CTA ——— */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-14 sm:px-16 sm:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Next step</p>
            <p className="font-display text-2xl sm:text-[1.75rem] leading-[1.45] text-ink">
              The first conversation is free, and there is{' '}
              <em className="text-pine">no obligation to book a session afterwards.</em>
            </p>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Fifteen to twenty minutes over video. You describe what has been going on, ask whatever
              you want to ask, and we both decide whether this is a fit.
            </p>
            <Link href="/booking" className="btn-primary mt-10">
              Book a free discovery call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
