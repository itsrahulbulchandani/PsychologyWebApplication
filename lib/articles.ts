/**
 * On-site article content.
 *
 * Articles live here as structured blocks rather than raw HTML so that every
 * post renders with the site's existing typography and can never break the
 * design. Inline markup inside `text` supports:
 *   [label](/internal-path)  → internal link
 *   **bold**                 → emphasis
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string };

export type Article = {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> tag, without the site-name suffix. */
  metaTitle: string;
  metaDescription: string;
  /** Shown on the blog index and used as the article description in schema. */
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  /** Standfirst paragraph shown under the H1. */
  standfirst: string;
  body: Block[];
  related: string[];
  cta: { heading: string; body: string };
};

const PUBLISHED = '2026-08-24';

export const articles: Article[] = [
  {
    slug: 'how-do-i-know-if-i-need-therapy',
    title: 'How do I know if I need therapy?',
    metaTitle: 'How Do I Know If I Need Therapy? Signs It May Help',
    metaDescription:
      'You do not have to be in crisis to benefit from therapy. A counselling psychologist explains the everyday signs that therapy may help, and what to do next.',
    excerpt:
      'Most people who start therapy are not in crisis. They are tired, stuck, or carrying something they have stopped talking about. Here is how to tell whether therapy is worth trying.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 7,
    standfirst:
      'One of the most common questions I hear on a discovery call is some version of “is this bad enough for therapy?” It is worth answering properly, because the honest answer surprises most people.',
    body: [
      {
        type: 'p',
        text: 'There is a quiet belief many of us grow up with: that therapy is for people who have hit a wall. A breakdown, a diagnosis, a crisis. So we wait. We wait until things get bad enough to justify asking for help, and in the waiting, things often get harder than they needed to.',
      },
      {
        type: 'p',
        text: 'In practice, most people who begin counselling are not in crisis at all. They are functioning. They go to work, answer messages, show up for the people who need them. They are also exhausted in a way sleep does not fix, or stuck in the same argument for the fourth time this month, or lying awake replaying a conversation from two years ago.',
      },
      { type: 'h2', text: 'Signs that therapy may be useful for you' },
      {
        type: 'p',
        text: 'None of the following is a diagnosis, and no single item on this list means something is wrong with you. Think of them instead as signals worth paying attention to, especially when several show up together or when one has been true for a few weeks or more.',
      },
      {
        type: 'ul',
        items: [
          '**The same problem keeps repeating.** Different job, different relationship, same pattern. You can see the loop but cannot seem to step out of it.',
          '**Your reactions feel bigger, or flatter, than the situation.** Small things set off a disproportionate response, or things that used to matter have stopped landing at all.',
          '**Sleep, appetite, or concentration have shifted.** Your body often registers emotional strain before your mind agrees to name it.',
          '**You are managing rather than living.** Getting through the day takes everything you have, and there is nothing left over for the parts of life you used to enjoy.',
          '**You have stopped talking about it.** You have edited the hard thing out of conversations with friends, either to protect them or because you are tired of explaining.',
          '**Something happened and you have not processed it.** A loss, a breakup, a move, a betrayal, an illness. You handled the logistics. You never handled the feeling.',
          '**You want to understand yourself better.** Not everything that brings people to therapy is painful. Wanting clarity about your values, choices, or direction is a perfectly good reason.',
        ],
      },
      { type: 'h2', text: 'You do not need a diagnosis to qualify' },
      {
        type: 'p',
        text: 'Counselling is not gated behind a mental health condition. Plenty of the work I do is with people who would not meet criteria for any diagnosis and do not need one. They are dealing with ordinary human difficulty: pressure at work, a relationship that has gone quiet, a decision they cannot make, a sense that they have drifted away from themselves.',
      },
      {
        type: 'p',
        text: 'It is also worth saying the reverse. If you are experiencing something more persistent, such as low mood that has lasted for weeks, anxiety that interferes with daily functioning, or thoughts of harming yourself, that is a reason to reach out sooner rather than to disqualify yourself. In those situations, talking to a mental health professional or a doctor promptly matters.',
      },
      {
        type: 'note',
        text: 'This is not a crisis service. If you or someone you know is in immediate danger, contact Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112.',
      },
      { type: 'h2', text: '“My problem is too small”' },
      {
        type: 'p',
        text: 'This one comes up constantly, and it usually comes from a good place: not wanting to take up space, or comparing yourself to someone who “has it worse”. But suffering is not a competition with an entry threshold. If something is taking up room in your mind, it is real enough to talk about.',
      },
      {
        type: 'p',
        text: 'There is also a practical argument. Smaller difficulties are usually easier to work with than entrenched ones. Coming in early often means fewer sessions, not more.',
      },
      { type: 'h2', text: 'How therapy is different from talking to a friend' },
      {
        type: 'p',
        text: 'Friends are essential, and therapy is not a replacement for them. But a friend has a stake in your life. They know the people involved, they have opinions about your choices, and they may need something from you in return. That is what friendship is.',
      },
      {
        type: 'p',
        text: 'A therapist sits outside your world. The hour belongs entirely to you. There is no need to manage how your story affects the person hearing it, no expectation that you will ask about their week, and no risk that what you say will circulate. On top of that, a counselling psychologist is trained to notice patterns you are too close to see, and to ask questions that move you rather than simply reassure you.',
      },
      { type: 'h2', text: 'What actually happens if you decide to try' },
      {
        type: 'p',
        text: 'You do not have to commit to a course of therapy to find out whether it will help. In my practice the first step is a free 15 to 20 minute [discovery call](/booking): you describe what has been going on, I explain how I work, and we both get a sense of whether this is a good fit. There is no obligation to book anything afterwards.',
      },
      {
        type: 'p',
        text: 'If you do continue, the early sessions are about understanding your situation and agreeing on what you actually want out of this. You can read the full process on [what to expect](/what-to-expect), and the areas I most often work with on [how I can help](/how-i-can-help).',
      },
      { type: 'h2', text: 'A simpler way to decide' },
      {
        type: 'p',
        text: 'If the list above did not settle it, try this question instead: **if nothing changes in six months, how will you feel about that?**',
      },
      {
        type: 'p',
        text: 'If the honest answer is “fine, this will probably pass”, then it probably will, and you can revisit the question later. If the answer is closer to “I do not want to still be here”, that is usually enough of a reason to have a conversation with someone.',
      },
    ],
    related: [
      'what-happens-in-your-first-therapy-session',
      'how-online-therapy-works-in-india',
      'difference-between-psychologist-therapist-and-psychiatrist',
    ],
    cta: {
      heading: 'Not sure whether therapy is the right step?',
      body: 'That is exactly what a discovery call is for. Fifteen to twenty minutes, free, and no obligation to book a session afterwards.',
    },
  },
  {
    slug: 'how-online-therapy-works-in-india',
    title: 'How does online therapy work in India?',
    metaTitle: 'How Does Online Therapy Work in India? A Practical Guide',
    metaDescription:
      'What online therapy in India actually involves: booking, session length, cost, privacy, technology, language, and how it compares with meeting in person.',
    excerpt:
      'A practical walkthrough of online counselling in India, from booking your first call to what happens between sessions, and an honest look at where video therapy works well and where it does not.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 8,
    standfirst:
      'Online therapy has quietly become the default way many Indians access mental health support. Here is what the experience actually looks like, without the marketing gloss.',
    body: [
      {
        type: 'p',
        text: 'For a long time, seeing a psychologist in India meant living in a city that had one, being able to travel there weekly, and being comfortable sitting in a waiting room where someone might recognise you. That ruled out an enormous number of people. Video sessions changed the arithmetic.',
      },
      { type: 'h2', text: 'What “online therapy” means in practice' },
      {
        type: 'p',
        text: 'It means the same conversation, conducted over a secure video call instead of across a room. The training, the therapeutic approach, the confidentiality obligations and the structure of a session are unchanged. What changes is the logistics: you attend from wherever you are, and the commute disappears.',
      },
      {
        type: 'p',
        text: 'Sessions are usually one-to-one video calls. Audio-only is a reasonable alternative if your connection is unreliable or if being on camera feels like too much at the start.',
      },
      { type: 'h2', text: 'The usual sequence' },
      {
        type: 'ol',
        items: [
          '**A discovery call.** A short, free conversation, typically 15 to 20 minutes, where you describe what is going on and ask whatever you need to ask. Its purpose is fit, not therapy.',
          '**Booking and intake.** You choose a slot and complete an intake and consent form covering your contact details, an emergency contact, what brings you to counselling, how long it has been going on, and whether you are on any psychiatric medication.',
          '**Your first sessions.** The first one or two sessions are about understanding your history and agreeing on goals. You will not be expected to arrive with a neat summary of your problem.',
          '**Ongoing sessions.** Usually weekly to begin with, each up to 60 minutes, with the frequency reviewed as things shift.',
          '**Work between sessions.** Often some reflection or a practical exercise, so the change does not only exist inside the session hour.',
        ],
      },
      { type: 'h2', text: 'What you need on your end' },
      {
        type: 'ul',
        items: [
          '**A private space for the hour.** This is the single biggest predictor of whether online therapy works for someone. A closed room is ideal; a car, a terrace, or a quiet corner with headphones all work.',
          '**A stable connection.** Mobile data is usually fine. If the video stutters, switching to audio mid-session is normal and not a failure.',
          '**Headphones.** They improve audio quality and, more importantly, keep your side of the conversation to yourself.',
          '**A device you can prop up.** Holding a phone for an hour is tiring and makes it harder to settle.',
        ],
      },
      { type: 'h2', text: 'Privacy and confidentiality' },
      {
        type: 'p',
        text: 'Everything you share is confidential and is not disclosed without your permission, with the narrow exceptions that apply to counselling everywhere: a serious risk of harm to you or someone else, or a legal requirement. Session notes are kept securely. You can read the specifics on the [privacy policy](/privacy-policy) page.',
      },
      {
        type: 'p',
        text: 'One thing worth planning for that is unique to online work: your own environment is not automatically private. If you live with family or flatmates, it is worth deciding in advance where you will take the call and what you will say if someone asks. Many people simply say they have a meeting.',
      },
      { type: 'h2', text: 'Language' },
      {
        type: 'p',
        text: 'Sessions here are held in English, Hindi, or a mix of the two. This matters more than it sounds. Emotional vocabulary is not evenly distributed across the languages we speak, and many people find that the feeling only arrives properly in the language they grew up in. You are not expected to translate yourself for your therapist.',
      },
      { type: 'h2', text: 'Cost' },
      {
        type: 'p',
        text: 'Fees vary widely across India, from subsidised community services to premium private practice. In this practice, the discovery call is free, a single session is ₹1,200 for up to 60 minutes, and multi-session bundles bring the per-session cost down. Current pricing is always on the [booking page](/booking).',
      },
      {
        type: 'p',
        text: 'It is reasonable to ask about fees on a discovery call, and it is reasonable to factor cost into how often you meet. Fortnightly sessions you can sustain are better than weekly sessions you have to abandon after a month.',
      },
      { type: 'h2', text: 'Does it actually work as well as sitting in a room?' },
      {
        type: 'p',
        text: 'For most of the concerns people bring to counselling, including anxiety, stress, low mood, relationship difficulties, burnout and self-esteem, working over video is a genuinely comparable experience. The therapeutic relationship, which is the part that does most of the work, forms perfectly well over a screen.',
      },
      {
        type: 'p',
        text: 'Where online has real limits: if you are in acute crisis, if you need psychiatric assessment or medication, or if you have no private space at all, then online counselling is not the right first step. In those situations the honest answer is a referral, and I will tell you so rather than take the booking.',
      },
      { type: 'h2', text: 'What online adds that in-person does not' },
      {
        type: 'ul',
        items: [
          'You can see a psychologist whose approach suits you rather than whoever is geographically nearest.',
          'No travel, which makes a weekly commitment far easier to keep.',
          'You end the session in your own space, which many people find gentler than walking straight onto a street.',
          'Continuity when you travel, move city, or change jobs.',
        ],
      },
      { type: 'h2', text: 'Starting' },
      {
        type: 'p',
        text: 'If you want to see the full session-by-session structure before committing to anything, [what to expect](/what-to-expect) sets it out in detail, and the [FAQ](/faq) covers rescheduling, session length and confidentiality. When you are ready, the [discovery call](/booking) is free and there is no obligation to continue.',
      },
    ],
    related: [
      'what-happens-in-your-first-therapy-session',
      'how-do-i-know-if-i-need-therapy',
      'difference-between-psychologist-therapist-and-psychiatrist',
    ],
    cta: {
      heading: 'See whether online therapy suits you',
      body: 'A free 15 to 20 minute video call is the easiest way to find out, and it costs you nothing but the time.',
    },
  },
  {
    slug: 'anxiety-vs-stress-whats-the-difference',
    title: 'Anxiety vs stress: what is the difference?',
    metaTitle: 'Anxiety vs Stress: What Is the Difference?',
    metaDescription:
      'Stress and anxiety feel similar but behave differently. A counselling psychologist explains how to tell them apart, why it matters, and when to seek support.',
    excerpt:
      'Stress usually has an address. Anxiety often does not. Understanding which one you are dealing with changes what actually helps.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 7,
    standfirst:
      'People use the two words interchangeably, and in casual conversation that is fine. In terms of what helps, though, the distinction is genuinely useful.',
    body: [
      {
        type: 'p',
        text: 'Both stress and anxiety involve the same underlying machinery: a nervous system preparing you to deal with a threat. Raised heart rate, tight chest, shallow breathing, a mind that will not stop scanning. From the inside they can feel identical. The difference lies in what is driving the response and how it behaves over time.',
      },
      { type: 'h2', text: 'Stress: a response to something specific' },
      {
        type: 'p',
        text: 'Stress is your response to an identifiable demand or pressure. A deadline, an exam, a difficult manager, a family situation, a move. It usually has three characteristics:',
      },
      {
        type: 'ul',
        items: [
          '**It has a source you can name.** If someone asks what is stressing you, you have an answer.',
          '**It is proportionate to the demand.** Bigger pressure, more stress.',
          '**It eases when the situation resolves.** The submission goes in, the result comes out, and the intensity drops.',
        ],
      },
      {
        type: 'p',
        text: 'Stress is not inherently harmful. In manageable doses it sharpens attention and mobilises energy. It becomes a problem when it is chronic, when the demands never let up long enough for your system to reset, or when it exceeds what your current resources can absorb.',
      },
      { type: 'h2', text: 'Anxiety: a response that outlasts the trigger' },
      {
        type: 'p',
        text: 'Anxiety is the anticipation of threat rather than the reaction to a present one. Its defining feature is that it does not switch off when the situation resolves. The presentation goes well and within an hour your mind has found the next thing to worry about. Or there is no identifiable thing at all, just a persistent hum of unease.',
      },
      {
        type: 'ul',
        items: [
          '**The focus is the future.** “What if” rather than “this is happening”.',
          '**It persists without a current trigger.** It can arrive on a quiet Sunday with nothing pending.',
          '**It is often out of proportion.** Not because you are being dramatic, but because the alarm system has become oversensitive.',
          '**It tends to generalise.** It starts with work, then includes health, then relationships.',
        ],
      },
      { type: 'h2', text: 'A quick way to tell them apart' },
      {
        type: 'p',
        text: 'Ask yourself: **if the thing I am worried about were resolved right now, would this feeling stop?**',
      },
      {
        type: 'p',
        text: 'If yes, you are probably dealing with stress. If your mind immediately supplies a replacement worry, or if you cannot identify what would need to resolve, anxiety is a better description of what is happening.',
      },
      { type: 'h2', text: 'Why the difference changes what helps' },
      {
        type: 'p',
        text: 'This is not a semantic exercise. The two respond to different things.',
      },
      {
        type: 'p',
        text: '**Stress responds to changing the load.** Boundaries, delegation, sleep, better planning, recovery time, saying no, asking for help. If the demands on you genuinely exceed your capacity, no amount of reframing will fix that. The load has to move.',
      },
      {
        type: 'p',
        text: '**Anxiety responds to changing your relationship with the threat.** Because the trigger is anticipated rather than present, reducing the load often does not help; anxiety simply finds a new object. What tends to work is learning to recognise anxious thinking patterns, testing predictions rather than obeying them, gradually reducing avoidance, and building the ability to tolerate uncertainty. This is much of what cognitive behavioural work is for.',
      },
      {
        type: 'p',
        text: 'Getting this wrong is a common reason people feel that “nothing works”. Applying stress-management advice to anxiety produces a well-organised calendar and an unchanged level of dread. Applying anxiety techniques to genuine overload teaches you to tolerate a situation that should have been changed.',
      },
      { type: 'h2', text: 'They frequently occur together' },
      {
        type: 'p',
        text: 'In practice, most people arrive with both. A period of sustained stress leaves the nervous system running hot, and anxiety builds on top of it. Overthinking then becomes the bridge between the two: replaying what happened, rehearsing what might. If that is the part you recognise most, [therapy for overthinking](/blog/therapy-for-overthinking-and-anxiety) goes into it in more depth.',
      },
      { type: 'h2', text: 'When to consider professional support' },
      {
        type: 'p',
        text: 'Consider speaking to a psychologist or a doctor if any of these are true:',
      },
      {
        type: 'ul',
        items: [
          'It has been going on for several weeks and is not shifting.',
          'It is affecting your sleep, appetite, work, or relationships.',
          'You are avoiding things you used to do without difficulty.',
          'You are relying on alcohol, substances, or compulsive habits to bring the volume down.',
          'The physical symptoms are frightening you, in which case a medical check is worth ruling out first.',
        ],
      },
      {
        type: 'note',
        text: 'Nothing here is a diagnosis. Only a qualified professional who knows your history can assess what you are experiencing, and this article is not a substitute for that.',
      },
      {
        type: 'p',
        text: 'Working on anxiety and stress is a large part of my practice; you can read about the approach on [how I can help](/how-i-can-help). If you want to talk it through first, the [discovery call](/booking) is free.',
      },
    ],
    related: [
      'therapy-for-overthinking-and-anxiety',
      'signs-of-burnout-and-how-therapy-helps',
      'how-do-i-know-if-i-need-therapy',
    ],
    cta: {
      heading: 'Working through anxiety or stress',
      body: 'If the pattern above sounds familiar, a free discovery call is a low-pressure way to talk about what has been happening.',
    },
  },
  {
    slug: 'when-should-you-consider-couples-therapy',
    title: 'When should you consider couples therapy?',
    metaTitle: 'When Should You Consider Couples Therapy?',
    metaDescription:
      'Most couples wait years before seeking counselling. Here are the signs that relationship therapy is worth considering now, and what couples sessions actually involve.',
    excerpt:
      'Couples rarely arrive because of one big event. They arrive because of a pattern that has been running for years. Here is how to know when it is time.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 8,
    standfirst:
      'The most common mistake couples make is treating counselling as a last resort. By the time it feels obviously necessary, the work is harder than it needed to be.',
    body: [
      {
        type: 'p',
        text: 'There is a version of relationship counselling that exists in most people’s heads: two people on a sofa, one of them about to leave, a professional deciding who is right. That is not what it is, and that image is a large part of why people wait so long.',
      },
      {
        type: 'p',
        text: 'Couples counselling is a structured conversation held by someone who is not on either side. Its aim is not to allocate blame or to keep a relationship together at any cost. It is to help two people understand what keeps happening between them and decide, with more clarity than they currently have, what they want to do about it.',
      },
      { type: 'h2', text: 'Signs it may be worth considering' },
      {
        type: 'ul',
        items: [
          '**The same argument repeats with different content.** The topic changes, the choreography does not. You both know how it will end before it starts.',
          '**Conversations have gone quiet.** Not fighting is not the same as being fine. Many couples arrive because the silence has become louder than the conflict ever was.',
          '**Something happened and it has not been resolved.** A betrayal, a loss, a decision made unilaterally. Life carried on around it, but it is still sitting there.',
          '**You are having the conversation in your head instead of out loud.** Rehearsing, editing, deciding it is not worth it.',
          '**A major transition is underway.** Moving cities, a new job, a child, a parent falling ill, a career shift. Transitions expose the parts of a relationship that were being carried by routine.',
          '**One of you feels significantly more invested than the other.** Imbalance in effort is one of the most reliable predictors of resentment.',
          '**You feel more alone with your partner than without them.** This one is worth taking seriously.',
        ],
      },
      { type: 'h2', text: 'Reasons that are good enough on their own' },
      {
        type: 'p',
        text: 'You do not need a crisis. Couples come for reasons that are far less dramatic and entirely valid: wanting to communicate better before a big commitment, working out how to handle two families with different expectations, negotiating money or household labour, rebuilding closeness after a long stressful stretch, or simply wanting a neutral space to talk about something that keeps going sideways at home.',
      },
      { type: 'h2', text: 'What actually happens in a couples session' },
      {
        type: 'p',
        text: 'The early sessions are mostly about mapping. Each of you describes how you see things, which is often the first time in a long while that either of you has been able to speak without immediate interruption or defence. My job is to hear both accounts as legitimate, which is different from treating both as accurate in every detail.',
      },
      {
        type: 'p',
        text: 'From there the work usually moves to the pattern rather than the incident. Most recurring conflicts are not really about the dishes, the phone, or the in-laws. They are about something underneath: feeling unimportant, feeling controlled, feeling unsafe, feeling unseen. Once that layer becomes visible, the surface arguments tend to lose their charge.',
      },
      {
        type: 'p',
        text: 'Practical work follows: how to raise something difficult without it escalating, how to repair after a fight, how to make requests instead of complaints, and how to tell the difference between a disagreement that needs solving and one that needs accepting. Sessions here are up to 60 minutes and held online, with individual, couple and family formats available.',
      },
      { type: 'h2', text: 'What couples counselling is not' },
      {
        type: 'ul',
        items: [
          '**It is not arbitration.** I will not tell you who was right. That would be useless even if it were possible.',
          '**It is not a guarantee.** Counselling improves the quality of the conversation. It cannot promise a particular outcome, and any professional who promises one is overselling.',
          '**It is not only for couples who are staying together.** Some of the most valuable work happens with couples who decide to separate, and do it with less damage than they would have otherwise.',
          '**It is not a place to be ambushed.** If one partner has been brought along to be corrected, that becomes obvious quickly and we address it directly.',
        ],
      },
      { type: 'h2', text: 'When individual therapy is the better starting point' },
      {
        type: 'p',
        text: 'Sometimes what looks like a relationship problem is being driven mostly by something individual: untreated anxiety, burnout, unprocessed grief, or a pattern that predates this relationship by decades. In those cases individual sessions, sometimes alongside couples work, do more good.',
      },
      {
        type: 'p',
        text: 'There are also situations where couples counselling is not appropriate at all, including ongoing abuse or intimidation, or where one partner is not safe to speak freely. If that is your situation, individual support and safety planning come first.',
      },
      { type: 'h2', text: 'If only one of you is willing' },
      {
        type: 'p',
        text: 'This is extremely common, and it is not a dead end. Relationships are systems; when one person changes how they respond, the pattern shifts whether or not the other person has agreed to change anything. Starting on your own is a legitimate move, not a consolation prize.',
      },
      { type: 'h2', text: 'The practical next step' },
      {
        type: 'p',
        text: 'If you are unsure whether your situation suits couples work or individual work, that is a reasonable thing to bring to a [free discovery call](/booking). You can also read more about how relationship difficulties are approached here on [how I can help](/how-i-can-help), and about the session structure on [what to expect](/what-to-expect).',
      },
    ],
    related: [
      'how-do-i-know-if-i-need-therapy',
      'what-happens-in-your-first-therapy-session',
      'how-online-therapy-works-in-india',
    ],
    cta: {
      heading: 'Thinking about relationship counselling',
      body: 'A free discovery call is a straightforward way to talk through whether couples sessions or individual sessions make more sense for you.',
    },
  },
  {
    slug: 'what-happens-in-your-first-therapy-session',
    title: 'What happens in your first therapy session?',
    metaTitle: 'What Happens in Your First Therapy Session?',
    metaDescription:
      'A counselling psychologist walks through the first therapy session step by step: what you will be asked, what you do not have to share, and how to prepare.',
    excerpt:
      'Nervousness before a first session is close to universal. Knowing the shape of the hour in advance takes most of the edge off.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 7,
    standfirst:
      'The fear is rarely about therapy itself. It is about not knowing what will be asked of you. So here is the whole hour, described plainly.',
    body: [
      {
        type: 'p',
        text: 'Almost everyone is nervous before a first session, including people who have been in therapy before. It is a strange social situation: you are about to speak candidly to someone you have never met, about things you may not have said out loud to anyone.',
      },
      {
        type: 'p',
        text: 'The single most useful thing I can tell you is that the first session is not a test, and there is nothing you have to get right.',
      },
      { type: 'h2', text: 'Before the session' },
      {
        type: 'p',
        text: 'In this practice, most people have already had a free 15 to 20 minute discovery call, so the first full session is not a cold start. You will also have completed an intake and consent form covering your contact details, an emergency contact, a short description of what brings you to counselling, how long it has been going on, and whether you are taking any psychiatric medication.',
      },
      {
        type: 'p',
        text: 'That form is not a screening exercise designed to filter you out. It exists so that the session hour can be spent on you rather than on admin, and so that I have the safety information any counsellor needs to have.',
      },
      { type: 'h2', text: 'The first few minutes' },
      {
        type: 'p',
        text: 'We start with the boundaries of the space, because they are what make the rest of it possible: what confidentiality means and where its limits are, how long sessions run, how rescheduling works, and how to reach me between sessions. You will have space to ask about any of it.',
      },
      {
        type: 'p',
        text: 'Then, usually, a fairly open question. Something like: what made you decide to reach out now? Not what is wrong with you. Why now, rather than six months ago or six months from now, is often the most revealing thing about a person’s situation.',
      },
      { type: 'h2', text: 'The middle of the session' },
      {
        type: 'p',
        text: 'This part belongs to you. You talk, I listen, and I ask questions to understand rather than to challenge. There may be some background: your living situation, work or study, important relationships, whether you have been in therapy before and how that went, and whether you have had any medical or psychiatric input.',
      },
      {
        type: 'p',
        text: 'Some people arrive with an ordered account and get through it in twenty minutes. Others start somewhere unexpected and circle towards the real thing. Both are completely normal. If you go blank, say so; that itself is information, and I will help you start somewhere.',
      },
      { type: 'h2', text: 'What you do not have to do' },
      {
        type: 'ul',
        items: [
          '**You do not have to disclose everything.** You control the pace. Something you are not ready to talk about can wait until session six, or never.',
          '**You do not have to cry, and you do not have to hold it together.** Both are fine. Neither is a measure of whether it is working.',
          '**You do not have to have a diagnosis or a label** for what you are experiencing.',
          '**You do not have to justify why your problem qualifies.** If it matters to you, it is relevant.',
          '**You do not have to be articulate.** Half-formed and contradictory is how most people actually feel.',
        ],
      },
      { type: 'h2', text: 'How it ends' },
      {
        type: 'p',
        text: 'The last stretch is about direction. We will name, provisionally, what seems most important to work on, and I will say something about how I would approach it. Provisional matters: goals set in a first session almost always get revised once the real picture emerges, and that is expected rather than a sign of a false start.',
      },
      {
        type: 'p',
        text: 'You may leave with something small to notice or try before the next session. And we will agree whether to book again. That decision is genuinely yours; there is no obligation attached to having had one session.',
      },
      { type: 'h2', text: 'How you might feel afterwards' },
      {
        type: 'p',
        text: 'Reactions vary more than people expect. Relief is common, particularly if you have been carrying something alone. So is tiredness, since sustained honesty is effortful. Some people feel briefly worse, having deliberately looked at something they normally step around; that usually settles and is not a sign that therapy is the wrong choice.',
      },
      {
        type: 'p',
        text: 'If you can, leave a little unstructured time afterwards rather than going straight into a meeting.',
      },
      { type: 'h2', text: 'How to prepare' },
      {
        type: 'p',
        text: 'Very little preparation is needed. If you want to do something, it helps to have a private space where you will not be interrupted, headphones, and a rough sense of what you would like to be different in your life. That last one can be as vague as “I want to stop feeling like this”.',
      },
      {
        type: 'p',
        text: 'The full session-by-session structure is set out on [what to expect](/what-to-expect), and the [FAQ](/faq) answers the practical questions about length, frequency, confidentiality and rescheduling. If you would rather talk to a person before booking anything, the [discovery call](/booking) is free and there is no obligation to continue.',
      },
    ],
    related: [
      'how-do-i-know-if-i-need-therapy',
      'how-online-therapy-works-in-india',
      'anxiety-vs-stress-whats-the-difference',
    ],
    cta: {
      heading: 'Start with a conversation, not a commitment',
      body: 'The free discovery call exists precisely so that your first real session is not the first time we speak.',
    },
  },
  {
    slug: 'difference-between-psychologist-therapist-and-psychiatrist',
    title: 'Psychologist, therapist or psychiatrist: what is the difference?',
    metaTitle: 'Psychologist vs Therapist vs Psychiatrist: The Difference',
    metaDescription:
      'Confused about which mental health professional to see in India? A clear explanation of what psychologists, counsellors, therapists and psychiatrists each do.',
    excerpt:
      'The titles overlap, are used loosely, and mean slightly different things in different countries. Here is a practical guide to who does what in India.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 7,
    standfirst:
      'Choosing the wrong professional wastes time and money at exactly the point when you have least patience for either. The distinctions are simpler than they look.',
    body: [
      {
        type: 'p',
        text: 'If you have searched for mental health support in India, you have probably seen the words psychologist, counsellor, therapist, psychotherapist and psychiatrist used almost interchangeably. They are not the same thing, and the practical difference comes down to training, and to whether the person can prescribe medication.',
      },
      { type: 'h2', text: 'Psychiatrist' },
      {
        type: 'p',
        text: 'A psychiatrist is a **medical doctor** who has completed an MBBS followed by postgraduate specialisation in psychiatry. Because they are physicians, they can diagnose mental health conditions in a medical sense, prescribe medication, and manage the physical aspects of psychiatric care.',
      },
      {
        type: 'p',
        text: 'You would typically see a psychiatrist when medication is likely to be part of the picture, when symptoms are severe or persistent, when there is a question about a specific psychiatric diagnosis, or in acute situations. Some psychiatrists also offer psychotherapy; many focus on medication management and work alongside a therapist.',
      },
      { type: 'h2', text: 'Psychologist' },
      {
        type: 'p',
        text: 'A psychologist holds a postgraduate degree in psychology, usually an MA or MSc, often with a specialisation such as counselling or clinical psychology. Psychologists are trained in human behaviour, emotion and cognition, and in the psychological therapies used to work with them. **Psychologists do not prescribe medication.**',
      },
      {
        type: 'p',
        text: 'Within this there are meaningful distinctions:',
      },
      {
        type: 'ul',
        items: [
          '**Counselling psychologists** generally work with emotional and situational difficulty: anxiety, stress, low mood, relationships, self-esteem, burnout, grief, identity and life transitions. The emphasis is on the person and their context rather than on pathology.',
          '**Clinical psychologists** in India typically hold an MPhil in Clinical Psychology recognised by the Rehabilitation Council of India, and work more with formal psychological assessment and with severe or complex mental illness.',
        ],
      },
      {
        type: 'p',
        text: 'For most of the concerns people search for online, a counselling psychologist is the appropriate professional. For a formal psychological assessment or a serious psychiatric condition, a clinical psychologist or psychiatrist is.',
      },
      { type: 'h2', text: 'Counsellor' },
      {
        type: 'p',
        text: 'Counsellor is a broader and less regulated title. It may refer to someone with a postgraduate qualification in counselling or guidance, or to someone with a shorter certification. Counsellors typically work with present-focused difficulties, decision-making and adjustment, rather than with complex mental illness.',
      },
      {
        type: 'p',
        text: 'Because the title carries no single guaranteed standard in India, it is entirely reasonable to ask any counsellor directly about their qualifications. A good practitioner will not mind the question.',
      },
      { type: 'h2', text: '“Therapist” and “psychotherapist”' },
      {
        type: 'p',
        text: 'Therapist is an umbrella word rather than a qualification. A psychologist offering therapy is a therapist. So is a psychiatrist who does psychotherapy, and so is a trained psychotherapist who is neither. It tells you what someone does, not what they trained in.',
      },
      {
        type: 'p',
        text: 'This is why the useful question is never “are you a therapist?” but “what is your qualification, and what approach do you work with?”',
      },
      { type: 'h2', text: 'Which one should you see?' },
      {
        type: 'p',
        text: 'A rough guide, not a rule:',
      },
      {
        type: 'ul',
        items: [
          '**Stress, anxiety, low mood, relationship difficulty, burnout, self-esteem, life transitions** → a counselling psychologist or a qualified counsellor.',
          '**Symptoms that are severe, persistent, or significantly disrupting daily functioning** → a psychiatrist, ideally alongside therapy.',
          '**Any thought of harming yourself, or an acute crisis** → urgent medical help. In India, Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112.',
          '**A formal psychological assessment or diagnostic clarity** → a clinical psychologist or psychiatrist.',
          '**Not sure** → start with a counselling psychologist. Part of the job is recognising when someone needs a different professional and saying so.',
        ],
      },
      { type: 'h2', text: 'Therapy and medication are not rivals' },
      {
        type: 'p',
        text: 'A persistent assumption is that choosing one means rejecting the other. In reality they work on different levels, and for many people the combination is more effective than either alone. Medication can bring symptoms down to a level where the work of therapy becomes possible; therapy addresses the patterns that medication does not touch. Being on psychiatric medication is not a barrier to starting counselling, and it is something I ask about at intake precisely so that care can be coordinated.',
      },
      { type: 'h2', text: 'What to ask before you book' },
      {
        type: 'ul',
        items: [
          'What is your highest qualification, and from where?',
          'What kinds of concerns do you usually work with?',
          'What therapeutic approaches do you use?',
          'How long are sessions, how often, and what do they cost?',
          'What happens if you think I need a different kind of support?',
        ],
      },
      {
        type: 'p',
        text: 'My own background and qualifications are set out in full on the [about page](/about), and a discovery call is a perfectly good place to ask all five of those questions before committing to anything.',
      },
    ],
    related: [
      'how-do-i-know-if-i-need-therapy',
      'how-online-therapy-works-in-india',
      'what-happens-in-your-first-therapy-session',
    ],
    cta: {
      heading: 'Still unsure who to speak to?',
      body: 'Bring the question to a free discovery call. If a different professional would serve you better, I will tell you.',
    },
  },
  {
    slug: 'therapy-for-overthinking-and-anxiety',
    title: 'How can therapy help with overthinking and anxiety?',
    metaTitle: 'How Therapy Helps With Overthinking and Anxiety',
    metaDescription:
      'Overthinking is not a personality trait you are stuck with. A counselling psychologist explains why the mind loops, and what therapy actually does about it.',
    excerpt:
      'Overthinking feels like problem-solving. That is what makes it so hard to stop. Here is what is really happening, and what changes it.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 8,
    standfirst:
      'People rarely book a session saying they have anxiety. They say they cannot switch their brain off. Those are usually the same thing seen from different angles.',
    body: [
      {
        type: 'p',
        text: 'It is two in the morning and you are conducting a conversation from four days ago, except this time you say the right thing. Or you are constructing the eleventh version of a scenario that has not happened. You know it is not helping. You cannot stop.',
      },
      {
        type: 'p',
        text: 'Overthinking is one of the most common reasons people reach out, and one of the most misunderstood, because from the inside it does not feel like a problem. It feels like being responsible.',
      },
      { type: 'h2', text: 'Why the loop is so convincing' },
      {
        type: 'p',
        text: 'Overthinking impersonates problem-solving. Actual problem-solving moves towards a decision and then stops. Rumination and worry circle: they generate the sensation of doing something about the problem while producing no output at all. Because the sensation is similar, your mind treats the loop as productive and keeps going.',
      },
      {
        type: 'p',
        text: 'It is also, quietly, reinforcing. Worry gives an illusion of control: if I think about every possible outcome, I will not be caught off guard. Rumination gives an illusion of resolution: if I replay this enough times, I will finally understand it. Neither delivers, but both feel briefly like relief, which is precisely how a habit gets maintained.',
      },
      { type: 'h2', text: 'Two directions, one mechanism' },
      {
        type: 'ul',
        items: [
          '**Worry points forward.** What if I fail, what if they leave, what if something is wrong with me. It is anticipation of threat.',
          '**Rumination points backward.** Why did I say that, what did they mean, how did I let it get to this. It is re-examination of something already finished.',
        ],
      },
      {
        type: 'p',
        text: 'Most people do both, and they feed each other. If you want the wider distinction between the stress that has a source and the anxiety that outlives it, [anxiety vs stress](/blog/anxiety-vs-stress-whats-the-difference) covers it.',
      },
      { type: 'h2', text: 'What it costs' },
      {
        type: 'p',
        text: 'Overthinking is not a harmless quirk. Sustained, it disrupts sleep, drains the attention available for actual work, delays decisions until circumstances decide for you, and keeps the nervous system in a state of low-grade activation that eventually shows up in the body. It also tends to erode relationships, because rehearsed conversations rarely get had, and unspoken interpretations quietly become facts.',
      },
      { type: 'h2', text: 'Why “just stop thinking about it” fails' },
      {
        type: 'p',
        text: 'Because suppression is not a skill the mind possesses. Instructing yourself not to think about something requires monitoring for it, which requires keeping it active. The advice is well-meant and mechanically impossible.',
      },
      {
        type: 'p',
        text: 'Distraction has a similar limit. It works for minutes and the loop resumes, often with added frustration about having failed to control it.',
      },
      { type: 'h2', text: 'What therapy actually does about it' },
      {
        type: 'p',
        text: 'The work is not to eliminate thoughts. It is to change your relationship with them, so they stop having the authority to run the day. In practice that tends to involve several strands.',
      },
      {
        type: 'h3',
        text: 'Seeing the pattern rather than the content',
      },
      {
        type: 'p',
        text: 'Early sessions usually establish when the loop starts, what reliably triggers it, what it promises you, and what it costs. This sounds basic and is genuinely powerful: most people have never observed their own overthinking from the outside. Noticing “I am in a loop” rather than being inside the loop is the first real move.',
      },
      {
        type: 'h3',
        text: 'Testing the thoughts instead of obeying them',
      },
      {
        type: 'p',
        text: 'Cognitive behavioural work examines the predictions the anxious mind makes. Not by arguing that everything is fine, which nobody believes, but by asking what the evidence is, what has happened the other times you predicted this, and what you would tell someone you cared about who said the same sentence. Over time this loosens the automatic equation of a thought with a fact.',
      },
      {
        type: 'h3',
        text: 'Reducing avoidance',
      },
      {
        type: 'p',
        text: 'Anxiety shrinks the territory you move in. You do not make the call, you do not raise the issue, you do not apply. Each avoidance brings immediate relief and strengthens the loop. Therapy works on graded, deliberate re-approach: small enough to be possible, real enough to teach your nervous system something new.',
      },
      {
        type: 'h3',
        text: 'Building tolerance for uncertainty',
      },
      {
        type: 'p',
        text: 'Under most chronic overthinking is a demand for certainty that the world cannot supply. A significant part of the work is developing the capacity to act without full information and to let a question stay open, which is far more useful than trying to answer it exhaustively.',
      },
      {
        type: 'h3',
        text: 'Working with the body',
      },
      {
        type: 'p',
        text: 'A mind cannot settle while the body is in alarm. Breathing and grounding practices, mindfulness, and attention to sleep are not the whole treatment, but they lower the baseline enough that the cognitive work becomes possible.',
      },
      {
        type: 'h3',
        text: 'Looking at what sits underneath',
      },
      {
        type: 'p',
        text: 'Sometimes the loop is doing a job. Guarding against a specific fear, protecting an old wound, holding on to a belief that vigilance is what keeps you safe. When that is the case, the technique-level work only goes so far, and the more useful conversation is about origins.',
      },
      { type: 'h2', text: 'What realistic progress looks like' },
      {
        type: 'p',
        text: 'Not silence. The aim is not a mind with no anxious thoughts, which no one has. What usually changes first is duration: the loop starts and ends in twenty minutes instead of running all evening. Then frequency. Then the degree to which it dictates behaviour.',
      },
      {
        type: 'p',
        text: 'Progress is uneven, and stressful periods bring some of it back. That is not relapse; it is what a nervous system does. The skills stay available.',
      },
      {
        type: 'note',
        text: 'This article describes general approaches and is not a diagnosis or a treatment plan. If overthinking is severely affecting your sleep, work or safety, please speak to a qualified professional.',
      },
      {
        type: 'p',
        text: 'Anxiety and overthinking are among the concerns I work with most often; the approach is described on [how I can help](/how-i-can-help), and the practical session structure on [what to expect](/what-to-expect).',
      },
    ],
    related: [
      'anxiety-vs-stress-whats-the-difference',
      'how-do-i-know-if-i-need-therapy',
      'signs-of-burnout-and-how-therapy-helps',
    ],
    cta: {
      heading: 'If your mind will not switch off',
      body: 'A free 15 to 20 minute discovery call is a low-stakes way to describe what has been happening and hear how the work would approach it.',
    },
  },
  {
    slug: 'signs-of-burnout-and-how-therapy-helps',
    title: 'Burnout: the signs, and how therapy helps',
    metaTitle: 'Signs of Burnout and How Therapy Can Help',
    metaDescription:
      'Burnout is more than tiredness. Learn the signs of emotional exhaustion, why rest alone does not fix it, and how counselling supports recovery.',
    excerpt:
      'Burnout is not a busy week. It is what happens after months of demand with no genuine recovery, and a holiday does not undo it.',
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    readingMinutes: 8,
    standfirst:
      'The clearest sign is not exhaustion. It is that the things which used to matter to you have gone strangely flat.',
    body: [
      {
        type: 'p',
        text: 'Burnout has become a casual word, which is unfortunate, because the thing it describes is specific and serious. It is not a hard week or a demanding quarter. It is what accumulates when sustained demand meets insufficient recovery over months, until something gives.',
      },
      { type: 'h2', text: 'What burnout actually looks like' },
      {
        type: 'p',
        text: 'It tends to show up along three lines at once.',
      },
      {
        type: 'ul',
        items: [
          '**Exhaustion that rest does not resolve.** You sleep and wake up tired. A weekend gets you to the start of the next week, barely. The tiredness is emotional as much as physical.',
          '**Detachment and cynicism.** Work you cared about becomes something to get through. You are more irritable with colleagues, clients, students or patients than you would like to be, and part of you has stopped caring that you are.',
          '**A collapse in sense of competence.** Everything takes longer, you doubt output you would once have signed off without a thought, and you feel like you are failing at a job you used to be good at.',
        ],
      },
      {
        type: 'p',
        text: 'Alongside these, common physical and behavioural signs: disturbed sleep, headaches, digestive trouble, frequent minor illness, appetite change, withdrawing from friends, and relying more heavily on alcohol, screens or scrolling to get to the end of the day.',
      },
      { type: 'h2', text: 'Burnout, stress and depression are not the same thing' },
      {
        type: 'p',
        text: '**Stress** is over-engagement: too much, too fast, and you feel it. **Burnout** is disengagement: the pressure has been there long enough that you have shut down in order to survive it. Stress makes you frantic; burnout makes you numb.',
      },
      {
        type: 'p',
        text: 'Burnout is also usually context-bound. It attaches to a particular role or set of demands, and lifts somewhat when you are genuinely away from it. Depression tends to travel with you and to affect everything. There is real overlap, and prolonged burnout can contribute to depression, which is one reason to take it seriously rather than wait it out. Only a qualified professional can assess which is which in your case.',
      },
      { type: 'h2', text: 'It is not caused by weakness, and rarely by laziness' },
      {
        type: 'p',
        text: 'Burnout disproportionately affects conscientious people. The ones who absorb extra work, hold high standards, find it difficult to say no, and derive a good deal of their identity from being reliable. The traits that produce burnout are usually the traits that got you praised.',
      },
      {
        type: 'p',
        text: 'It is also not purely individual. Chronic understaffing, unclear expectations, unmanageable workloads, no autonomy, unfair treatment, and a mismatch between your values and what you are required to do are all documented drivers. No amount of self-care corrects a structurally impossible job, and it is dishonest to pretend otherwise.',
      },
      { type: 'h2', text: 'Why a holiday does not fix it' },
      {
        type: 'p',
        text: 'Almost everyone tries this first. Two weeks off, and roughly three days back into the routine the exhaustion returns, often with added despair, because now you have used up the leave and proved to yourself that it does not work.',
      },
      {
        type: 'p',
        text: 'Rest addresses the depletion. It does not address the conditions that produced it, or the patterns in you that keep you consenting to them. Both have to change for recovery to hold.',
      },
      { type: 'h2', text: 'How counselling helps' },
      {
        type: 'p',
        text: 'Therapy for burnout is practical work. Broadly, it moves through several stages.',
      },
      {
        type: 'ol',
        items: [
          '**Naming it accurately.** A surprising amount of relief comes from establishing that this is a recognisable pattern with known causes, rather than evidence that you have become inadequate.',
          '**Stabilising the basics.** Sleep, eating, and some minimum of genuine recovery time. This is not a self-care lecture; it is the floor that everything else needs.',
          '**Mapping the drivers.** Which pressures are structural, which are self-imposed, and which are being maintained by a belief such as “if I stop, everything falls apart” or “my value is what I produce”.',
          '**Working on boundaries.** For most people this is the hardest and most consequential part: learning to say no, to renegotiate scope, to leave on time, and to tolerate the guilt that follows. Guilt is not a sign you have done something wrong.',
          '**Reconnecting with meaning.** Burnout severs the link between what you do and why you started doing it. Rebuilding that is often what makes the difference between recovering and simply enduring.',
          '**Deciding what changes externally.** Sometimes the honest conclusion is that the role has to change. Therapy is a good place to think that through without panic.',
        ],
      },
      { type: 'h2', text: 'Recovery takes longer than people expect' },
      {
        type: 'p',
        text: 'Burnout builds over months and it does not unwind in a fortnight. Early progress usually shows up as small returns: interest in something you had stopped caring about, an evening where you are not counting hours, a slightly faster recovery after a hard day.',
      },
      {
        type: 'p',
        text: 'It is also worth expecting fatigue to arrive first as things improve. When a system that has been running on adrenaline finally gets permission to stop, the tiredness underneath becomes noticeable. That is part of recovery, not a setback.',
      },
      {
        type: 'note',
        text: 'If you are experiencing thoughts of harming yourself, please seek immediate help: Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112. This site is not a crisis service.',
      },
      {
        type: 'p',
        text: 'Burnout and emotional fatigue are among the areas I work with; you can read more on [how I can help](/how-i-can-help). If you recognise yourself here, a [free discovery call](/booking) is a reasonable first step.',
      },
    ],
    related: [
      'anxiety-vs-stress-whats-the-difference',
      'therapy-for-overthinking-and-anxiety',
      'how-do-i-know-if-i-need-therapy',
    ],
    cta: {
      heading: 'If you have been running on empty',
      body: 'A free discovery call is 15 to 20 minutes, costs nothing, and carries no obligation to book anything afterwards.',
    },
  },
];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export const getArticle = (slug: string) => bySlug.get(slug);

/** Newest first, which is how the blog index and sitemap present them. */
export const sortedArticles = [...articles].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished)
);

export const getRelated = (article: Article) =>
  article.related
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Article => Boolean(item));

/**
 * Bhavana's earlier writing, published on PsychFuel before Sthairyam existed.
 * Listed as an archive rather than re-hosted, so nothing is duplicated.
 */
export const externalArchive = [
  {
    title: 'Are TikTok and Instagram Reels sabotaging your brain?',
    url: 'https://psychfuel.home.blog/2023/04/29/are-tiktok-and-reels-sabotaging-your-brain-the-startling-effects-of-short-form-video-on-memory-attention-span-and-creativity/',
    date: '2023-04-29',
  },
  {
    title: 'The psychology of happiness',
    url: 'https://psychfuel.home.blog/2023/04/17/the-psychology-of-happiness-examining-what-makes-us-truly-happy-and-how-to-cultivate-happiness-in-our-lives/',
    date: '2023-04-17',
  },
  {
    title: 'Breaking free: letting go of toxic relationships',
    url: 'https://psychfuel.home.blog/2023/04/17/breaking-free-the-psychology-of-letting-go-and-moving-on-from-toxic-relationships/',
    date: '2023-04-17',
  },
  {
    title: '5 proven ways to reduce your anxiety and calm your mind',
    url: 'https://psychfuel.home.blog/2023/04/14/5-proven-ways-to-reduce-your-anxiety-and-calm-your-mind/',
    date: '2023-04-14',
  },
  {
    title: 'Why more millennials are struggling with anxiety than ever before',
    url: 'https://psychfuel.home.blog/2023/04/14/why-more-millennials-are-struggling-with-anxiety-than-ever-before/',
    date: '2023-04-14',
  },
  {
    title: 'Being mindful of mindless scrolling',
    url: 'https://psychfuel.home.blog/2022/11/03/being-mindful-of-mindless-scrolling/',
    date: '2022-11-03',
  },
  {
    title: 'Ruminating: how to free your mind from overthinking',
    url: 'https://psychfuel.home.blog/2022/08/24/ruminating-how-to-free-your-mind-from-overthinking/',
    date: '2022-08-24',
  },
  {
    title: 'What is mindfulness?',
    url: 'https://psychfuel.home.blog/2022/08/17/what-is-mindfulness/',
    date: '2022-08-17',
  },
];
