import type { Guide } from './types';
import { GUIDE_PUBLISHED as PUB } from './types';

const CRISIS =
  'This is not a crisis service. If you or someone you know is in immediate danger, contact Tele-MANAS on 14416, KIRAN on 1800-599-0019, or emergency services on 112.';

export const lifeGuides: Guide[] = [
  {
    cluster: 'life',
    slug: 'therapy-for-students-and-exam-stress',
    title: 'Therapy for students and exam stress',
    metaTitle: 'Therapy for Students in India: Exam Stress and Expectation',
    metaDescription:
      'Exam pressure, competitive coaching, parental expectation and the fear of disappointing everyone — what students in India carry, and what helps.',
    excerpt:
      'For a lot of Indian students the pressure is not really about the exam. It is about what the result is understood to say about them, and about their family.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Academic pressure in India is unusually concentrated: a small number of examinations, taken young, treated as verdicts on a whole life.',
    body: [
      {
        type: 'p',
        text: 'A student sitting for a competitive entrance in India is not simply taking a test. They are carrying a family’s financial investment, a relative’s expectations, a coaching centre’s ranking system, and a widely shared belief that this single result determines everything that follows.',
      },
      {
        type: 'p',
        text: 'That is a great deal to place on a seventeen-year-old, and the resulting distress is a reasonable response to an unreasonable arrangement rather than a personal weakness.',
      },
      { type: 'h2', text: 'What students most often describe' },
      {
        type: 'ul',
        items: [
          '**Studying without absorbing.** Hours at the desk, very little retained, and guilt about every break.',
          '**Comparison as a constant background** — rank lists, cousins, the class group chat.',
          '**Physical symptoms** — stomach trouble, headaches, sleep that will not come.',
          '**Blanking in the exam** despite knowing the material.',
          '**Fear of disappointing parents**, which is frequently heavier than the fear of failing.',
          '**No identity outside results.** If you are not your marks, it becomes unclear what you are.',
        ],
      },
      { type: 'h2', text: 'The part that is hardest to say' },
      {
        type: 'p',
        text: 'Many students cannot tell their parents they are struggling, because the struggle itself is read as a lack of seriousness. So they carry it alone, perform competence, and the gap between the performance and the reality widens.',
      },
      {
        type: 'p',
        text: 'Sometimes the underlying difficulty is not the exam at all but the direction — a student studying for a course chosen by the family, unable to say so. That conversation, when it becomes possible, changes more than any study technique.',
      },
      { type: 'h2', text: 'What helps' },
      {
        type: 'ol',
        items: [
          '**Separating your worth from the result.** Slow work, and the most protective thing available.',
          '**Managing the physiology.** Exam anxiety is partly a body problem, and the body responds to specific techniques.',
          '**Structure that is realistic**, replacing the fantasy timetable nobody could follow and everybody feels guilty about.',
          '**Making the fear concrete.** "What if I fail" is unmanageable in the abstract and much smaller once examined in detail.',
          '**Finding language for parents**, where a conversation is possible.',
        ],
      },
      { type: 'h2', text: 'For parents reading this' },
      {
        type: 'p',
        text: 'If your child is anxious, more pressure will not produce more output; it reliably produces less. The most useful thing a parent can offer at this stage is credible evidence that their affection does not depend on the result. Children can usually tell whether that is true.',
      },
      { type: 'h2', text: 'Where to find support' },
      {
        type: 'p',
        text: 'Most universities have a free counselling cell. Tele-MANAS on 14416 is free and available around the clock. Private therapy is an option where affordable — and [what to do if you cannot afford therapy](/guides/what-to-do-if-you-cannot-afford-therapy-in-india) lists the alternatives if it is not.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-people-in-their-20s', 'therapy-for-procrastination-and-motivation', 'therapy-for-low-self-esteem'],
    cta: {
      heading: 'Struggling is not evidence that you are not serious.',
      body: 'A free discovery call is confidential. Nothing is reported to your parents or your institution.',
    },
  },

  {
    cluster: 'life',
    slug: 'therapy-for-people-in-their-20s',
    title: 'Therapy in your twenties',
    metaTitle: 'Therapy in Your 20s: Pressure, Comparison and Not Knowing',
    metaDescription:
      'Career uncertainty, marriage pressure, financial strain and comparison — what makes the twenties difficult in India, and what therapy offers.',
    excerpt:
      'Everything is supposed to be decided in this decade, and almost nothing is. The gap between the two is where most of the distress lives.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'The Indian twenties come with an unusually specific schedule attached, and falling behind it is treated as a moral failing rather than a variation.',
    body: [
      {
        type: 'p',
        text: 'There is a timetable most Indians in their twenties can recite without having been formally taught it. Degree, job, promotion, marriage, house, children — with approximate ages attached, and relatives tracking progress against it at every gathering.',
      },
      {
        type: 'p',
        text: 'Deviating from the schedule generates a specific kind of pressure: not simply "what do you want", but "what is wrong with you".',
      },
      { type: 'h2', text: 'What people bring' },
      {
        type: 'ul',
        items: [
          '**Career uncertainty**, often three or four years into something chosen at seventeen.',
          '**Marriage pressure**, which in many families begins in the mid-twenties and escalates.',
          '**Financial strain**, frequently alongside supporting parents or siblings.',
          '**Comparison at volume.** Social media makes everyone’s edited version continuously visible.',
          '**Living at home as an adult**, with adult obligations and adolescent autonomy.',
          '**Friendship attrition.** The structure that made friendship automatic is gone, and nobody replaces it deliberately.',
          '**The quiet fear of having chosen wrong**, and being too far in to change.',
        ],
      },
      { type: 'h2', text: 'The particular bind' },
      {
        type: 'p',
        text: 'Much of the difficulty in this decade comes from being an adult in every legal and financial sense while remaining a child within the family structure. You pay bills and are asked where you are going.',
      },
      {
        type: 'p',
        text: 'The common Western prescription — move out, set boundaries, separate — is often neither practical nor desirable here, and treating interdependence itself as the pathology is unhelpful. The workable version is usually finding a form of adulthood that does not require severing the family relationship.',
      },
      { type: 'h2', text: 'What therapy is useful for here' },
      {
        type: 'ol',
        items: [
          '**Separating your preferences from your inheritance.** Which of these ambitions are actually yours is a harder question than it sounds, and worth answering before another decade passes.',
          '**Making decisions under genuine uncertainty**, rather than waiting for a certainty that does not arrive.',
          '**Handling family pressure** without either capitulating or rupturing.',
          '**Loosening comparison.** Not by ignoring it, but by examining what you are actually comparing.',
          '**Building an adult identity** that survives changes of job and relationship status.',
        ],
      },
      { type: 'h2', text: 'You do not need a crisis to come' },
      {
        type: 'p',
        text: 'A significant number of people in their twenties who benefit from therapy are not unwell. They are at a set of forks with no map and nobody neutral to think with. That is a legitimate reason, and arguably a better use of the time than waiting until something breaks.',
      },
      {
        type: 'p',
        text: 'If keeping it private from family is the obstacle, that is workable — see [therapy without telling your family](/guides/therapy-without-telling-your-family).',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-without-telling-your-family', 'therapy-for-career-change-and-uncertainty', 'therapy-for-low-self-esteem'],
    cta: {
      heading: 'Somewhere to think without being advised.',
      body: 'A free discovery call, confidential, and no obligation to book anything afterwards.',
    },
  },

  {
    cluster: 'life',
    slug: 'therapy-after-a-breakup',
    title: 'Therapy after a breakup',
    metaTitle: 'Therapy After a Breakup: When It Is More Than Heartbreak',
    metaDescription:
      'Why breakups hurt as much as they do, what makes some harder to recover from, and when support helps rather than waiting it out.',
    excerpt:
      'Most heartbreak resolves with time and friends. Some breakups take something else with them, and that kind is harder to walk off.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'The intensity of breakup pain is often dismissed, including by the person experiencing it. It is worth taking more seriously than that.',
    body: [
      {
        type: 'p',
        text: 'The end of a significant relationship is a genuine loss, and it produces genuine grief. It is also one of the few losses where people are expected to recover quickly and are gently mocked if they do not.',
      },
      {
        type: 'p',
        text: 'What makes it distinctive is that the person is still alive, possibly still visible online, possibly still in your social circle, and possibly with someone new. Grief with no closure and continuous updates is a difficult combination.',
      },
      { type: 'h2', text: 'What is actually lost' },
      {
        type: 'p',
        text: 'Usually more than the relationship. An imagined future, in considerable detail. A daily structure. A set of mutual friends. Sometimes a version of yourself that existed mainly in that relationship.',
      },
      {
        type: 'p',
        text: 'In the Indian context there is often another layer: families that had begun to plan, a community that knew, and the particular weight of an engagement or a near-marriage ending publicly.',
      },
      { type: 'h2', text: 'What makes some harder' },
      {
        type: 'ul',
        items: [
          '**No explanation.** Unanswered questions keep the mind working long past exhaustion.',
          '**Betrayal.** Infidelity damages your reading of your own judgement, not only the relationship.',
          '**Being the one who left**, which comes with guilt and very little permission to grieve.',
          '**A long relationship**, where the loss includes most of your adult life’s structure.',
          '**Family or community opposition** ending it, which adds resentment to grief.',
          '**A relationship that was harmful.** Missing someone who hurt you is confusing and extremely common.',
        ],
      },
      { type: 'h2', text: 'When support helps' },
      {
        type: 'p',
        text: 'Not everyone needs therapy after a breakup, and saying otherwise would be dishonest. It is worth considering when months pass with no easing, when you cannot function, when you are using alcohol to manage it, when contact continues in a loop you cannot break, or when you find yourself concluding something permanent about your own unlovability.',
      },
      {
        type: 'p',
        text: 'That last one matters. Heartbreak that hardens into a belief — that you are too much, or not enough — outlasts the relationship by years.',
      },
      { type: 'h2', text: 'What the work involves' },
      {
        type: 'p',
        text: 'Space to grieve without being told to move on. Untangling the loss of the person from the loss of the future. Examining the pattern, if there is one, without turning it into a verdict. And rebuilding a sense of yourself that does not depend on being chosen.',
      },
      {
        type: 'p',
        text: 'If you want to work on this directly, [relationship counselling](/relationship-counselling) covers individual as well as couples work. If anxiety inside relationships is the recurring theme rather than this particular ending, [relationship anxiety](/guides/therapy-for-relationship-anxiety) may be closer to the point.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-relationship-anxiety', 'therapy-for-grief-and-loss', 'therapy-for-low-self-esteem'],
    cta: {
      heading: 'You are allowed to find this as hard as you are finding it.',
      body: 'A free discovery call is a place to talk about it without being told how long it should have taken.',
    },
  },

  {
    cluster: 'life',
    slug: 'therapy-for-new-parents',
    title: 'Therapy for new parents',
    metaTitle: 'Therapy for New Parents: Beyond the Baby Blues',
    metaDescription:
      'Postnatal distress in mothers and fathers, how to tell baby blues from something more persistent, and why Indian families can make it harder to speak up.',
    excerpt:
      'You are supposed to be happy. That expectation is precisely what stops new parents saying anything when they are not.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Postnatal distress is common, treatable, and badly under-discussed in India, where a house full of relatives can paradoxically leave a new mother more alone.',
    body: [
      {
        type: 'p',
        text: 'A new parent who is not delighted is usually convinced there is something wrong with them specifically. There is not. Postnatal mental health difficulty is among the most common complications of childbirth, and it responds well to support.',
      },
      { type: 'h2', text: 'Baby blues, or something more' },
      {
        type: 'p',
        text: 'Tearfulness, mood swings and overwhelm in the first week or two after birth are extremely common and usually settle without treatment.',
      },
      {
        type: 'p',
        text: 'Worth taking further if it persists beyond two or three weeks, if the low mood is constant rather than fluctuating, if you cannot sleep even when the baby does, if you feel disconnected from the baby, or if you are troubled by intrusive frightening thoughts.',
      },
      {
        type: 'p',
        text: 'On that last point: distressing intrusive thoughts about harm coming to the baby are common in new parents and are typically the opposite of intent — they are anxiety, and they horrify the person having them. They are still worth telling someone about, because carrying them silently is its own burden.',
      },
      { type: 'h2', text: 'The Indian context' },
      {
        type: 'p',
        text: 'Traditional postnatal arrangements bring real support — food prepared, the baby held, the mother relieved of household work. That genuinely helps.',
      },
      {
        type: 'p',
        text: 'It can also bring a full house of opinions, very little privacy, contradictory advice delivered with certainty, and no acceptable moment to say that you are not coping. Being surrounded by people and unable to speak honestly to any of them is a particular kind of isolation.',
      },
      {
        type: 'p',
        text: 'There is often pressure to appear grateful, and for many women an additional pressure regarding the baby’s gender that should not exist and still does.',
      },
      { type: 'h2', text: 'Fathers and partners' },
      {
        type: 'p',
        text: 'Paternal postnatal depression is real, reasonably common, and almost never asked about. Fathers frequently report feeling peripheral, financially frightened, and unable to say any of it since they did not give birth.',
      },
      { type: 'h2', text: 'What helps' },
      {
        type: 'ol',
        items: [
          '**Saying it to someone outside the family**, often for the first time.',
          '**Normalising the ambivalence.** Loving your child and hating your circumstances are not in conflict.',
          '**Practical work on sleep and support**, which is not a soft issue — sleep deprivation drives much of the distress.',
          '**Navigating the relatives**, including how to accept help without surrendering every decision.',
          '**Rebuilding an identity** that is not exclusively parental.',
          '**Medical review where needed.** Thyroid changes and anaemia after birth can mimic depression, and some situations need a psychiatrist.',
        ],
      },
      { type: 'h2', text: 'Getting help urgently' },
      {
        type: 'p',
        text: 'Where low mood persists past the early weeks, [therapy for depression and low mood](/therapy-for-depression) describes the work. Some presentations need immediate medical attention rather than a therapy appointment: thoughts of harming yourself or the baby, confusion, or beliefs that seem unusual to those around you. Postpartum psychosis is rare and is a medical emergency. Contact a doctor immediately.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-caregivers', 'therapy-for-relationship-anxiety', 'therapy-for-sleep-problems'],
    cta: {
      heading: 'Somewhere outside the family to say it honestly.',
      body: 'Sessions run over video, which for new parents usually means during a nap rather than after arranging childcare.',
    },
  },

  {
    cluster: 'life',
    slug: 'therapy-for-caregivers',
    title: 'Therapy for caregivers',
    metaTitle: 'Therapy for Caregivers: Support for the Person Holding It Together',
    metaDescription:
      'Caregiver burnout, guilt, resentment and grief while the person is still alive — what long-term caring does to people, and what support helps.',
    excerpt:
      'Everyone asks how the patient is. Almost nobody asks how you are, and after a while you stop having an answer ready.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 7,
    standfirst:
      'Caring for an ageing or ill family member is one of the most common and least acknowledged sources of sustained distress in Indian households.',
    body: [
      {
        type: 'p',
        text: 'In India, caregiving is usually absorbed into family duty rather than recognised as work. It falls disproportionately on daughters and daughters-in-law, frequently alongside a job and children, and it is expected rather than thanked.',
      },
      {
        type: 'p',
        text: 'Because it is framed as duty, the strain has nowhere legitimate to go. Complaining feels like betrayal.',
      },
      { type: 'h2', text: 'What caregivers carry' },
      {
        type: 'ul',
        items: [
          '**Exhaustion that sleep does not touch**, sustained across years rather than weeks.',
          '**Guilt, constantly.** For resting, for irritation, for not doing more.',
          '**Resentment**, followed immediately by shame about the resentment.',
          '**Grief for someone still alive**, particularly with dementia, where the person is present and progressively unreachable.',
          '**Invisibility.** Every conversation is about the patient.',
          '**Anger at siblings** who send advice and money but not time.',
          '**A vanished life.** Friendships, plans and ambitions deferred so long they have quietly expired.',
        ],
      },
      { type: 'h2', text: 'The thought nobody admits' },
      {
        type: 'p',
        text: 'Many long-term caregivers have, at some point, wished it would end. Then been horrified at themselves.',
      },
      {
        type: 'p',
        text: 'It is worth saying plainly: that thought is common, it does not mean you want your person to die, and it does not make you a bad daughter or son. It is usually exhaustion speaking, and sometimes compassion — not wanting their suffering to continue. Carrying it in silence does far more damage than saying it out loud once, to someone who will not flinch.',
      },
      { type: 'h2', text: 'Why "take care of yourself" is useless advice' },
      {
        type: 'p',
        text: 'Because it assumes available time and permission, and caregivers usually have neither. The useful version is more specific: what could realistically be delegated, what a sibling could be asked for in concrete terms, what respite exists locally, and what standard you are holding yourself to that no one could meet.',
      },
      { type: 'h2', text: 'What therapy offers' },
      {
        type: 'ol',
        items: [
          '**A space where you are the subject**, possibly the only one in your week.',
          '**Permission for the difficult feelings**, which loosens their grip considerably.',
          '**Work on guilt**, which is usually measured against an impossible standard.',
          '**Practical thinking about boundaries and asking**, including the family conversations you have been avoiding.',
          '**Grief support**, both anticipatory and after.',
        ],
      },
      {
        type: 'p',
        text: 'Video sessions matter here more than in most situations: many caregivers cannot leave the house, and an hour that requires no arrangements is the difference between attending and not.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapy-for-new-parents', 'therapy-for-grief-and-loss', 'online-therapy-for-indians-living-abroad'],
    cta: {
      heading: 'An hour where the subject is you.',
      body: 'Sessions run over video, from home, without arranging cover. The first conversation is free.',
    },
  },

  {
    cluster: 'life',
    slug: 'therapy-for-career-change-and-uncertainty',
    title: 'Therapy for career change and uncertainty',
    metaTitle: 'Therapy for Career Uncertainty: When You Cannot Decide',
    metaDescription:
      'Feeling trapped in the wrong career, the sunk cost of years already spent, family expectation, and how therapy differs from career advice.',
    excerpt:
      'You are not short of information about your options. You have been researching for two years. The obstacle is somewhere else.',
    datePublished: PUB,
    dateModified: PUB,
    readingMinutes: 6,
    standfirst:
      'Career paralysis usually looks like a decision problem and behaves like an emotional one, which is why more research never resolves it.',
    body: [
      {
        type: 'p',
        text: 'People arrive with spreadsheets. Salary comparisons, course fees, five-year projections. They have done the work and they still cannot move, which is itself the clue: the missing thing is not information.',
      },
      { type: 'h2', text: 'What is usually in the way' },
      {
        type: 'ul',
        items: [
          '**Sunk cost.** Seven years in a field, and leaving feels like declaring them wasted.',
          '**Family investment**, financial and emotional, in the path you are on.',
          '**Identity.** If you have been "an engineer" since seventeen, leaving raises a question larger than employment.',
          '**Fear of regret**, applied asymmetrically — the regret of leaving is vivid, the regret of staying is not.',
          '**Financial obligation.** Sometimes genuine, and sometimes a reason that has outlived its accuracy.',
          '**Not knowing what you want**, which is frequently the actual problem and rarely the stated one.',
        ],
      },
      { type: 'h2', text: 'The Indian specifics' },
      {
        type: 'p',
        text: 'Careers here are often chosen at sixteen or seventeen, by a family, based on entrance results. A person may be a decade into a life selected before they knew themselves at all.',
      },
      {
        type: 'p',
        text: 'Leaving is not only a professional decision. It can read as ingratitude toward parents who sacrificed for that education, and it may affect marriage prospects, extended-family standing, and how you are discussed at weddings. These are real costs, not irrational anxieties, and pretending otherwise is unhelpful.',
      },
      { type: 'h2', text: 'How this differs from career advice' },
      {
        type: 'p',
        text: 'A career counsellor maps options, markets and qualifications. Useful, and a different service.',
      },
      {
        type: 'p',
        text: 'Therapy works on what is preventing a decision: the fear, the identity question, whose voice the objection is in, and the gap between what you say you want and what you keep choosing. There is more on the distinction in [therapist or life coach](/guides/therapist-vs-life-coach).',
      },
      { type: 'h2', text: 'What the work looks like' },
      {
        type: 'ol',
        items: [
          '**Separating your preferences from inherited ones.** Often the first genuinely new question.',
          '**Examining the sunk cost honestly.** Years already spent are not recoverable by spending more.',
          '**Making the fear specific.** "It might not work out" is paralysing; "I would need eighteen months of savings" is a plan.',
          '**Considering the cost of staying**, which is usually invisible precisely because it is the status quo.',
          '**Preparing the family conversation**, where one is needed.',
        ],
      },
      { type: 'h2', text: 'Sometimes the answer is to stay' },
      {
        type: 'p',
        text: 'Not every dissatisfying job needs leaving. Occasionally the work reveals that the career is fine and something else is wrong — a manager, exhaustion, or a life with nothing in it besides work. Changing careers would not have fixed any of those.',
      },
      {
        type: 'p',
        text: 'Staying deliberately, having examined it, is a different experience from staying because you could not decide.',
      },
      { type: 'note', text: CRISIS },
    ],
    related: ['therapist-vs-life-coach', 'therapy-for-people-in-their-20s', 'therapy-for-workplace-anxiety'],
    cta: {
      heading: 'If more research has not produced a decision, the obstacle is elsewhere.',
      body: 'A free discovery call is a place to start working out what it actually is.',
    },
  },
];
