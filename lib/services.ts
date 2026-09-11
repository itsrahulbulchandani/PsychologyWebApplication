/**
 * Service landing pages.
 *
 * These are the conversion layer, distinct from /guides. A guide answers a
 * question for someone still deciding whether therapy is for them. A service
 * page speaks to someone who has already decided they need help with a
 * specific difficulty and is choosing whom to book.
 *
 * One page per difficulty, never one page per synonym — near-duplicate pages
 * targeting the same intent compete with each other and are treated as
 * doorway pages.
 */

export type Service = {
  /** Route path, without a trailing slash. */
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** H1, split so the second half can be emphasised. */
  headingLead: string;
  headingEmphasis: string;
  intro: string;
  /** Self-recognition list: the strongest conversion element on the page. */
  recogniseHeading: string;
  recogniseIntro: string;
  recognise: string[];
  approachHeading: string;
  approachBody: string[];
  approach: { title: string; body: string }[];
  outcomesHeading: string;
  outcomes: string[];
  /** Stated plainly — an unstated limit reads as an oversold promise. */
  limits: string;
  faqs: { question: string; answer: string }[];
  /** Guide slugs linked from the page, which also feeds internal linking. */
  guides: string[];
  schemaName: string;
  schemaDescription: string;
};

export const services: Service[] = [
  {
    path: '/therapy-for-anxiety',
    metaTitle: 'Therapy for Anxiety in India | Online Sessions from ₹1,200',
    metaDescription:
      'Online therapy for anxiety with a counselling psychologist. Video sessions across India in English and Hindi for worry, overthinking, panic and constant tension. Free discovery call first.',
    eyebrow: 'Anxiety',
    headingLead: 'Therapy for',
    headingEmphasis: 'anxiety',
    intro:
      'Anxiety is treatable, and it responds better to structured psychological work than almost anything else people come to therapy with. Sessions are held over video, anywhere in India, in English or Hindi.',
    recogniseHeading: 'Does this sound familiar?',
    recogniseIntro:
      'You do not need all of these, and none of them is a diagnosis. They are the patterns people describe most often when anxiety has stopped being occasional.',
    recognise: [
      'Your mind runs ahead constantly, rehearsing conversations and outcomes that have not happened.',
      'You re-read messages you have sent, checking the tone.',
      'Sleep is difficult because the day will not switch off.',
      'Your body has joined in — tight chest, jaw, stomach, shoulders.',
      'You avoid things, and the list of avoided things is slowly growing.',
      'You are managing it well enough that nobody has noticed, which is its own kind of tiring.',
    ],
    approachHeading: 'How the work goes',
    approachBody: [
      'Anxiety is maintained by a loop rather than caused by a single thing. Something feels threatening, you manage it by checking, over-preparing or avoiding, the fear drops briefly, and the behaviour gets reinforced. Over months, the strategies that once helped become the mechanism keeping it going.',
      'So the work is not about relaxing harder. It is about finding the loop and interrupting it, which is slower than a breathing exercise and considerably more durable.',
    ],
    approach: [
      {
        title: 'Understanding what your body is doing',
        body: 'Anxiety symptoms are alarming largely because they are misread. Knowing what the physical response actually is reduces its power, and for some people this alone lowers frequency.',
      },
      {
        title: 'Finding the maintaining behaviours',
        body: 'Which habits reduce anxiety in the moment and raise it across the week. This is usually the part people have never examined.',
      },
      {
        title: 'Testing the prediction',
        body: 'Anxiety makes specific forecasts. Checking what actually happens, repeatedly, is how the belief loosens — not by argument.',
      },
      {
        title: 'Building tolerance for uncertainty',
        body: 'The goal is not certainty, which nobody has. It is the capacity to proceed without it.',
      },
    ],
    outcomesHeading: 'What usually changes',
    outcomes: [
      'The gap between a trigger and your reaction gets wider.',
      'You catch the spiral while it is happening rather than afterwards.',
      'Avoided things come back, in an order you choose.',
      'Sleep improves, usually before anything else does.',
      'Anxiety stops being the thing organising your decisions.',
    ],
    limits:
      'I am a counselling psychologist, not a psychiatrist: I do not diagnose or prescribe. Where anxiety is severe, where panic is frequent, or where medication is likely to help, I will say so and suggest a psychiatric assessment alongside therapy. That combination often works better than either alone.',
    faqs: [
      {
        question: 'How many sessions does anxiety usually take?',
        answer:
          'A specific, contained anxiety — presentations, a particular situation — often takes 6 to 10 sessions. Longer-standing generalised anxiety is commonly 12 to 20. You should notice some movement well before the end of that; if you do not, that is worth raising rather than waiting.',
      },
      {
        question: 'Is online therapy effective for anxiety?',
        answer:
          'Yes. Remotely delivered therapy for anxiety has a solid evidence base, and outcomes are broadly comparable to meeting in a room. For socially anxious people, video sessions also remove the waiting-room barrier that stops many from starting at all.',
      },
      {
        question: 'Do I need a diagnosis before booking?',
        answer:
          'No. You do not need a diagnosis, a referral or a doctor’s letter. Most people who come with anxiety have never been assessed for anything, and do not need to be.',
      },
      {
        question: 'What does it cost?',
        answer:
          'The first discovery call is free. A single session of up to 60 minutes is ₹1,200, a three-session bundle is ₹3,200 and a six-session bundle is ₹6,000.',
      },
      {
        question: 'Will I have to do homework?',
        answer:
          'Some, and it matters. Anxiety changes through what you practise between sessions, not only through the hour itself. The tasks are agreed with you rather than assigned, and they are small on purpose.',
      },
    ],
    guides: [
      'therapy-for-panic-attacks',
      'therapy-for-social-anxiety',
      'therapy-for-workplace-anxiety',
      'therapy-for-health-anxiety',
    ],
    schemaName: 'Online therapy for anxiety',
    schemaDescription:
      'Online counselling for anxiety, worry, overthinking and panic with Bhavana Bulchandani, counselling psychologist. Video sessions across India in English and Hindi.',
  },

  {
    path: '/therapy-for-depression',
    metaTitle: 'Therapy for Depression & Low Mood in India | Online Sessions',
    metaDescription:
      'Online counselling for depression and persistent low mood with a counselling psychologist. Video sessions across India in English and Hindi. Free discovery call, from ₹1,200.',
    eyebrow: 'Low mood',
    headingLead: 'Therapy for',
    headingEmphasis: 'depression and low mood',
    intro:
      'Low mood is not a failure of willpower and it does not usually lift by being pushed through. Sessions are held over video, anywhere in India, in English or Hindi.',
    recogniseHeading: 'What people describe',
    recogniseIntro:
      'Depression is not always sadness. Very often it presents as flatness, and people arrive apologising for not having a reason.',
    recognise: [
      'Things you used to enjoy have stopped registering.',
      'Everything takes more effort than it should, including small things.',
      'You are functioning — work, family — and running on empty underneath it.',
      'Sleep has changed, in either direction.',
      'You are unusually harsh with yourself, in a voice you would never use on anyone else.',
      'You feel guilty for feeling this way, because nothing bad has happened.',
    ],
    approachHeading: 'How the work goes',
    approachBody: [
      'Depression maintains itself through withdrawal. Energy drops, so you do less; doing less removes the sources of reward and contact that lift mood; mood drops further. The spiral is slow enough that most people do not notice it happening.',
      'Therapy works on both ends: re-establishing activity in a way that is actually achievable at low energy, and examining the beliefs that have hardened while you were depleted.',
    ],
    approach: [
      {
        title: 'Starting from what is possible',
        body: 'Not an ambitious routine you will fail and feel worse about. Small, specific, achievable steps that rebuild momentum from where you actually are.',
      },
      {
        title: 'Looking at the internal commentary',
        body: 'Depression narrows thinking into a set of confident conclusions about yourself and the future. Examining them, rather than arguing with them, is much of the work.',
      },
      {
        title: 'Reconnecting with what mattered',
        body: 'Values and interests do not disappear during depression; access to them does. Restoring that access matters more than chasing happiness.',
      },
      {
        title: 'Understanding what set it off',
        body: 'Sometimes there is a clear cause, sometimes not. Either is workable, and the absence of a reason is not evidence that the depression is invalid.',
      },
    ],
    outcomesHeading: 'What usually changes',
    outcomes: [
      'Mornings get less heavy.',
      'The self-critical voice gets quieter and less automatic.',
      'Things start registering again — slowly, and unevenly.',
      'You stop needing to justify how you feel.',
      'You recognise a downturn earlier next time, and respond to it differently.',
    ],
    limits:
      'As a counselling psychologist I do not diagnose or prescribe. For moderate to severe depression, medication alongside therapy frequently works better than therapy alone, and I will recommend a psychiatric assessment where I think it is warranted. If you have thoughts of harming yourself, please contact Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112 — this is not a crisis service.',
    faqs: [
      {
        question: 'Is it depression, or am I just tired?',
        answer:
          'That is a fair question and not one to settle alone. A useful marker is duration and breadth: low mood most of the day, most days, for two weeks or more, affecting sleep, appetite, concentration and interest across your whole life rather than one part of it. A doctor can also exclude physical causes — thyroid problems, anaemia and vitamin deficiencies produce very similar symptoms.',
      },
      {
        question: 'Do I have to be diagnosed to get help?',
        answer:
          'No. Plenty of people who benefit from this work would not meet criteria for any diagnosis, and do not need one to start.',
      },
      {
        question: 'I am already on medication. Is therapy still useful?',
        answer:
          'Yes, and the combination is often more effective than either alone. Tell me on the first call so I have the full picture, and keep your prescriber informed.',
      },
      {
        question: 'How long does it take?',
        answer:
          'Typically 12 to 20 sessions, though it varies considerably with how long the low mood has been present and what is driving it. Early sessions often feel harder before they feel easier.',
      },
      {
        question: 'What if I cannot face talking?',
        answer:
          'That is common and it is workable. You do not have to arrive with an account prepared. Sessions can start slowly, and difficulty speaking about it is itself something we can work with rather than an obstacle to starting.',
      },
    ],
    guides: [
      'therapy-for-low-self-esteem',
      'therapy-for-sleep-problems',
      'therapy-for-new-parents',
      'therapy-for-grief-and-loss',
    ],
    schemaName: 'Online therapy for depression and low mood',
    schemaDescription:
      'Online counselling for depression, persistent low mood and loss of motivation with Bhavana Bulchandani, counselling psychologist. Video sessions across India.',
  },

  {
    path: '/therapy-for-stress-and-burnout',
    metaTitle: 'Therapy for Work Stress & Burnout in India | Online Sessions',
    metaDescription:
      'Online therapy for burnout, work stress and exhaustion with a counselling psychologist. Evening and early slots, sessions across India in English and Hindi, from ₹1,200.',
    eyebrow: 'Stress and burnout',
    headingLead: 'Therapy for',
    headingEmphasis: 'stress and burnout',
    intro:
      'Burnout is not weakness and it is not fixed by a holiday. It is what sustained demand without sustained recovery does to people. Sessions over video, with slots that fit around working hours.',
    recogniseHeading: 'What burnout actually looks like',
    recogniseIntro:
      'It is frequently mistaken for laziness by the person experiencing it, which is part of why it goes so far before anyone addresses it.',
    recognise: [
      'Exhaustion that sleep and weekends no longer touch.',
      'Cynicism about work you used to care about.',
      'Sunday evenings are ruined by Monday.',
      'You are less effective, and compensating with longer hours.',
      'Irritability at home with people who have done nothing wrong.',
      'You cannot rest without guilt, and you cannot work without resentment.',
    ],
    approachHeading: 'How the work goes',
    approachBody: [
      'The first task is separating what is environmental from what is personal. Some workplaces produce burnout in healthy people, and treating that as an individual coping deficiency is both wrong and useless. Equally, some patterns — inability to say no, worth tied to output, a standard nobody set but you — travel with a person from job to job.',
      'Most people arrive with some of each, and the work is different for each part.',
    ],
    approach: [
      {
        title: 'Mapping the demand',
        body: 'What is actually required of you, what you have taken on voluntarily, and what you are doing because nobody stopped you.',
      },
      {
        title: 'Rebuilding recovery',
        body: 'Burnout is a recovery problem before it is a workload problem. This is practical work, and more specific than being told to rest.',
      },
      {
        title: 'The standard underneath',
        body: 'Often a belief that rest is earned and worth is produced. That belief predates the job and will follow you to the next one.',
      },
      {
        title: 'Boundaries that survive contact with reality',
        body: 'Built for the job you actually have, not an idealised one, so they hold on a bad week.',
      },
    ],
    outcomesHeading: 'What usually changes',
    outcomes: [
      'Evenings stop being a continuation of the working day.',
      'You can rest without negotiating with yourself first.',
      'The decision about whether to stay or leave becomes clear, in either direction.',
      'You notice the early signals next time, months before the wall.',
      'Work becomes something you do rather than something you are.',
    ],
    limits:
      'Burnout and depression overlap considerably and are not the same thing. If what you are describing looks more like depression, I will say so, and where symptoms are severe I will suggest a psychiatric assessment alongside therapy.',
    faqs: [
      {
        question: 'Is burnout the same as depression?',
        answer:
          'They overlap and they are distinct. Burnout is typically tied to a context — usually work — and eases when the context genuinely changes. Depression is broader, affecting interest and mood across your whole life regardless of setting. The two frequently occur together, and it is worth establishing which you are dealing with early, because the response differs.',
      },
      {
        question: 'Will therapy just tell me to quit my job?',
        answer:
          'No. That is your decision and it usually has consequences that no therapist has to live with. The work is about seeing the situation clearly — what can change, what cannot, and what staying is actually costing — so that whichever you choose, you choose it deliberately.',
      },
      {
        question: 'I cannot take time off for sessions.',
        answer:
          'Sessions run over video and slots are available early and in the evening, IST. Most working clients use a slot before the day starts or after it ends, and the absence of a commute means an hour costs an hour.',
      },
      {
        question: 'How long does burnout recovery take?',
        answer:
          'Commonly 8 to 16 sessions for the psychological work. Full recovery of energy usually takes longer than that and depends substantially on whether the conditions that caused it change.',
      },
    ],
    guides: [
      'therapy-for-workplace-anxiety',
      'therapy-for-sleep-problems',
      'therapy-for-career-change-and-uncertainty',
      'therapy-for-procrastination-and-motivation',
    ],
    schemaName: 'Online therapy for work stress and burnout',
    schemaDescription:
      'Online counselling for burnout, chronic work stress and exhaustion with Bhavana Bulchandani, counselling psychologist. Evening and early slots, sessions across India.',
  },

  {
    path: '/relationship-counselling',
    metaTitle: 'Relationship & Couples Counselling Online in India',
    metaDescription:
      'Online relationship counselling in India with a counselling psychologist — for couples and for individuals working on a relationship alone. English and Hindi, from ₹1,200.',
    eyebrow: 'Relationships',
    headingLead: 'Relationship',
    headingEmphasis: 'counselling',
    intro:
      'Most relationship difficulty is not about the argument you are having. It is about the one underneath it, which has usually been running for years. Sessions over video, across India, in English or Hindi.',
    recogniseHeading: 'What brings people here',
    recogniseIntro:
      'You do not need a crisis, and you do not need your partner to agree to come. A great deal of useful relationship work is done by one person.',
    recognise: [
      'The same argument, in different clothing, for the fourth time this month.',
      'Conversations that start about one thing and end somewhere much older.',
      'Distance that has grown quietly, without a rupture.',
      'Family expectation pressing on the relationship from outside it.',
      'Trust damaged, and no agreed way to rebuild it.',
      'Deciding whether to continue, and being unable to think clearly about it.',
    ],
    approachHeading: 'How the work goes',
    approachBody: [
      'Couples rarely disagree about the surface topic. Underneath repeated arguments there is usually a pattern — one person pursues, the other withdraws; one raises, the other defuses — and the pattern runs faster than either person can think.',
      'Work begins by slowing that down enough to see it. Once a couple can name the pattern while it is happening, the content of the argument matters much less.',
    ],
    approach: [
      {
        title: 'Finding the pattern',
        body: 'Not who is right. What the sequence is, and what each person is protecting when it starts.',
      },
      {
        title: 'Hearing what is underneath',
        body: 'Criticism usually carries a request. Withdrawal usually carries overwhelm. Neither is audible in the moment without help.',
      },
      {
        title: 'The family dimension',
        body: 'In many Indian relationships the couple is not a closed system. Parents, in-laws and obligation are genuinely part of the picture, and treating that as interference rather than context is unhelpful.',
      },
      {
        title: 'Repair',
        body: 'Every couple ruptures. The difference between couples who last and couples who do not is largely what happens afterwards, and repair is a skill that can be learned.',
      },
    ],
    outcomesHeading: 'What usually changes',
    outcomes: [
      'Arguments get shorter, and recovery afterwards gets faster.',
      'You can name the pattern while it is happening.',
      'Difficult subjects become raisable rather than avoided.',
      'Where the relationship is ending, it ends with more clarity and less damage.',
    ],
    limits:
      'Couples work is not appropriate where there is abuse or where one partner is unsafe. If that is your situation, individual support and a safety plan come first, and joint sessions can make things more dangerous rather than less. Please contact Tele-MANAS on 14416, or emergency services on 112 if you are in immediate danger.',
    faqs: [
      {
        question: 'Can I come alone if my partner will not?',
        answer:
          'Yes, and it is more common than joint work. One person changing their side of a pattern changes the pattern, because the sequence requires both people to run it. Individual relationship work is also the right choice where the difficulty is more about your own anxiety inside relationships than about this particular partner.',
      },
      {
        question: 'Do you take sides?',
        answer:
          'No. In joint sessions my responsibility is to the relationship and to both people in it. If you want someone to confirm that you are right, couples work will be frustrating — that is not what it does.',
      },
      {
        question: 'What if we are deciding whether to separate?',
        answer:
          'That is a legitimate reason to come. The work then is about reaching the decision clearly rather than by attrition, and sometimes about separating with less harm — particularly where children are involved.',
      },
      {
        question: 'Is this marriage counselling?',
        answer:
          'The same work, whether you are married, engaged, living together or dating. It is also relevant to relationships with parents and siblings, which in Indian families are frequently the relationships under the most strain.',
      },
      {
        question: 'How does a joint session work over video?',
        answer:
          'You join together from the same room where possible, or separately if you are in different cities. Both work. What matters far more is that each of you has privacy from anyone else in the house.',
      },
    ],
    guides: [
      'therapy-for-relationship-anxiety',
      'therapy-after-a-breakup',
      'therapy-for-people-in-their-20s',
      'therapy-for-anger',
    ],
    schemaName: 'Online relationship and couples counselling',
    schemaDescription:
      'Online relationship counselling in India with Bhavana Bulchandani, counselling psychologist, for couples and for individuals working on a relationship alone.',
  },
];

const byPath = new Map(services.map((service) => [service.path, service]));

export const getService = (path: string) => byPath.get(path);
