import type { Guide } from './types';
import { GUIDE_PUBLISHED as PUB } from './types';

export const choosingGuides: Guide[] = [
  {
    cluster: 'choosing',
    slug: 'what-qualifications-should-a-psychologist-have-in-india',
    title: 'What qualifications should a psychologist have in India?',
    metaTitle: 'Psychologist Qualifications in India: What to Check',
    metaDescription:
      'What each psychology qualification in India actually means, which titles are legally protected, and the specific things to verify before booking.',
    excerpt:
      'India does not protect the words "therapist" or "counsellor". Anyone may use them. Here is what the credentials mean and what you can actually verify.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 8,
    standfirst:
      'This is the least glamorous guide on this site and probably the most useful, because the Indian titling system is genuinely confusing and the confusion is not accidental.',
    body: [
      {
        type: 'p',
        text: 'Start with the uncomfortable fact. In India, "counsellor", "therapist" and "psychotherapist" are not legally protected titles. A person with a weekend certificate may use them without breaking any law. This is why checking qualifications is not rude — it is the only protection you have.',
      },
      { type: 'h2', text: 'The qualifications, in plain terms' },
      { type: 'h3', text: 'MA or MSc in Psychology' },
      {
        type: 'p',
        text: 'A two-year postgraduate degree from a recognised university. Covers psychological theory, research methods, developmental and abnormal psychology. It is the standard academic foundation, and on its own it is a degree rather than a clinical licence.',
      },
      { type: 'h3', text: 'MA or MSc in Counselling Psychology' },
      {
        type: 'p',
        text: 'A postgraduate degree oriented specifically toward counselling practice, usually including supervised client work. This is the common qualification for practitioners doing talking therapy with people who are not severely mentally ill.',
      },
      { type: 'h3', text: 'MPhil in Clinical Psychology' },
      {
        type: 'p',
        text: 'A two-year clinical training programme at an institute recognised by the Rehabilitation Council of India, involving substantial supervised work in hospital settings. Graduates can register with the RCI and use the title clinical psychologist. This is the most clinically intensive psychology training route in India.',
      },
      { type: 'h3', text: 'PsyD or PhD' },
      {
        type: 'p',
        text: 'Doctoral qualifications. A PhD is usually research-focused and does not by itself indicate clinical training. Worth asking what the doctorate was actually in.',
      },
      { type: 'h3', text: 'MD in Psychiatry' },
      {
        type: 'p',
        text: 'A medical doctor specialising in psychiatry. Psychiatrists can diagnose and prescribe medication; psychologists in India cannot. Different profession, frequently confused — see [counselling psychologist vs clinical psychologist](/guides/counselling-psychologist-vs-clinical-psychologist).',
      },
      { type: 'h2', text: 'What a certificate course is, and is not' },
      {
        type: 'p',
        text: 'Short certificate courses in counselling skills, CBT, REBT or similar are genuinely valuable as additional training on top of a degree. They are not a substitute for one.',
      },
      {
        type: 'p',
        text: 'If a practitioner’s entire listed training is a set of short certificates with no postgraduate psychology degree behind them, that is worth knowing before you book.',
      },
      { type: 'h2', text: 'What you can actually verify' },
      {
        type: 'ol',
        items: [
          '**The degree and the university.** Both should be stated plainly. A recognised Indian university is checkable.',
          '**RCI registration**, if they describe themselves as a clinical psychologist. The Rehabilitation Council maintains a register.',
          '**Supervision.** Ask whether they are in regular clinical supervision. Practitioners who take the work seriously are, throughout their careers.',
          '**Professional body membership**, such as a psychological association. Voluntary in India, but a signal of engagement with the field.',
        ],
      },
      { type: 'h2', text: 'What qualifications do not tell you' },
      {
        type: 'p',
        text: 'Here is the other half of the truth. Credentials establish a floor, not a ceiling. The strongest predictor of whether therapy helps is the working relationship between the two people in it — and the most qualified practitioner in your city may still be wrong for you.',
      },
      {
        type: 'p',
        text: 'So use qualifications to rule people out, then use a first conversation to decide. [Questions to ask a therapist before you start](/guides/questions-to-ask-a-therapist-before-you-start) covers the second half.',
      },
      { type: 'h2', text: 'My own, for the record' },
      {
        type: 'p',
        text: 'I hold an MA in Psychology from Banaras Hindu University and practise as a counselling psychologist, working with adults on anxiety, stress, burnout, relationships, low mood and self-esteem. I am not a psychiatrist and I do not prescribe. Where medication or psychiatric assessment is indicated, I say so and refer. There is more on [my background](/about).',
      },
    ],
    related: [
      'counselling-psychologist-vs-clinical-psychologist',
      'what-rci-registration-means',
      'questions-to-ask-a-therapist-before-you-start',
    ],
    cta: {
      heading: 'Ask me about my training before anything else.',
      body: 'A discovery call is the right place for it, and any practitioner who is uncomfortable being asked has answered a different question for you.',
    },
  },

  {
    cluster: 'choosing',
    slug: 'counselling-psychologist-vs-clinical-psychologist',
    title: 'Counselling psychologist, clinical psychologist, psychiatrist: what is the difference?',
    metaTitle: 'Counselling vs Clinical Psychologist vs Psychiatrist in India',
    metaDescription:
      'The practical differences between a counselling psychologist, a clinical psychologist and a psychiatrist in India, and which one your situation calls for.',
    excerpt:
      'Three different trainings, three different jobs, and a lot of overlap in the middle. The choice matters less than people fear, except in the cases where it matters a great deal.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'People often spend weeks stuck on this question. For most difficulties the honest answer is that either psychologist would serve you — but there are situations where only one will do.',
    body: [
      {
        type: 'p',
        text: 'The three titles get used interchangeably in conversation and mean genuinely different things in practice. Here is the shape of each.',
      },
      { type: 'h2', text: 'Psychiatrist' },
      {
        type: 'p',
        text: 'A medical doctor who has specialised in psychiatry. Trained in medicine first, then in mental illness. Can diagnose formally, prescribe medication, and manage conditions requiring pharmacological treatment.',
      },
      {
        type: 'p',
        text: 'Most psychiatrists in India work in relatively short appointments focused on assessment and medication management rather than weekly talking therapy, though some do both.',
      },
      {
        type: 'p',
        text: '**See one if:** you may need medication, symptoms are severe or persistent, you are experiencing psychosis or mania, or a physical cause needs excluding.',
      },
      { type: 'h2', text: 'Clinical psychologist' },
      {
        type: 'p',
        text: 'A psychologist with intensive clinical training — in India, typically an MPhil in Clinical Psychology from an RCI-recognised institute, involving supervised work in hospital settings with people who are seriously unwell.',
      },
      {
        type: 'p',
        text: 'They provide psychological therapy and formal psychological assessment. They do not prescribe medication in India.',
      },
      {
        type: 'p',
        text: '**See one if:** you have or may have a diagnosable condition needing specialist psychological treatment, you need formal assessment, or your difficulty is complex and long-standing.',
      },
      { type: 'h2', text: 'Counselling psychologist' },
      {
        type: 'p',
        text: 'A psychologist trained specifically in counselling and psychotherapy, usually through a postgraduate degree with supervised practice. The emphasis is on working with people navigating difficulty, distress and change rather than on severe mental illness.',
      },
      {
        type: 'p',
        text: '**See one if:** you are dealing with anxiety, stress, burnout, relationship patterns, low mood, self-esteem, grief, a life transition, or the broad experience of being stuck. That covers the substantial majority of people who seek therapy.',
      },
      { type: 'h2', text: 'The overlap is large' },
      {
        type: 'p',
        text: 'Both types of psychologist deliver talking therapy, often using the same approaches. A person with moderate anxiety could see either and do well. The distinction sharpens at the severe end of the spectrum, not in the middle where most people actually are.',
      },
      { type: 'h2', text: 'A rough decision rule' },
      {
        type: 'ol',
        items: [
          '**Immediate risk to life** — emergency services, or a psychiatrist urgently.',
          '**Symptoms that stop you functioning**, or that have persisted for months — start with a psychiatrist for assessment, then add therapy.',
          '**A known diagnosis needing specialist psychological treatment** — clinical psychologist.',
          '**Distress, patterns, stress, relationships, self-understanding** — counselling psychologist.',
          '**Genuinely unsure** — start with a free consultation with any qualified practitioner. Part of their job is telling you if you need someone else.',
        ],
      },
      { type: 'h2', text: 'They are not mutually exclusive' },
      {
        type: 'p',
        text: 'A very common arrangement is a psychiatrist managing medication while a psychologist does the weekly therapeutic work. For moderate to severe depression or anxiety, the combination frequently outperforms either alone.',
      },
      {
        type: 'note',
        text: 'This is not a crisis service. If you or someone you know is in immediate danger, contact Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112.',
      },
    ],
    related: [
      'what-qualifications-should-a-psychologist-have-in-india',
      'what-rci-registration-means',
      'can-i-see-a-psychologist-without-a-referral-in-india',
    ],
    cta: {
      heading: 'Not sure which you need?',
      body: 'Describe the situation on a free discovery call. If you need a psychiatrist or a clinical specialist rather than me, I will tell you.',
    },
  },

  {
    cluster: 'choosing',
    slug: 'what-rci-registration-means',
    title: 'What does RCI registration actually mean?',
    metaTitle: 'RCI Registration Explained: What It Covers in Indian Psychology',
    metaDescription:
      'What the Rehabilitation Council of India registers, which practitioners it applies to, and why many perfectly qualified counselling psychologists are not on the register.',
    excerpt:
      'RCI registration is a real credential with a specific scope. It is also widely misunderstood as a universal licence for anyone doing therapy, which it is not.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'People increasingly arrive having read that they should only see an RCI-registered practitioner. That advice is partly right, and the part that is wrong causes unnecessary confusion.',
    body: [
      {
        type: 'p',
        text: 'The Rehabilitation Council of India is a statutory body established under the RCI Act, 1992. Among its functions is maintaining a register of professionals in certain rehabilitation and disability-related disciplines — including clinical psychologists.',
      },
      { type: 'h2', text: 'What it covers' },
      {
        type: 'p',
        text: 'In the mental health context, RCI registration principally concerns **clinical psychologists**, typically qualified through an MPhil in Clinical Psychology at an RCI-recognised institution. The register is checkable, which makes it a genuinely verifiable credential — a rarity in this field.',
      },
      { type: 'h2', text: 'What it does not cover' },
      {
        type: 'p',
        text: 'Here is where the confusion starts. There is **no equivalent statutory register in India for counsellors, psychotherapists, or counselling psychologists**. No licensing body issues a practising licence for talking therapy generally.',
      },
      {
        type: 'p',
        text: 'So a practitioner with a postgraduate degree in counselling psychology and years of supervised practice will not appear on the RCI register, because that register is not for them. Their absence from it says nothing about their competence.',
      },
      { type: 'h2', text: 'Why the advice circulates anyway' },
      {
        type: 'p',
        text: 'Because the underlying instinct is sound. India has a real problem with unqualified people offering therapy, and the public reasonably wants a checkable marker of legitimacy. RCI registration is the only one that exists, so it gets recommended as a universal filter.',
      },
      {
        type: 'p',
        text: 'The result is an odd situation: a filter that correctly excludes the unqualified also excludes a large number of well-trained counselling practitioners.',
      },
      { type: 'h2', text: 'What to do with this' },
      {
        type: 'ul',
        items: [
          '**If someone calls themselves a clinical psychologist**, RCI registration is the right thing to ask about, and it is verifiable.',
          '**If someone is a counselling psychologist or counsellor**, ask about their postgraduate qualification, supervised practice hours, and current clinical supervision instead.',
          '**Treat any claim of a "licence to practise therapy" in India with caution.** No such general licence exists.',
          '**Be alert to vague credentials** — "certified therapist" with no named institution behind it tells you nothing.',
        ],
      },
      { type: 'h2', text: 'The legal backdrop' },
      {
        type: 'p',
        text: 'The Mental Healthcare Act, 2017 defines categories of mental health professional and sets out patient rights, including around consent, confidentiality and access to records. It did not create a general licensing regime for psychotherapists, which is why the gap described above persists.',
      },
      {
        type: 'p',
        text: 'Reform is discussed periodically. Until it arrives, the practical burden of checking sits with you — which is unsatisfying, and is why [what qualifications to check](/guides/what-qualifications-should-a-psychologist-have-in-india) exists.',
      },
      {
        type: 'note',
        text: 'This guide describes how the system is generally understood and is not legal advice. Regulatory positions can change.',
      },
    ],
    related: [
      'what-qualifications-should-a-psychologist-have-in-india',
      'counselling-psychologist-vs-clinical-psychologist',
      'red-flags-in-therapy',
    ],
    cta: {
      heading: 'Ask me anything about my training.',
      body: 'I hold an MA in Psychology from Banaras Hindu University and practise as a counselling psychologist. Happy to answer questions about scope before you book.',
    },
  },

  {
    cluster: 'choosing',
    slug: 'questions-to-ask-a-therapist-before-you-start',
    title: 'Questions to ask a therapist before you start',
    metaTitle: '12 Questions to Ask a Therapist Before Your First Session',
    metaDescription:
      'The questions worth asking a psychologist before committing — about training, approach, fees, confidentiality and fit — and what good answers sound like.',
    excerpt:
      'You are hiring someone for a difficult job. Asking about their training is not impolite, and how they respond tells you as much as the answer does.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'Most people ask nothing, book, and hope. A free consultation is an interview, and it is worth using it as one.',
    body: [
      {
        type: 'p',
        text: 'You would ask a surgeon what they had done before. Therapy attracts a peculiar deference that discourages the same questions, partly because people arrive feeling vulnerable and partly because the field does a poor job of inviting scrutiny.',
      },
      {
        type: 'p',
        text: 'Ask anyway. Below are the questions I would want asked, roughly in order of usefulness.',
      },
      { type: 'h2', text: 'About their training' },
      {
        type: 'ol',
        items: [
          '**What is your qualification, and from which university?** Look for a specific degree and a named institution, offered without hesitation.',
          '**Are you in regular clinical supervision?** Good practitioners are, at every career stage. A no is a meaningful answer.',
          '**Have you worked with this kind of difficulty before?** Not a demand for a specialist, just a check that you are not the first.',
        ],
      },
      { type: 'h2', text: 'About how they work' },
      {
        type: 'ol',
        items: [
          '**What does a session actually look like?** You are listening for something concrete rather than a description of warmth.',
          '**What approach do you use, and why for my situation?** A good answer connects the method to your problem instead of reciting acronyms.',
          '**How much of this happens between sessions?** Some approaches are homework-heavy. Worth knowing whether that suits you.',
          '**How will we know whether this is helping?** A practitioner who has thought about how progress gets measured is a good sign.',
        ],
      },
      { type: 'h2', text: 'About the practicalities' },
      {
        type: 'ol',
        items: [
          '**What is the fee, and is the session 45 or 60 minutes?**',
          '**What is the cancellation policy?**',
          '**How often would you suggest meeting, and for roughly how long?**',
          '**What are the limits of confidentiality?** Every honest practitioner has some. One who claims none has not thought it through.',
          '**What happens if I need to stop, or want to change therapist?** Listen for ease rather than defensiveness.',
        ],
      },
      { type: 'h2', text: 'The question people never ask' },
      {
        type: 'p',
        text: '**"Is there any reason you might not be the right person for this?"**',
      },
      {
        type: 'p',
        text: 'The best answers I have heard to this are specific and slightly against the practitioner’s own interest: that they would want a psychiatrist involved, that trauma of a particular kind is not their area, that someone who works in a different modality might get there faster. That kind of candour is the strongest signal you will get on a first call.',
      },
      { type: 'h2', text: 'What to notice beyond the answers' },
      {
        type: 'ul',
        items: [
          '**Do they listen, or wait to speak?**',
          '**Did they ask what you want, or assume?**',
          '**Do you feel evaluated or received?**',
          '**Did they oversell?** Anyone promising to fix this in four sessions is guessing.',
          '**Can you imagine telling this person something embarrassing?** That one matters more than all the rest.',
        ],
      },
      {
        type: 'p',
        text: 'If the answers were fine but the feeling was off, take the feeling seriously. [Is my therapist right for me](/guides/is-my-therapist-right-for-me) goes further into judging fit once you have started.',
      },
    ],
    related: [
      'is-my-therapist-right-for-me',
      'what-to-expect-in-a-discovery-call',
      'what-qualifications-should-a-psychologist-have-in-india',
    ],
    cta: {
      heading: 'Bring the whole list.',
      body: 'The discovery call is free and exists for exactly this. I would rather answer twelve questions than have you book on hope.',
    },
  },

  {
    cluster: 'choosing',
    slug: 'is-my-therapist-right-for-me',
    title: 'How do I know if my therapist is right for me?',
    metaTitle: 'Is My Therapist Right for Me? How to Judge Fit',
    metaDescription:
      'How to tell whether a therapist is a good fit, why liking them is not the same as fit, and how long to give it before deciding.',
    excerpt:
      'Fit is the strongest predictor of whether therapy works. It is also frequently confused with comfort, and those are not the same thing.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'A useful therapist is not always a comfortable one. Learning to tell productive discomfort from a bad match is most of what this question needs.',
    body: [
      {
        type: 'p',
        text: 'Decades of research point at the same finding: the quality of the working relationship predicts outcome more reliably than the specific method used. Fit is not a soft consideration. It is the main one.',
      },
      {
        type: 'p',
        text: 'The difficulty is that fit gets confused with rapport. A therapist you enjoy talking to may be an excellent fit, or may simply be pleasant company for fifty minutes a week.',
      },
      { type: 'h2', text: 'Signs of a good fit' },
      {
        type: 'ul',
        items: [
          '**You can say the embarrassing thing.** Not immediately, but increasingly.',
          '**You feel understood rather than assessed**, including when you contradict yourself.',
          '**They remember.** Not every detail, but the thread.',
          '**They occasionally say something you did not want to hear**, and you can tell it came from attention rather than judgement.',
          '**You leave with something** — a thought, a question, something to notice.',
          '**You can disagree with them** and the room survives it.',
        ],
      },
      { type: 'h2', text: 'Signs of a poor fit' },
      {
        type: 'ul',
        items: [
          '**You perform.** Editing to be a good client, or managing their impression of you.',
          '**You feel judged**, or subtly instructed in how to live.',
          '**Advice arrives early and often**, before your situation has been understood.',
          '**They talk about themselves** more than incidentally.',
          '**Your concerns get smoothed over** rather than taken up.',
          '**Nothing moves**, month after month, and raising it changes nothing.',
        ],
      },
      { type: 'h2', text: 'Liking is not fit' },
      {
        type: 'p',
        text: 'Two failure modes, in opposite directions.',
      },
      {
        type: 'p',
        text: 'The first is a therapist you like enormously who never challenges you. Sessions are warm, you leave lighter, and after eight months nothing has changed. Comfort is not the product.',
      },
      {
        type: 'p',
        text: 'The second is a therapist who makes you uncomfortable — and whose discomfort is doing something. You catch yourself avoiding a subject because you know they will not let it slide. That is often the beginning of the useful part.',
      },
      {
        type: 'p',
        text: 'The distinction: does the discomfort come with movement? Productive discomfort leaves you thinking. A poor fit leaves you defended.',
      },
      { type: 'h2', text: 'How long to give it' },
      {
        type: 'p',
        text: 'Three to four sessions before judging anything, unless something has actively crossed a line. The first session is unrepresentative — you are nervous, they are gathering information, and almost nobody is themselves.',
      },
      {
        type: 'p',
        text: 'By around session four you should have a sense of whether you can be honest with this person. That is the question, and it matters more than whether their approach has a familiar name.',
      },
      { type: 'h2', text: 'Identity, language and context' },
      {
        type: 'p',
        text: 'Some people work better with a practitioner of a particular gender, or one who shares their cultural or linguistic background. That is not a preference to apologise for; it is a legitimate component of fit. It can be the difference between explaining your family and simply discussing it.',
      },
      { type: 'h2', text: 'If it is not right' },
      {
        type: 'p',
        text: 'Raise it first — the conversation itself sometimes fixes it. If nothing changes, change practitioner. [How to switch therapists](/guides/how-to-switch-therapists) covers doing that cleanly, and [red flags in therapy](/guides/red-flags-in-therapy) covers the situations where you should not wait.',
      },
    ],
    related: [
      'red-flags-in-therapy',
      'how-to-switch-therapists',
      'questions-to-ask-a-therapist-before-you-start',
    ],
    cta: {
      heading: 'Fit is worth testing before you commit.',
      body: 'That is the whole purpose of a free discovery call — twenty minutes to find out whether you can talk to me.',
    },
  },

  {
    cluster: 'choosing',
    slug: 'red-flags-in-therapy',
    title: 'Red flags in therapy: when to walk away',
    metaTitle: 'Red Flags in Therapy: Warning Signs You Should Not Ignore',
    metaDescription:
      'Behaviour that crosses professional boundaries in therapy, the difference between discomfort and harm, and what to do if a practitioner has acted unethically.',
    excerpt:
      'Most therapy is safe and most practitioners are careful. The exceptions do real damage, and people frequently talk themselves out of noticing.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Clients often assume any discomfort is their own resistance. Sometimes it is. Sometimes something genuinely wrong is happening, and the deference makes it harder to name.',
    body: [
      {
        type: 'p',
        text: 'Therapy involves an unusual power asymmetry: one person discloses everything, the other very little. That asymmetry is necessary, and it is exactly why professional boundaries matter so much.',
      },
      { type: 'h2', text: 'Leave immediately' },
      {
        type: 'p',
        text: 'These are not matters of style or fit. They are breaches.',
      },
      {
        type: 'ul',
        items: [
          '**Any romantic or sexual approach.** Never acceptable, at any point, including after therapy ends. This is the most serious breach there is.',
          '**Breaching your confidentiality** outside the limits explained to you at the start.',
          '**Discrimination or contempt** regarding your gender, caste, religion, sexuality, disability or background.',
          '**Pressure into a personal or financial arrangement** — lending money, business involvement, recruitment into anything.',
          '**Practising under the influence.**',
          '**Refusing to let you stop**, or making leaving feel dangerous or disloyal.',
        ],
      },
      {
        type: 'p',
        text: 'If any of these occur, end the work. You do not owe an explanation or a final session.',
      },
      { type: 'h2', text: 'Serious concerns worth raising, then acting on' },
      {
        type: 'ul',
        items: [
          '**Consistently late, distracted, or clearly unprepared.**',
          '**Talking about themselves at length.** Occasional, relevant self-disclosure can be useful; a therapist processing their own life in your hour is not.',
          '**Telling you what to do with your life**, repeatedly, rather than helping you work it out.',
          '**Dismissing your concerns about the therapy** by reframing them as your pathology. Raising a doubt should be met with curiosity.',
          '**Vagueness about qualifications** when asked directly.',
          '**Diagnosing confidently outside their competence**, or discouraging you from seeing a doctor or psychiatrist.',
          '**Guarantees.** Nobody can promise to cure you in a set number of sessions.',
        ],
      },
      { type: 'h2', text: 'Things that look like red flags and are not' },
      {
        type: 'p',
        text: 'Worth naming, because people leave good therapy for these reasons.',
      },
      {
        type: 'ul',
        items: [
          '**Feeling worse early on.** Common, and often a sign the work has started.',
          '**Being challenged.** A therapist who only agrees with you is not doing much.',
          '**Silence.** Deliberate, and frequently where the thinking happens.',
          '**Not receiving advice.** Most therapy is not advice-giving, and being told what to do rarely produces lasting change.',
          '**A charged cancellation.** Standard practice; the slot was held for you.',
        ],
      },
      { type: 'h2', text: 'Trust the physical signal' },
      {
        type: 'p',
        text: 'People frequently describe knowing something was wrong long before they acted. Dread before sessions, relief when one was cancelled, an instinct to minimise it when a friend asked.',
      },
      {
        type: 'p',
        text: 'If you notice yourself constructing elaborate explanations for a practitioner’s behaviour, that is worth attending to. You are allowed to leave on discomfort alone. You do not need proof.',
      },
      { type: 'h2', text: 'If something serious has happened' },
      {
        type: 'p',
        text: 'Where a practitioner is registered with a professional body or the RCI, complaints can be raised with that body. Serious misconduct, particularly of a sexual nature, may also be a criminal matter and can be reported to the police.',
      },
      {
        type: 'p',
        text: 'India’s patchy regulation — see [what RCI registration means](/guides/what-rci-registration-means) — makes redress harder than it should be when a practitioner belongs to no body at all. That is a real gap, and it is another argument for checking credentials at the start.',
      },
      {
        type: 'note',
        text: 'If you have been harmed and need support, Tele-MANAS on 14416 and KIRAN on 1800-599-0019 are free and confidential. In immediate danger, call 112.',
      },
    ],
    related: [
      'is-my-therapist-right-for-me',
      'how-to-switch-therapists',
      'what-rci-registration-means',
    ],
    cta: {
      heading: 'A bad experience of therapy is worth bringing to the next one.',
      body: 'If something went wrong previously, tell me. It shapes how we would begin, and it is not something you have to explain away.',
    },
  },

  {
    cluster: 'choosing',
    slug: 'therapist-vs-life-coach',
    title: 'Therapist or life coach: which do you need?',
    metaTitle: 'Therapist vs Life Coach: What Is the Actual Difference?',
    metaDescription:
      'How coaching differs from therapy in training, scope and regulation, when coaching is the right choice, and the situations where it is not.',
    excerpt:
      'Coaching and therapy can look similar from outside — two people talking, weekly, about your life. The training behind them and the problems they are built for are not the same.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'This question comes up more as coaching grows, and the honest answer is not that one is better. They are built for different problems.',
    body: [
      {
        type: 'p',
        text: 'A good coach can be genuinely valuable. This is not a guide arguing that coaching is fraudulent. It is a guide about scope, because the consequences of choosing wrongly fall almost entirely in one direction.',
      },
      { type: 'h2', text: 'The differences that matter' },
      { type: 'h3', text: 'Training and regulation' },
      {
        type: 'p',
        text: 'Psychologists complete postgraduate university training in psychology, including supervised clinical practice and study of mental illness, development and assessment. Coaching has no equivalent requirement. Coach certifications exist and some are rigorous, but there is no degree requirement and no statutory register anywhere.',
      },
      { type: 'h3', text: 'What each is built for' },
      {
        type: 'p',
        text: 'Coaching is future-oriented and goal-directed: performance, direction, habits, leadership, execution. It generally assumes a psychologically well person who wants to get somewhere specific.',
      },
      {
        type: 'p',
        text: 'Therapy works with distress, patterns and history — why something keeps happening, not only how to do it differently. It is equipped for the possibility that the obstacle is not a missing strategy.',
      },
      { type: 'h3', text: 'Clinical safety' },
      {
        type: 'p',
        text: 'This is the important one. A psychologist is trained to recognise depression, an anxiety disorder, trauma responses, disordered eating and risk of self-harm, and to respond appropriately. A coach typically is not, and a good coach will say so and refer.',
      },
      { type: 'h2', text: 'When coaching is the better choice' },
      {
        type: 'ul',
        items: [
          'You are broadly well and want to be more effective at something specific.',
          'Career direction, business decisions, leadership, public speaking.',
          'Accountability for goals you already know you want.',
          'Skills and structure rather than understanding.',
        ],
      },
      { type: 'h2', text: 'When therapy is the right choice' },
      {
        type: 'ul',
        items: [
          'Persistent low mood, anxiety, panic, or anything that has lasted weeks.',
          'A pattern repeating across jobs or relationships despite knowing better.',
          'Grief, trauma, or an experience you have not processed.',
          'Sleep, appetite or concentration that has shifted.',
          'Any thought of harming yourself.',
          'You have tried strategies and the strategies are not the problem.',
        ],
      },
      { type: 'h2', text: 'The failure mode worth avoiding' },
      {
        type: 'p',
        text: 'Untreated depression addressed as a productivity problem. Someone cannot get out of bed, hires a coach, receives a morning routine, fails to sustain it, and concludes they are lazy — adding shame to an illness.',
      },
      {
        type: 'p',
        text: 'The reverse error is milder. Someone who needed career clarity spends six months in therapy exploring their relationship with ambition. Slower, more expensive, rarely harmful.',
      },
      { type: 'h2', text: 'If you cannot tell' },
      {
        type: 'p',
        text: 'One question: **is the problem that you do not know what to do, or that you know and cannot do it?**',
      },
      {
        type: 'p',
        text: 'Not knowing what to do points to coaching. Knowing and being unable to — repeatedly, despite genuinely wanting to — points to therapy, because that gap is usually where something else is operating.',
      },
      {
        type: 'p',
        text: 'A free consultation with a psychologist will usually settle it. If coaching is what you need, a competent practitioner will tell you.',
      },
    ],
    related: [
      'counselling-psychologist-vs-clinical-psychologist',
      'what-qualifications-should-a-psychologist-have-in-india',
      'therapy-for-career-change-and-uncertainty',
    ],
    cta: {
      heading: 'Unsure which side of the line you are on?',
      body: 'Describe it on a free discovery call. If coaching would serve you better than therapy, I will say so.',
    },
  },

  {
    cluster: 'choosing',
    slug: 'can-i-see-a-psychologist-without-a-referral-in-india',
    title: 'Do I need a referral to see a psychologist in India?',
    metaTitle: 'Do You Need a Referral to See a Psychologist in India?',
    metaDescription:
      'Whether a doctor’s referral is required to see a psychologist in India, when involving a GP or psychiatrist still helps, and how to book directly.',
    excerpt:
      'No. You can book directly, today, with no doctor involved. There are still situations where looping in a physician is worth doing.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 5,
    standfirst:
      'People from countries with gatekept healthcare often assume they need permission. In India, private psychological care is directly accessible.',
    body: [
      {
        type: 'p',
        text: 'You do not need a referral to see a psychologist privately in India. No GP letter, no psychiatrist’s note, no diagnosis. You contact a practitioner and book. That is the whole process.',
      },
      {
        type: 'p',
        text: 'This surprises people who have lived in systems where a family doctor controls access to specialists. India’s private mental health care is directly accessible, which is one of the few places where our fragmented system is genuinely more convenient.',
      },
      { type: 'h2', text: 'Where a referral may still be involved' },
      {
        type: 'ul',
        items: [
          '**Insurance.** If you are attempting to claim, an insurer may require a referral or a formal diagnosis. See [does health insurance cover therapy](/guides/does-health-insurance-cover-therapy-in-india).',
          '**Government hospital services.** Public institutions often route patients through their own intake, which may involve a referral within the hospital.',
          '**Employer programmes.** Some EAPs have their own intake process.',
          '**Formal assessment.** If a report is needed for an institution — an educational accommodation, a legal matter — the receiving body may specify who can produce it.',
        ],
      },
      { type: 'h2', text: 'When seeing a doctor first is genuinely worth it' },
      {
        type: 'p',
        text: 'Not a gate, but sometimes good sequencing.',
      },
      {
        type: 'ol',
        items: [
          '**Physical symptoms are prominent** — fatigue, weight change, palpitations, persistent sleep disruption. Thyroid dysfunction, anaemia and vitamin deficiencies all produce symptoms that resemble depression or anxiety, and are worth excluding.',
          '**You may need medication.** Psychologists in India do not prescribe. For moderate to severe depression or anxiety, medication plus therapy often outperforms either alone.',
          '**Symptoms are severe.** Inability to function, thoughts of self-harm, psychosis or mania need psychiatric assessment promptly.',
          '**You are already on psychiatric medication.** Therapy works alongside it, and your prescriber should know.',
        ],
      },
      { type: 'h2', text: 'Nobody has to be told' },
      {
        type: 'p',
        text: 'A frequent worry, particularly for people who do not want family to know: seeing a psychologist privately does not appear on any shared record, is not reported to a family doctor, and is not disclosed to anyone. There is more in [is online therapy confidential](/guides/is-online-therapy-confidential).',
      },
      { type: 'h2', text: 'How to start' },
      {
        type: 'p',
        text: 'Find a practitioner whose qualifications you have checked, take a free consultation if one is offered, and book. [How to book a therapy session online in India](/guides/how-to-book-a-therapy-session-online-in-india) covers the mechanics.',
      },
      {
        type: 'note',
        text: 'This is not a crisis service. If you or someone you know is in immediate danger, contact Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112.',
      },
    ],
    related: [
      'how-to-book-a-therapy-session-online-in-india',
      'counselling-psychologist-vs-clinical-psychologist',
      'does-health-insurance-cover-therapy-in-india',
    ],
    cta: {
      heading: 'No referral, no diagnosis, no paperwork.',
      body: 'Pick a slot for a free discovery call and we will talk. If a doctor or psychiatrist should be involved, I will tell you.',
    },
  },
];
