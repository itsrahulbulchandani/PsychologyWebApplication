import type { Guide } from './types';

/** Original publication date from when these lived on the blog. */
const LOCAL_PUBLISHED = '2026-08-29';

/**
 * Delhi-specific guides. These began life as blog posts; they are reference
 * material rather than personal writing, so they belong here.
 */
export const delhiGuides: Guide[] = [
  {
    cluster: 'delhi',
    slug: 'how-much-does-therapy-cost-in-delhi',
    title: 'How much does therapy cost in Delhi?',
    metaTitle: 'How Much Does Therapy Cost in Delhi? A Straight Answer',
    metaDescription:
      'What a psychologist in Delhi actually charges, what drives the price up or down, why the cheapest option is often the most expensive, and what to ask before you pay.',
    excerpt:
      'Fees in Delhi vary more than almost any other service you will buy, and almost nobody explains why. Here is what you are actually paying for, and how to work out what is reasonable.',
    datePublished: LOCAL_PUBLISHED,
    dateModified: LOCAL_PUBLISHED,
    readingMinutes: 7,
    standfirst:
      'The honest answer is a range, not a number. What is more useful is understanding what moves the number, because that is what tells you whether a fee is fair.',
    body: [
      {
        type: 'p',
        text: 'Almost every enquiry I get includes some version of the question, usually near the end and usually a little apologetically. It deserves a direct answer, so here is mine first and the reasoning afterwards.',
      },
      {
        type: 'p',
        text: '**My own fees:** the first discovery call of 15 to 20 minutes is free. A single session of up to 60 minutes is ₹1,200. A three-session bundle is ₹3,200 and a six-session bundle is ₹6,000. Sessions are online, payment is made before the session, and the fee is the same for individual, couple and family work. You can see the whole list on the [booking page](/booking).',
      },
      {
        type: 'h2',
        text: 'Why the range across Delhi is so wide',
      },
      {
        type: 'p',
        text: 'Fees for a single session in Delhi commonly sit somewhere between a few hundred rupees and several thousand, and the spread is not arbitrary. Roughly, the price moves with five things:',
      },
      {
        type: 'ul',
        items: [
          '**Qualification and years in practice.** A clinical psychologist with an RCI licence and fifteen years of hospital experience is priced differently from a counselling psychologist five years in, and both differently again from a counsellor with a short certificate course.',
          '**Setting.** A room in a South Delhi clinic carries rent, reception staff and utilities. An online practice does not. That difference is real and it shows up in the fee.',
          '**Platform or independent.** Large therapy platforms take a cut of every session, often a substantial one, which either raises your fee or lowers what the therapist receives. Independent practitioners set their own.',
          '**Specialisation.** Trauma work, specific therapy modalities requiring separate certification, and assessment work are usually priced above general counselling.',
          '**Session length.** Fifty minutes and ninety minutes are not the same product, and quoted rates do not always make clear which one you are buying.',
        ],
      },
      {
        type: 'p',
        text: 'None of these is a proxy for how helpful someone will be to you specifically. A higher fee buys more experience and often more scarcity; it does not buy a better fit. The single strongest predictor of whether therapy works is the working relationship, and no price tier guarantees one.',
      },
      {
        type: 'h2',
        text: 'The cost most people forget to count',
      },
      {
        type: 'p',
        text: 'In Delhi, the fee is rarely the largest number. A 7 pm appointment in Saket, taken from an office in Gurugram, is a fee plus roughly three hours of your evening plus the cab. Do that weekly and the real cost of the session is closer to double the printed price, and the cost is paid in the currency people run out of first, which is time.',
      },
      {
        type: 'p',
        text: 'This matters because it is usually what ends therapy. Not doubt, not money, but the fourth or fifth week when the commute finally wins and a session gets skipped. Skipped sessions are the most expensive kind: you pay for the weeks you attended and get much less from them, because the work depends on continuity. It is one of the clearest arguments for [online sessions](/online-therapy-india), where the only cost is the fifty minutes themselves.',
      },
      {
        type: 'h2',
        text: 'Why the cheapest option is often the most expensive',
      },
      {
        type: 'p',
        text: 'India has no single licensing register for counselling psychologists, which means the title is not, by itself, a safeguard. At the bottom of the price range you will find genuinely good practitioners early in their careers who have deliberately priced low, and you will also find people with a weekend certificate and a listing. The first group is excellent value. The second costs you months.',
      },
      {
        type: 'p',
        text: 'The way to tell them apart is not the fee. It is asking. A qualified practitioner will answer questions about their degree, their supervision and their approach without becoming defensive, because those questions are normal and they expect them.',
      },
      {
        type: 'h2',
        text: 'What to ask before you pay anyone',
      },
      {
        type: 'ol',
        items: [
          'What is your highest qualification in psychology, and which university awarded it?',
          'Are you a counselling psychologist, a clinical psychologist, or a counsellor, and what is the difference in what you can offer me?',
          'Do you receive supervision, and how often?',
          'What approach would you use for what I have described, and why that one?',
          'How long is a session, what does the fee include, and what is the cancellation policy?',
          'What happens if you think I need something you do not provide, such as medication?',
        ],
      },
      {
        type: 'p',
        text: 'If you are not sure what the first two questions are actually asking, the article on [the difference between a psychologist, a therapist and a psychiatrist](/blog/difference-between-psychologist-therapist-and-psychiatrist) sets it out.',
      },
      {
        type: 'h2',
        text: 'How many sessions should you budget for?',
      },
      {
        type: 'p',
        text: 'For a focused concern such as a specific anxiety pattern, an ending, or a decision you are stuck on, many people do meaningful work in six to twelve sessions. Longer-standing patterns take longer, and nobody honest will give you a number in the first week. What a good practitioner will do is review progress with you at intervals and say plainly if the work is not going anywhere, rather than let it drift.',
      },
      {
        type: 'p',
        text: 'Bundles exist mostly to make that budgeting easier and to lower the per-session cost slightly. They should never be a lock-in. If a practice will not let you start with a single session or a free call, treat that as information.',
      },
      {
        type: 'note',
        text: 'If cost is the reason you have not started, say so on the first call rather than quietly not booking. Sliding-scale places, university training clinics and government services such as Tele-MANAS on 14416 exist, and a practitioner who cannot help you should be able to point you to one that can.',
      },
      {
        type: 'h2',
        text: 'The short version',
      },
      {
        type: 'p',
        text: 'There is no single price for therapy in Delhi, and the number on its own tells you very little. Work out the full cost including your time, ask the six questions above, and treat a free first call as the cheapest possible way to find out whether someone is right for you. If you want to see how mine works, the [discovery call](/booking) is fifteen to twenty minutes and carries no obligation at all.',
      },
    ],
    related: [
      'how-to-choose-a-psychologist-in-delhi',
      'how-much-does-therapy-cost-in-india',
      'counselling-psychologist-vs-clinical-psychologist',
    ],
    cta: {
      heading: 'Want to know what a session would actually involve?',
      body: 'The discovery call is free, lasts 15 to 20 minutes, and exists so you can ask exactly these questions before spending anything.',
    },
  },

  {
    cluster: 'delhi',
    slug: 'how-to-choose-a-psychologist-in-delhi',
    title: 'How to choose a psychologist in Delhi',
    metaTitle: 'How to Choose a Psychologist in Delhi: A Practical Guide',
    metaDescription:
      'How to check a psychologist’s qualifications in Delhi, what the titles actually mean, the red flags worth walking away from, and the questions to ask on a first call.',
    excerpt:
      'Search results will give you a hundred names and no way to tell them apart. Here is what actually separates a good fit from an expensive detour.',
    datePublished: LOCAL_PUBLISHED,
    dateModified: LOCAL_PUBLISHED,
    readingMinutes: 8,
    standfirst:
      'Choosing a therapist is one of the few significant decisions people make almost entirely on the basis of a search ranking. It is worth ten minutes of doing it properly.',
    body: [
      {
        type: 'p',
        text: 'If you search for a psychologist in Delhi you will get directories, sponsored listings, aggregator platforms and a wall of near-identical profile photographs. Almost none of it tells you the two things that actually matter: whether the person is properly qualified, and whether they are the right fit for what you are carrying.',
      },
      {
        type: 'h2',
        text: 'First, the titles are not interchangeable',
      },
      {
        type: 'p',
        text: 'In India, "therapist" and "counsellor" are not protected terms. Anyone can use them. That is the single most important fact in this article, and it is why the checking matters.',
      },
      {
        type: 'ul',
        items: [
          '**Clinical psychologist.** Holds an MPhil or equivalent and, in India, is typically licensed by the Rehabilitation Council of India. Trained in assessment and in working with more severe mental illness.',
          '**Counselling psychologist.** Holds a postgraduate degree in psychology with counselling training. Works with anxiety, stress, low mood, relationships, burnout, self-esteem and life transitions. Does not diagnose or prescribe.',
          '**Psychiatrist.** A medical doctor with a psychiatric specialisation. The only one of the three who can prescribe medication.',
          '**Counsellor.** A broad and unregulated label covering everything from a two-year postgraduate diploma to a short online certificate.',
        ],
      },
      {
        type: 'p',
        text: 'None of these is superior in the abstract. They answer different questions. The [longer explanation is here](/blog/difference-between-psychologist-therapist-and-psychiatrist), and it is worth reading before you shortlist anyone.',
      },
      {
        type: 'h2',
        text: 'What to check, in order',
      },
      {
        type: 'ol',
        items: [
          '**The specific degree and the university that awarded it.** Not "trained in psychology" but the actual qualification. A practitioner who is vague about this in writing will usually be vague about it on a call too.',
          '**Registration or membership,** where it applies: RCI for clinical psychologists, and bodies such as the NCAHP or professional associations for others. India is still building a single register, so absence is not automatically disqualifying, but presence is a useful signal.',
          '**Supervision.** Practising therapists discuss their cases with a more senior practitioner, anonymously. It is standard and it is a quality control. Ask.',
          '**Their approach, and why it fits you.** "Eclectic" is a real answer only when the person can say what they would draw on for your particular difficulty and why.',
          '**Scope honesty.** Ask what they do not do. A good practitioner has a ready answer and a referral route.',
        ],
      },
      {
        type: 'h2',
        text: 'Fit is not a soft consideration',
      },
      {
        type: 'p',
        text: 'Decades of outcome research point at the same finding: the strength of the working relationship predicts results more reliably than the specific method used. That is not a licence to ignore credentials. It means that once you are choosing between qualified people, the deciding factor should be how you feel talking to them, not who has the longer list of certifications.',
      },
      {
        type: 'p',
        text: 'Practical version: notice whether you find yourself editing what you say. Notice whether the person interrupts your description to explain you to yourself in the first ten minutes. Notice whether you feel slightly braced. Those signals are data, and they will not improve over time.',
      },
      {
        type: 'p',
        text: 'Preferences count here too. Wanting a therapist of a particular gender, or one who speaks Hindi comfortably, or one closer to your own age, is not a bias to be argued out of. If it lets you be direct sooner, it makes the work better. That is the whole reason the [female psychologist page](/female-psychologist-in-delhi) on this site exists.',
      },
      {
        type: 'h2',
        text: 'Red flags worth walking away from',
      },
      {
        type: 'ul',
        items: [
          'Guaranteed outcomes, or a promised number of sessions before anyone has heard your situation.',
          'Pressure to buy a long package upfront, or reluctance to let you start with one session.',
          'Defensiveness when asked about qualifications or supervision.',
          'Advice in the first session that arrives before the questions do.',
          'Any suggestion of contact outside the professional frame, or blurred boundaries of any kind.',
          'A refusal to discuss confidentiality and its limits in plain language.',
        ],
      },
      {
        type: 'h2',
        text: 'The Delhi-specific part: logistics decide whether it lasts',
      },
      {
        type: 'p',
        text: 'A therapist you cannot reach reliably is a therapist you will stop seeing. Before you commit, run the week in your head honestly. Can you make a 6 pm slot in South Delhi from your office in Noida, every week, in July and in December? If the answer is no, the choice is not between this therapist and another one; it is between a format that fits your life and one that does not.',
      },
      {
        type: 'p',
        text: 'This is the practical case for online sessions rather than a philosophical one. For the concerns most people bring, video work performs comparably to sitting in a room, and it removes the variable that most often ends therapy. If you want the detail, [how online therapy works in India](/blog/how-online-therapy-works-in-india) covers the setup, the privacy question and what to do when the connection drops.',
      },
      {
        type: 'h2',
        text: 'Use the first call properly',
      },
      {
        type: 'p',
        text: 'Most practitioners offer a short introductory call, and most people waste it by treating it as an audition they have to pass. It is the reverse. You are deciding. Bring your questions written down if that helps, ask about qualifications and approach, describe what has been happening and listen to how it is received.',
      },
      {
        type: 'p',
        text: 'You are allowed to speak to two or three people before choosing, and you are allowed to say afterwards that it is not a fit. No competent therapist will take offence at either. If someone does, they have answered your question.',
      },
      {
        type: 'note',
        text: 'If you are in immediate distress, this is not the process to work through. Tele-MANAS is available free on 14416 or 1800-891-4416, KIRAN on 1800-599-0019, and emergency services on 112.',
      },
      {
        type: 'p',
        text: 'If you want to test this against a real conversation, the [free discovery call](/booking) here is 15 to 20 minutes and is designed for exactly this: you ask, I answer, and nobody has committed to anything. My own qualifications and approach are set out in full on the [about page](/about).',
      },
    ],
    related: [
      'how-much-does-therapy-cost-in-delhi',
      'what-qualifications-should-a-psychologist-have-in-india',
      'questions-to-ask-a-therapist-before-you-start',
    ],
    cta: {
      heading: 'Ask me the questions in this article',
      body: 'The discovery call is free and carries no obligation. It is a reasonable way to find out whether we would work well together.',
    },
  },
];
