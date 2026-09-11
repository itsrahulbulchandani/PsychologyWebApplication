import type { Guide } from './types';
import { GUIDE_PUBLISHED as PUB } from './types';

const CRISIS =
  'This is not a crisis service. If you or someone you know is in immediate danger, contact Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112.';

export const concernGuides: Guide[] = [
  {
    cluster: 'concerns',
    slug: 'therapy-for-workplace-anxiety',
    title: 'Therapy for workplace anxiety',
    metaTitle: 'Therapy for Work Anxiety: When Work Stress Becomes Something Else',
    metaDescription:
      'How to tell ordinary work pressure from workplace anxiety, what maintains it, and what therapy actually does about it.',
    excerpt:
      'Sunday evening dread, rehearsing meetings at 2am, reading a one-line message from your manager eleven times. At some point pressure stops being pressure.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Work stress is normal and mostly survivable. Workplace anxiety is a different thing: it follows you home, and it does not switch off when the laptop does.',
    body: [
      {
        type: 'p',
        text: 'A large share of the people I see in [Delhi NCR](/psychologist-in-delhi) come with some version of this. They are competent, often senior, and quietly exhausted by a job they are objectively doing well.',
      },
      { type: 'h2', text: 'Where the line usually falls' },
      {
        type: 'p',
        text: 'Stress tends to be tied to something specific and ends when that thing does. A deadline passes and you sleep. Anxiety outlives its trigger and generalises: the deadline passes, and the dread stays, looking for its next subject.',
      },
      {
        type: 'ul',
        items: [
          'Sunday afternoons are ruined by Monday.',
          'You re-read your own messages for tone after sending them.',
          'A neutral "can we talk?" produces a physical reaction.',
          'You cannot take leave without checking email, and the checking is compulsive rather than necessary.',
          'You have started avoiding — a meeting, a colleague, a task that keeps moving down the list.',
          'Your body has joined in: jaw, shoulders, stomach, sleep.',
        ],
      },
      { type: 'h2', text: 'What keeps it going' },
      {
        type: 'p',
        text: 'Usually a loop rather than a cause. Something feels threatening, you manage the threat by over-preparing, checking, or working later, the fear subsides briefly, and the behaviour gets reinforced. Over months the strategies that once helped become the mechanism that sustains it.',
      },
      {
        type: 'p',
        text: 'Underneath, there is often a belief doing quiet work: that your output is the same thing as your worth, that being liked at work is a safety requirement, or that any mistake is evidence of being found out.',
      },
      { type: 'h2', text: 'What therapy actually does' },
      {
        type: 'ol',
        items: [
          '**Separates the job from the response.** Some workplaces are genuinely unreasonable. Distinguishing a bad environment from an anxious interpretation of a normal one is the first useful task, and it goes both ways.',
          '**Maps the loop.** Which behaviours are lowering anxiety in the moment and raising it over the week.',
          '**Tests the belief underneath.** Not with affirmations, but by examining what actually happens when the feared thing occurs.',
          '**Rebuilds boundaries that hold.** Practical, specific, and achievable inside your actual job rather than an imaginary one.',
        ],
      },
      { type: 'h2', text: 'When the job really is the problem' },
      {
        type: 'p',
        text: 'Sometimes the answer is not better coping. Sustained unreasonable demands, a manager who humiliates people, or an eighty-hour culture presented as ambition will produce anxiety in a well person, and treating that as an individual failing is both wrong and unhelpful.',
      },
      {
        type: 'p',
        text: 'In those cases the work shifts: what can be changed, what can be endured and for how long, and what leaving would actually require. That is a different conversation from symptom management, and often a more honest one.',
      },
      {
        type: 'p',
        text: 'If you already know this is the difficulty you want to work on, the [stress and burnout](/therapy-for-stress-and-burnout) page sets out how. If exhaustion rather than fear is the dominant note, [burnout](/blog/signs-of-burnout-and-how-therapy-helps) may be the closer description.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-social-anxiety', 'therapy-for-panic-attacks', 'therapy-for-sleep-problems'],
    cta: {
      heading: 'Work should be difficult sometimes. It should not be like this.',
      body: 'A free discovery call is a good place to describe what your week actually looks like and work out whether this is pressure or something more.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-social-anxiety',
    title: 'Therapy for social anxiety',
    metaTitle: 'Therapy for Social Anxiety: What Helps and Why',
    metaDescription:
      'What social anxiety involves beyond shyness, why avoidance makes it stronger, and what therapy does about the fear of being judged.',
    excerpt:
      'Social anxiety is not shyness and it is not introversion. It is the sustained conviction that you are being evaluated, and that you are failing the evaluation.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'People with social anxiety often function well and suffer privately, which is part of why it goes unaddressed for years.',
    body: [
      {
        type: 'p',
        text: 'Introversion is a preference: social contact costs energy, and solitude restores it. Social anxiety is fear — of judgement, of visible awkwardness, of being found wanting. Plenty of socially anxious people are extroverts, which is its own particular misery: wanting connection and dreading the mechanism for getting it.',
      },
      { type: 'h2', text: 'What it looks like' },
      {
        type: 'ul',
        items: [
          '**Rehearsing** ordinary conversations in advance.',
          '**The post-mortem.** Replaying an interaction for hours or days, hunting for the moment you embarrassed yourself.',
          '**Physical give-aways you are convinced are obvious** — blushing, a shaking voice, sweating — which are almost always far less visible than they feel.',
          '**Avoidance**, dressed up as preference. Declining invitations, staying silent in meetings, not ordering at the counter.',
          '**Safety behaviours.** Arriving with someone, staying near an exit, keeping your phone out, drinking to take the edge off.',
        ],
      },
      { type: 'h2', text: 'Why it does not fade on its own' },
      {
        type: 'p',
        text: 'Because avoidance works, immediately. Decline the party and the anxiety drops within minutes. The nervous system records that as a successful escape, and the fear is confirmed rather than tested.',
      },
      {
        type: 'p',
        text: 'Safety behaviours do something subtler and more damaging. When the evening goes fine, you attribute it to the safety behaviour — you survived because you stayed near the door — so the underlying belief never gets disproved.',
      },
      { type: 'h2', text: 'What helps' },
      {
        type: 'p',
        text: 'Social anxiety responds well to structured psychological work, and there is a good evidence base behind it.',
      },
      {
        type: 'ol',
        items: [
          '**Shifting attention outward.** Socially anxious people monitor themselves from the outside — imagining how they look. Practising attention on the conversation rather than the self-image changes the experience considerably.',
          '**Dropping safety behaviours deliberately**, so that good outcomes can finally be credited to you rather than to the crutch.',
          '**Graded exposure.** Structured, chosen by you, starting well below the hardest thing. Not being thrown in.',
          '**Testing the prediction.** You expect to be judged. Checking what actually happened, rather than what you assumed, repeatedly, is where the belief loosens.',
        ],
      },
      { type: 'h2', text: 'Doing this online' },
      {
        type: 'p',
        text: 'This sits within broader [therapy for anxiety](/therapy-for-anxiety). Worth naming: for socially anxious people, video sessions from home remove a real barrier. Several people have told me they would not have attended a clinic waiting room, which is a reason they had never been to therapy at all.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-workplace-anxiety', 'therapy-for-low-self-esteem', 'therapy-for-panic-attacks'],
    cta: {
      heading: 'A first conversation, from wherever you feel comfortable.',
      body: 'No waiting room, no reception. Twenty minutes over video, free, and you can keep the camera off if that makes starting easier.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-panic-attacks',
    title: 'Therapy for panic attacks',
    metaTitle: 'Therapy for Panic Attacks: Why They Happen and What Helps',
    metaDescription:
      'What a panic attack is, why it feels like a medical emergency, the cycle that keeps panic going, and what psychological treatment involves.',
    excerpt:
      'A panic attack convinces you that you are dying. Understanding the mechanism does not make it pleasant, but it changes what you do next — and that is most of the treatment.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Panic responds well to treatment, better than most people expect. The difficulty is that the thing which makes it worse is also the most natural response to it.',
    body: [
      {
        type: 'p',
        text: 'First, the practical point. Chest pain, breathlessness and a racing heart have medical causes as well as psychological ones. If you have not had these symptoms checked by a doctor, do that. Treating a cardiac problem as anxiety is a serious error, and any responsible practitioner will say so before anything else.',
      },
      {
        type: 'p',
        text: 'Assuming that is done, here is what panic is.',
      },
      { type: 'h2', text: 'The mechanism' },
      {
        type: 'p',
        text: 'A panic attack is the body’s threat response firing at full strength with no threat present. Adrenaline floods the system, heart rate climbs, breathing quickens, blood moves to the large muscles. Every sensation is a normal component of a system designed to help you escape danger.',
      },
      {
        type: 'p',
        text: 'The problem is the interpretation. Your body produces a rapid heartbeat; your mind concludes heart attack. That conclusion is itself terrifying, so the threat response escalates, producing stronger sensations, confirming the interpretation. That loop is why panic peaks so ferociously and so fast.',
      },
      {
        type: 'p',
        text: 'Attacks typically peak within about ten minutes and subside. Adrenaline is metabolised; the system cannot sustain it. Panic is horrible and it is not dangerous.',
      },
      { type: 'h2', text: 'What turns one attack into panic disorder' },
      {
        type: 'p',
        text: 'Fear of the next one. After an attack, people begin monitoring their body for early signs — and monitoring finds things, because bodies produce sensations constantly. Noticing your heartbeat makes it feel irregular, which triggers alarm.',
      },
      {
        type: 'p',
        text: 'Then avoidance begins: the metro, the mall, driving alone, anywhere an attack happened or would be embarrassing. The world contracts, and each avoided place confirms that it was dangerous.',
      },
      { type: 'h2', text: 'What treatment involves' },
      {
        type: 'ol',
        items: [
          '**Understanding the cycle properly.** Not reassurance — an actual working model of what your body is doing. This alone reduces frequency for many people.',
          '**Testing the catastrophic prediction.** Discovering, deliberately and repeatedly, that the feared outcome does not occur.',
          '**Dropping safety behaviours**, which prevent that learning from sticking.',
          '**Interoceptive work.** Deliberately and safely inducing the physical sensations — a brief spell of fast breathing, for instance — so they stop signalling catastrophe. Uncomfortable, effective, and always paced with you.',
          '**Returning to avoided places**, gradually and in an order you choose.',
        ],
      },
      {
        type: 'p',
        text: 'There is more on how this work is structured on the [therapy for anxiety](/therapy-for-anxiety) page. Note what is not on the list: breathing exercises as the primary treatment. Slow breathing helps in the moment, but used as a rescue from imminent catastrophe it becomes another safety behaviour. It is a tool, not the treatment.',
      },
      { type: 'h2', text: 'On medication' },
      {
        type: 'p',
        text: 'Some people benefit from medication alongside therapy, particularly where attacks are frequent. That is a psychiatrist’s decision, not mine; psychologists in India do not prescribe. I will say when I think an assessment is worth having.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-health-anxiety', 'therapy-for-social-anxiety', 'therapy-for-workplace-anxiety'],
    cta: {
      heading: 'Panic responds well to treatment.',
      body: 'Understanding what your body is doing is the first step, and it is a reasonable thing to spend a free twenty-minute call on.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-low-self-esteem',
    title: 'Therapy for low self-esteem',
    metaTitle: 'Therapy for Low Self-Esteem: Changing the Voice in Your Head',
    metaDescription:
      'Where low self-esteem comes from, why achievement does not fix it, and what therapy does about a harsh internal standard.',
    excerpt:
      'Low self-esteem is rarely an absence of confidence. It is usually a standard — one you would never apply to anyone else.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'People with low self-esteem are often high achievers, which is precisely why it goes unnoticed. The achievement is the management strategy.',
    body: [
      {
        type: 'p',
        text: 'One of the more counter-intuitive things about this work: many people with genuinely low self-worth are accomplished. Good degrees, good jobs, people who rely on them. The accomplishment is not evidence against low self-esteem. It is frequently the coping mechanism.',
      },
      { type: 'h2', text: 'How it shows up' },
      {
        type: 'ul',
        items: [
          '**Achievement does not land.** The good result registers for an afternoon, then resets the baseline.',
          '**Compliments are deflected**, or reinterpreted as politeness.',
          '**Criticism is absorbed entirely**, and remembered for years.',
          '**You apologise constantly**, including for existing in a conversation.',
          '**Your needs go last**, and asking for something feels like an imposition.',
          '**You cannot rest.** Rest feels like something you have not earned.',
        ],
      },
      { type: 'h2', text: 'Where it usually begins' },
      {
        type: 'p',
        text: 'Frequently in an environment where worth was conditional. Love available for performance. Comparison with a sibling or a cousin. A parent whose approval arrived only at the top mark. Sometimes something blunter — sustained criticism, or being made responsible for an adult’s emotions as a child.',
      },
      {
        type: 'p',
        text: 'In many Indian families this is compounded by a culture of public comparison, where a child’s results are community property and praise is withheld deliberately in the belief that it prevents complacency. Frequently well-intentioned. Frequently lasting.',
      },
      { type: 'h2', text: 'Why success does not fix it' },
      {
        type: 'p',
        text: 'Because the standard moves. If worth is contingent on performance, each achievement becomes the new baseline rather than evidence of value. This is why the promotion changes nothing for more than a week.',
      },
      {
        type: 'p',
        text: 'It is also why advice to "believe in yourself" is useless. The belief is not the issue; the conditions attached to it are.',
      },
      { type: 'h2', text: 'What therapy does' },
      {
        type: 'ol',
        items: [
          '**Identifies the standard.** Making the rule explicit — often something like "I am acceptable only when I am useful" — and looking at where it came from.',
          '**Separates the voice from you.** That critical commentary usually has an origin, and it is often audibly someone else’s.',
          '**Examines the evidence properly**, including the substantial body of it you routinely discard.',
          '**Practises the uncomfortable things.** Accepting a compliment without deflecting. Saying no. Resting without justification. Small, and much harder than it sounds.',
        ],
      },
      { type: 'h2', text: 'What changes' },
      {
        type: 'p',
        text: 'Not, usually, a transformation into someone who loves themselves. More often something quieter: the critical voice gets smaller and less automatic, mistakes stop generating a verdict about your whole character, and you stop needing to earn the right to take up space.',
      },
      {
        type: 'p',
        text: 'That is a modest-sounding outcome that changes a great deal in practice.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-social-anxiety', 'therapy-for-people-in-their-20s', 'therapy-for-relationship-anxiety'],
    cta: {
      heading: 'You do not have to earn the right to ask for help.',
      body: 'If reading that sentence produced an objection, that is worth bringing to a free discovery call.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-relationship-anxiety',
    title: 'Therapy for relationship anxiety',
    metaTitle: 'Relationship Anxiety: Why It Happens and What Helps',
    metaDescription:
      'Constant reassurance-seeking, fear of abandonment, and doubts that will not settle — what drives relationship anxiety and what therapy does about it.',
    excerpt:
      'The relationship is fine. You are the one waiting for it to stop being fine. That gap is what this work is about.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Relationship anxiety is not the same as being in a bad relationship, and one of the first tasks is working out which one you are actually in.',
    body: [
      {
        type: 'p',
        text: 'Some anxiety in a relationship is information. If your partner is unreliable, dismissive, or occasionally cruel, unease is an accurate reading of the situation, and the answer is not to manage the feeling.',
      },
      {
        type: 'p',
        text: 'This guide is about the other kind: sustained fear inside a relationship that is, by the available evidence, secure.',
      },
      { type: 'h2', text: 'What it looks like' },
      {
        type: 'ul',
        items: [
          '**Reassurance that does not hold.** You ask, receive a good answer, and need it again within days.',
          '**Reading tone forensically** — in messages, in replies, in how long a reply took.',
          '**Testing**, often without meaning to. Withdrawing to see whether they follow.',
          '**Rehearsing the ending**, imagining the breakup in detail while nothing is wrong.',
          '**Doubt spirals.** Is this right, do I love them enough, would I know if I did.',
          '**Losing yourself.** Interests, friendships and opinions quietly reorganised around them.',
        ],
      },
      { type: 'h2', text: 'Where it usually comes from' },
      {
        type: 'p',
        text: 'Often early experience of closeness. If affection in childhood was unpredictable — warm one day, withdrawn the next — the nervous system learns that connection is unstable and that vigilance is protective. That learning does not update just because your current partner is consistent.',
      },
      {
        type: 'p',
        text: 'Sometimes it comes from a specific betrayal in a previous relationship. Sometimes it is [low self-esteem](/guides/therapy-for-low-self-esteem) doing its work: if you do not believe you are worth staying for, their leaving looks less like a risk and more like a matter of timing.',
      },
      { type: 'h2', text: 'Why reassurance stops working' },
      {
        type: 'p',
        text: 'This is the mechanism worth understanding. Reassurance relieves anxiety immediately, which teaches the anxiety that reassurance is the cure. So the threshold rises. You need it more often, more specifically, more convincingly — and your partner, who is doing what you asked, becomes exhausted.',
      },
      {
        type: 'p',
        text: 'Reassurance-seeking is a safety behaviour. Like all of them, it protects the fear from ever being tested.',
      },
      { type: 'h2', text: 'What therapy does' },
      {
        type: 'ol',
        items: [
          '**Establishes which situation you are in.** Genuine incompatibility and anxious attachment need opposite responses.',
          '**Traces the pattern back**, usually to somewhere it made sense.',
          '**Reduces reassurance-seeking gradually**, so that security can be experienced rather than requested.',
          '**Builds tolerance for uncertainty.** No relationship comes with a guarantee. The work is not certainty; it is being able to live without it.',
          '**Rebuilds the self outside the relationship** — which, usefully, tends to reduce the fear more than anything else on this list.',
        ],
      },
      {
        type: 'p',
        text: 'This can be done individually. Both partners do not need to attend for it to change — see [relationship counselling](/relationship-counselling) for how that works.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-low-self-esteem', 'therapy-after-a-breakup', 'therapy-for-social-anxiety'],
    cta: {
      heading: 'Worth working out which kind of anxiety this is.',
      body: 'A free discovery call is a reasonable place to describe the relationship and start separating the situation from the fear.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-grief-and-loss',
    title: 'Therapy for grief and loss',
    metaTitle: 'Therapy for Grief: When Loss Needs More Than Time',
    metaDescription:
      'How grief actually behaves, why the stages model misleads people, when grief becomes complicated, and what therapeutic support offers.',
    excerpt:
      'Grief is not a problem to be solved and most people do not need therapy for it. Some kinds of loss, and some circumstances around loss, are different.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Most grief is carried by the people around you. Therapy matters when that structure is absent, or when the loss is one nobody acknowledges.',
    body: [
      {
        type: 'p',
        text: 'Let me start by removing an obligation: grieving is not a disorder and does not require professional treatment. Most people move through loss with family, community and time, painfully and without help. That is not failure to seek support; it is how humans have always done this.',
      },
      { type: 'h2', text: 'The stages model is not what you think' },
      {
        type: 'p',
        text: 'Denial, anger, bargaining, depression, acceptance — these were described in observations of people facing their own terminal illness, not as a sequence that bereaved people pass through in order.',
      },
      {
        type: 'p',
        text: 'The harm of the popular version is that it makes people feel they are grieving incorrectly. They are angry in month six when they were supposed to be at acceptance. They feel fine on Tuesday and devastated on Thursday. Real grief comes in waves, out of order, triggered by things you could not have predicted.',
      },
      { type: 'h2', text: 'When grief is harder to carry' },
      {
        type: 'ul',
        items: [
          '**Sudden or traumatic loss**, where shock sits on top of grief.',
          '**Complicated relationships.** Grieving someone who hurt you is genuinely disorienting — relief and loss at once, and guilt about the relief.',
          '**Disenfranchised grief.** Losses the world does not treat as losses: a miscarriage, a pet, an estranged parent, an ex-partner, a friendship that ended.',
          '**Loss at a distance**, including deaths you could not travel for. Common among Indians abroad, and the absence of the funeral itself does something.',
          '**Grief with no space for it.** People who had to keep functioning — for children, for parents, for work — and never stopped.',
          '**Losses that are not deaths.** A diagnosis, a marriage ending, a career, a country left behind.',
        ],
      },
      { type: 'h2', text: 'When to consider support' },
      {
        type: 'p',
        text: 'There is no schedule, and anyone who tells you grief should be finished by a particular month is wrong. Some signs that professional support may help:',
      },
      {
        type: 'ol',
        items: [
          'You cannot function — work, eating, sleeping — many months on, with no easing at all.',
          'You are avoiding everything connected to them, or conversely cannot engage with anything else.',
          'Guilt dominates: what you should have done, said, noticed.',
          'You have nobody to talk to, or everybody has moved on and you have not.',
          'You are using alcohol or other substances to manage it.',
          'You do not want to be here.',
        ],
      },
      { type: 'h2', text: 'What the work looks like' },
      {
        type: 'p',
        text: 'Not moving on, and not closure. Mostly it is having somewhere to put it: space to say the unsayable things, including the resentful ones, without protecting anyone from them.',
      },
      {
        type: 'p',
        text: 'Some of it is practical — managing the anniversaries, the first festival, the phone number you have not deleted. Some of it is about guilt, which almost always rests on a standard of foresight nobody has. And some of it is finding the shape of a life that includes the loss rather than one that has recovered from it.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-caregivers', 'therapy-after-a-breakup', 'online-therapy-for-indians-living-abroad'],
    cta: {
      heading: 'Somewhere to put it, without protecting anyone.',
      body: 'If the people around you have moved on and you have not, a free discovery call is a place to start.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-health-anxiety',
    title: 'Therapy for health anxiety',
    metaTitle: 'Therapy for Health Anxiety: Breaking the Checking Cycle',
    metaDescription:
      'Why reassurance from tests never lasts, how checking and searching maintain health anxiety, and what psychological treatment involves.',
    excerpt:
      'The test comes back clear and the relief lasts two days. That pattern, not the symptom, is the thing that responds to treatment.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'Health anxiety is exhausting, isolating, and frequently dismissed as being dramatic. It is also one of the more treatable anxiety presentations.',
    body: [
      {
        type: 'p',
        text: 'The essential point first: health anxiety is not imagining symptoms. The sensations are real. Bodies produce constant minor sensations that most people never notice. Health anxiety is about attention and interpretation, not invention.',
      },
      {
        type: 'p',
        text: 'And the necessary caution: if you have symptoms you have not had assessed, see a doctor. Health anxiety and genuine illness can coexist, and nobody should be talked out of appropriate medical care.',
      },
      { type: 'h2', text: 'The cycle' },
      {
        type: 'ol',
        items: [
          '**A sensation occurs.** A twinge, a lump, a flutter, an unfamiliar ache.',
          '**It is interpreted as threat.** Not a strained muscle, but something serious.',
          '**Anxiety rises**, producing its own physical symptoms — which are then added to the evidence.',
          '**Checking begins.** Pressing the area, searching online, taking your pulse, seeking reassurance.',
          '**Relief arrives**, briefly.',
          '**The threshold drops.** Attention stays trained on the body, and the next sensation arrives sooner.',
        ],
      },
      { type: 'h2', text: 'Why clear results do not settle it' },
      {
        type: 'p',
        text: 'Because reassurance treats the symptom of the cycle rather than the cycle. A normal result answers one question — this sensation, today — and leaves the underlying uncertainty untouched. Meanwhile the relief teaches the anxiety that checking is what produces safety, so the checking intensifies.',
      },
      {
        type: 'p',
        text: 'This is why people describe a decade of tests and no lasting peace. The tests were never the problem.',
      },
      { type: 'h2', text: 'What treatment involves' },
      {
        type: 'ul',
        items: [
          '**Reducing checking and searching**, gradually and with a plan. This is the hardest part and the most important.',
          '**Reducing reassurance-seeking**, including from family, who are usually relieved to be given guidance on how to respond.',
          '**Shifting attention.** Body-focused attention creates sensations to find; learning to redirect it reduces the raw material.',
          '**Working with uncertainty.** The goal is never certainty about your health, because no one has that. It is the capacity to live without it.',
          '**Examining the belief underneath** — often a specific fear, sometimes rooted in a death in the family or an illness in childhood.',
        ],
      },
      { type: 'h2', text: 'Agreeing a medical rule' },
      {
        type: 'p',
        text: 'A practical piece of the work is establishing, in advance and calmly, what would genuinely warrant a doctor’s visit — so that decision is not made repeatedly by an anxious mind at 1am. Ideally with your doctor’s input.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-panic-attacks', 'therapy-for-sleep-problems', 'therapy-for-workplace-anxiety'],
    cta: {
      heading: 'Clear results, and still no peace?',
      body: 'That is the pattern this work addresses. A free discovery call is a place to describe it without being told you are overreacting.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-procrastination-and-motivation',
    title: 'Therapy for procrastination and lost motivation',
    metaTitle: 'Therapy for Procrastination: When It Is Not About Discipline',
    metaDescription:
      'Why procrastination is usually emotional rather than a time-management failure, what sits underneath it, and when lost motivation signals something clinical.',
    excerpt:
      'Procrastination is rarely laziness. It is usually avoidance of a feeling, and the feeling is often more specific than you would guess.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'People arrive at this wanting a productivity system. They have usually already tried several, which is itself the evidence that the problem is elsewhere.',
    body: [
      {
        type: 'p',
        text: 'If procrastination were a time-management problem, planners would have solved it. Most chronic procrastinators know exactly what to do, when to do it, and why it matters. The gap is not informational.',
      },
      { type: 'h2', text: 'What is usually being avoided' },
      {
        type: 'p',
        text: 'Not the task. The feeling attached to it.',
      },
      {
        type: 'ul',
        items: [
          '**Fear of judgement.** If you finish it, it can be evaluated. Unfinished work cannot fail.',
          '**Perfectionism.** If it cannot be excellent, not starting protects the standard.',
          '**Resentment.** Tasks imposed by someone else often stall for reasons that are closer to protest than to laziness.',
          '**Overwhelm.** The task is genuinely too large and has never been broken down.',
          '**Uncertainty.** You do not know how to start, and not knowing feels like incompetence, so you avoid discovering it.',
          '**Low mood.** Sometimes the motivation is not blocked. It is absent, which is a different problem.',
        ],
      },
      { type: 'h2', text: 'Why shame makes it worse' },
      {
        type: 'p',
        text: 'The standard response to procrastination is self-criticism, on the theory that enough disgust will produce action. It reliably does the opposite.',
      },
      {
        type: 'p',
        text: 'Shame increases the emotional weight of the task, and since you avoid it to escape that weight, adding more guarantees more avoidance. The cycle tightens: avoid, feel worse about yourself, find the task harder to approach, avoid again.',
      },
      { type: 'h2', text: 'When it is not procrastination at all' },
      {
        type: 'p',
        text: 'Worth taking seriously. If motivation has gone from everything — including the things you used to enjoy — alongside changes in sleep, appetite or concentration, that pattern points toward low mood rather than avoidance, and it needs a different response.',
      },
      {
        type: 'p',
        text: 'Persistent difficulty with initiating and sustaining tasks across your whole life, since childhood, may also warrant assessment for attention difficulties. That is a formal assessment question, and worth asking rather than assuming.',
      },
      { type: 'h2', text: 'What therapy does' },
      {
        type: 'ol',
        items: [
          '**Identifies the specific feeling** being avoided, per task. It is rarely the same one everywhere.',
          '**Reduces the shame loop**, which by itself often restores some capacity.',
          '**Works on the standard**, where perfectionism is the driver — usually connected to [self-esteem](/guides/therapy-for-low-self-esteem).',
          '**Builds tolerance for starting badly.** Most of the change lives here.',
          '**Checks for something clinical**, rather than treating depression as a discipline problem.',
        ],
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-low-self-esteem', 'therapy-for-workplace-anxiety', 'therapy-for-students-and-exam-stress'],
    cta: {
      heading: 'If systems have not worked, the problem is probably not the system.',
      body: 'A free discovery call is a place to work out what is actually being avoided.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-sleep-problems',
    title: 'Therapy for sleep problems',
    metaTitle: 'Therapy for Insomnia: Why Sleep Hygiene Is Not Enough',
    metaDescription:
      'Why trying to sleep keeps you awake, what maintains insomnia beyond its original cause, and what psychological treatment for sleep involves.',
    excerpt:
      'Sleep is the one thing effort makes worse. That paradox is the centre of the problem, and the centre of the treatment.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'Most people arrive having already tried every sleep hygiene tip available. Those tips are fine and they are not usually what is maintaining the problem.',
    body: [
      {
        type: 'p',
        text: 'The first thing to understand is that whatever started your insomnia is often no longer what is keeping it going. A stressful month begins it; then anxiety about sleep itself takes over, and the original stress becomes irrelevant.',
      },
      { type: 'h2', text: 'The effort paradox' },
      {
        type: 'p',
        text: 'Sleep is an involuntary process. You cannot will it, and trying activates the alertness system that sleep requires you to stand down.',
      },
      {
        type: 'p',
        text: 'So the sequence becomes: you cannot sleep, you worry about tomorrow, you monitor how long you have been awake, you calculate remaining hours, and each calculation raises arousal further. The effort is the obstacle.',
      },
      { type: 'h2', text: 'What maintains it' },
      {
        type: 'ul',
        items: [
          '**Spending too long in bed.** Going early or lying in to catch up weakens the connection between bed and sleep.',
          '**Bed as a place of wakefulness.** Enough hours awake there and your body learns bed is where you lie and worry.',
          '**Clock-watching**, which converts every waking into an arithmetic problem.',
          '**Catastrophising.** "Tomorrow will be ruined" is both frightening and usually an overestimate.',
          '**Irregular rising times**, which disturb the internal clock more than bedtimes do.',
        ],
      },
      { type: 'h2', text: 'What psychological treatment does' },
      {
        type: 'p',
        text: 'Cognitive behavioural therapy for insomnia is the recommended first-line treatment for chronic insomnia in most clinical guidance — ahead of medication. It is structured and typically brief.',
      },
      {
        type: 'ol',
        items: [
          '**Stimulus control.** Rebuilding bed as a place for sleep: get up if awake, return when sleepy.',
          '**Sleep restriction.** Counter-intuitive and the most effective component — deliberately limiting time in bed to increase sleep pressure, then extending as efficiency improves.',
          '**Cognitive work** on the beliefs that drive the arousal, particularly about the consequences of a bad night.',
          '**Reducing monitoring.** Clock out of sight, tracker off for a while.',
          '**Wind-down that is real**, not a list of rules that becomes another performance to fail.',
        ],
      },
      {
        type: 'p',
        text: 'Sleep restriction should be undertaken with guidance, and is not appropriate for everyone — it is contraindicated in some conditions.',
      },
      { type: 'h2', text: 'When to see a doctor instead' },
      {
        type: 'p',
        text: 'Where anxiety is driving the sleeplessness, [therapy for anxiety](/therapy-for-anxiety) addresses the same loop. Loud snoring with pauses in breathing, or severe daytime sleepiness despite adequate hours, may indicate sleep apnoea, which needs medical assessment. Sleep disturbance is also a core feature of depression and of thyroid disorders. Worth ruling those out.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-workplace-anxiety', 'therapy-for-health-anxiety', 'therapy-for-panic-attacks'],
    cta: {
      heading: 'If sleep hygiene has not worked, there is a structured alternative.',
      body: 'A free discovery call is a place to describe your nights and work out whether this approach fits.',
    },
  },

  {
    cluster: 'concerns',
    slug: 'therapy-for-anger',
    title: 'Therapy for anger',
    metaTitle: 'Therapy for Anger: Understanding What Sits Underneath It',
    metaDescription:
      'Why anger is usually a secondary emotion, the difference between venting and processing, and what therapy does about a temper you regret.',
    excerpt:
      'Anger is rarely the first feeling. It is usually the one that arrives after something more uncomfortable, and it arrives because it is more bearable.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'People seeking help with anger are usually frightened of themselves, and have often been carrying that privately for years.',
    body: [
      {
        type: 'p',
        text: 'Anger is not a character flaw and it is not inherently destructive. It is a normal emotion with a clear function: it signals that something matters, that a line has been crossed, that something is unjust. People with no access to their anger tend to get walked over.',
      },
      {
        type: 'p',
        text: 'The difficulty is when it arrives at a scale that does not match the situation, when it lands on people who did not cause it, or when what follows is shame.',
      },
      { type: 'h2', text: 'What usually sits underneath' },
      {
        type: 'p',
        text: 'Anger is frequently a secondary emotion. Something arrives first — hurt, fear, humiliation, helplessness, shame — and anger follows almost immediately, because it is more tolerable. It is outward-facing, it feels powerful, and it does not require admitting you were wounded.',
      },
      {
        type: 'p',
        text: 'This is why the trigger so often looks trivial. The shouting is not about the misplaced keys. It is about the twenty minutes of feeling disrespected that preceded them, or a decade of it.',
      },
      { type: 'h2', text: 'Why venting does not help' },
      {
        type: 'p',
        text: 'The popular belief that anger is a pressure that must be released — through shouting, hitting something, or "letting it out" — does not hold up. Rehearsing an angry response tends to strengthen the pattern rather than discharge it.',
      },
      {
        type: 'p',
        text: 'What helps is understanding the sequence and intervening earlier in it, before the point where control is genuinely difficult.',
      },
      { type: 'h2', text: 'What therapy involves' },
      {
        type: 'ol',
        items: [
          '**Mapping the sequence.** Anger feels instantaneous and almost never is. There are physical and cognitive signals beforehand, and they can be learned.',
          '**Identifying the primary emotion.** What arrived before the anger. This is the substantive work.',
          '**Building a gap.** Practical strategies for the window between trigger and reaction, so there is somewhere to intervene.',
          '**Examining the rules.** Anger often fires when a personal rule about respect or fairness is broken. Some of those rules deserve keeping; others are running unexamined from a long time ago.',
          '**Learning to express it early and proportionately**, which is how you stop accumulating it.',
        ],
      },
      { type: 'h2', text: 'If you have frightened someone' },
      {
        type: 'p',
        text: 'This needs saying plainly. If your anger has become physical toward another person, or if someone in your home is afraid of you, that is urgent and it needs immediate professional help rather than a gradual course of work. Please seek it now.',
      },
      {
        type: 'p',
        text: 'If you are on the receiving end of someone else’s anger and are unsafe, your safety comes first, and this is not a guide about managing them.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-workplace-anxiety', 'therapy-for-low-self-esteem', 'therapy-for-relationship-anxiety'],
    cta: {
      heading: 'Wanting to understand your anger is not an admission of being a bad person.',
      body: 'It is usually the opposite. A free discovery call is a place to start looking at what sits underneath it.',
    },
  },
];
