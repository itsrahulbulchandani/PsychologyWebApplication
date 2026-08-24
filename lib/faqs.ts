import type { FAQItem } from '@/components/FAQList';

export type FAQGroup = {
  /** Short label shown above the group. */
  eyebrow: string;
  heading: string;
  items: FAQItem[];
};

/**
 * Every answer below reflects the actual practice: the free discovery call, the
 * session structure on /what-to-expect, and the policies on /terms and
 * /privacy-policy. Nothing here should state a policy that is not published.
 */
export const faqGroups: FAQGroup[] = [
  {
    eyebrow: 'Getting started',
    heading: 'Is therapy right for me?',
    items: [
      {
        question: 'How do I know if I need therapy?',
        answer:
          'If something in your life feels overwhelming, confusing, or emotionally heavy, therapy can help. You don’t need to be in crisis to seek support. Therapy is also for people who want clarity, growth, and a better understanding of themselves. A useful test: if nothing changes in six months, how will you feel about that? If the honest answer is “I don’t want to still be here”, that is usually reason enough to have a conversation.',
      },
      {
        question: 'What if my problem feels too small for therapy?',
        answer:
          'There is no problem that is “too small.” If something is affecting your peace of mind, it matters. Therapy is not only for big crises. It’s also for everyday struggles, stress, and emotional confusion. You can see your therapist for a short term focus and discontinue when you feel like you’ve accomplished what you came for. Smaller difficulties are also usually easier to work with than entrenched ones, so coming in early often means fewer sessions rather than more.',
      },
      {
        question: 'What concerns can I bring to therapy?',
        answer:
          'Most of my work is with adults dealing with anxiety and stress, low mood and emotional wellbeing, relationship and communication difficulties, burnout and emotional fatigue, self-esteem and confidence, and life transitions or questions of identity. Boundaries, decision-making, emotional healing and mindfulness also come up often. If you are not sure whether what you are carrying fits, that is a good thing to ask about on the discovery call.',
      },
      {
        question: 'What if I am not sure what I need help with?',
        answer:
          'That’s completely okay. You don’t need to come with a script. We can begin wherever you are: what you’re feeling today, what’s been bothering you lately, or even why you decided to book the session. I can help you feel comfortable first and we’ll take it from there. Not being able to name the problem is very often part of the problem, and it is something therapy is well suited to working on.',
      },
      {
        question: 'How is this different from talking to a friend?',
        answer:
          'Friends care about you, but therapy offers a safe, unbiased space focused only on you. A therapist is trained to help you understand patterns, ask the right questions, and guide you toward clarity and healthier ways of coping. Since your therapist is outside of your social circles, it helps in making the space truly safe and free of judgement, and entirely focused on your needs.',
      },
      {
        question: 'Therapy has not worked for me in the past. Why would it work now?',
        answer:
          'Sometimes therapy doesn’t work because the timing, the approach, or the therapist wasn’t the right fit. Therapy is not one-size-fits-all. We will work at your pace and focus on what feels most relevant to you now. Your past experience doesn’t mean therapy can’t help you in the present. It is worth telling me what did not work last time, because that information genuinely shapes how we begin.',
      },
      {
        question: 'Will a counsellor younger in age be able to handle things?',
        answer:
          'A therapist’s ability to help comes from their training, experience and capacity to listen with empathy, not their age. What matters most is if you feel understood, safe, and supported in the space we create together. I do understand that we might not be the right fit in the end, and you have every right to explore and find the best match for you.',
      },
      {
        question: 'Do you offer couples or family sessions?',
        answer:
          'Yes. Alongside individual therapy, I offer couples and family sessions, and you choose the format when you book. If you are unsure whether your situation is better suited to individual work or couples work, bring that question to the discovery call and we can think about it together.',
      },
    ],
  },
  {
    eyebrow: 'The discovery call',
    heading: 'What happens before you commit',
    items: [
      {
        question: 'What happens during the discovery call?',
        answer:
          'The discovery call is a brief 15 to 20 minute conversation before any therapy begins. You share what has been going on and what you are hoping for, you can ask me anything about how I work, my qualifications or the practicalities, and we both get a sense of whether my approach fits your needs. It is not a therapy session, and there is no obligation to book anything afterwards.',
      },
      {
        question: 'Is the discovery call really free?',
        answer:
          'Yes. The discovery call is free and carries no obligation. It exists so that you are not paying to find out whether we are a good fit, and so that your first real session is not the first time we have spoken.',
      },
      {
        question: 'What happens after the discovery call?',
        answer:
          'If it feels right to both of us, we schedule your first session and you receive guidance on how to prepare. If I think another kind of professional would serve you better, such as a psychiatrist for medication or a clinical psychologist for formal assessment, I will tell you that instead. And if you would simply like time to think, that is a completely acceptable outcome.',
      },
    ],
  },
  {
    eyebrow: 'Sessions',
    heading: 'How sessions actually work',
    items: [
      {
        question: 'What happens in the first session?',
        answer:
          'The first session is about getting to know you and understanding what brings you to therapy. You can share as much or as little as you feel comfortable with. We’ll talk about your concerns, your goals, and how therapy can support you. Your first two sessions at least are about building a safe space and identifying what you want to work on, rather than diving straight into solutions.',
      },
      {
        question: 'How long is a therapy session?',
        answer:
          'Each session lasts up to 60 minutes. In an emergency there is the option to extend by 15 to 30 minutes so that you leave the session feeling composed and supported. The discovery call is shorter, at 15 to 20 minutes.',
      },
      {
        question: 'How often do sessions happen?',
        answer:
          'Frequency depends on your goals and needs, and usually starts at once a week. As things settle we review the frequency together. Fortnightly sessions that you can sustain are better than weekly sessions you have to stop after a month.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'There’s no fixed number of sessions because everyone’s journey is different. If you are only looking for it on a temporary basis, then try to give it at least 4 to 6 months. This means you may need about 10 to 15 sessions for deeper long-term change. However, some people do come to discuss a very specific problem and they find a lot of benefit just in 4 to 8 sessions.',
      },
      {
        question: 'How does online therapy work?',
        answer:
          'Sessions are conducted online over video, so you can attend from anywhere in India. After you book, you receive a confirmation email and a calendar invite containing a Google Meet link, which you click at your appointment time. You will need a private space where you will not be interrupted, a reasonably stable connection, and ideally headphones. Online therapy provides the same level of care, support and confidentiality as an in-person session.',
      },
      {
        question: 'Can I attend therapy from anywhere in India?',
        answer:
          'Yes. The practice is fully online, so location within India is not a barrier. What matters far more than where you are is whether you have a private space for the hour and a connection stable enough for video. If the video is unreliable, switching to audio is completely normal.',
      },
      {
        question: 'What language are sessions held in?',
        answer:
          'Sessions are held in English, Hindi, or a comfortable mix of the two, and you tell me your preference when you book. Emotional vocabulary is not evenly distributed across the languages we speak, so you are not expected to translate yourself for your therapist.',
      },
      {
        question: 'Do I need to prepare anything before a session?',
        answer:
          'No preparation is required. You can simply come as you are. If you like, you can think about what you’d like help with, but it’s not necessary. What does help is arranging a private space in advance and, if you can, leaving a little unstructured time afterwards rather than going straight into a meeting.',
      },
      {
        question: 'Is it okay if I feel nervous or awkward at first?',
        answer:
          'Yes, very normal. Many people feel unsure or anxious in the beginning. Therapy is a new experience, and it takes time to feel comfortable. There is no pressure to be perfect or say the “right” things. There’s no right or wrong, just being authentic, whatever you’re feeling at the moment, even if it’s nervousness.',
      },
      {
        question: 'Is there any support between sessions?',
        answer:
          'After each session you’ll be given some homework or exercises that ask you to reflect, learn something new, or practise a behaviour. In the gap between sessions you can message me on chat if you get stuck, and I will guide you as best I can. I don’t guarantee immediate or complete replies, but I will try to be there for you while also maintaining my own work-life balance.',
      },
      {
        question: 'What if the solutions are temporary and the problem comes back?',
        answer:
          'Therapy is not just about quick fixes. It focuses on helping you understand patterns in your thoughts, emotions, and actions so you can handle challenges even when they return. Just like if you stop going to the gym you may end up losing muscle. Keeping notes and practising the newly learnt skills will help you when you find yourself in similar situations later on in life. There’s no shortcut. Just like your body, your mind needs practice and repetition.',
      },
      {
        question: 'How will I know if therapy is helping?',
        answer:
          'You may notice small changes: feeling lighter, understanding yourself better, reacting differently to situations, or coping more calmly. Progress can be gradual, and we will check in regularly about how you’re feeling, adjusting the focus to achieve the goals we’ve set together for you.',
      },
      {
        question: 'What if I feel dependent on therapy?',
        answer:
          'Therapy is meant to help you become more independent and confident in handling life, not dependent. The goal is to give you tools and insight so you can support yourself better outside sessions.',
      },
      {
        question: 'Does my therapist really understand what I am going through?',
        answer:
          'Your experience is unique, and therapy is a space where it is listened to without judgment. My role is to understand your perspective, support you with empathy, and help you make sense of your thoughts and emotions.',
      },
    ],
  },
  {
    eyebrow: 'Booking, fees & changes',
    heading: 'The practical details',
    items: [
      {
        question: 'How do I book a session?',
        answer:
          'Booking happens on the booking page. You choose the free discovery call, pick a date and time from the calendar, complete the intake and informed consent form, and confirm. You then receive a confirmation email and a calendar invite with your Google Meet link. Paid sessions are arranged after the discovery call, once we have both agreed that continuing makes sense.',
      },
      {
        question: 'What does therapy cost?',
        answer:
          'The discovery call is free. A single session of up to 60 minutes is ₹1,200. A 3-session bundle is ₹3,200 and a 6-session bundle is ₹6,000, which brings the per-session cost down. Current pricing is always shown on the booking page.',
      },
      {
        question: 'When do I pay?',
        answer:
          'Sessions are paid in full in advance, and a session is confirmed once payment has been received. The discovery call requires no payment at all.',
      },
      {
        question: 'What information do you ask for when I book?',
        answer:
          'The booking form covers your name and contact details, an emergency contact, your preferred language and session format, what brings you to counselling and how long it has been going on, whether you are taking any psychiatric medication, and your informed consent. It exists so the session hour can be spent on you rather than on admin, and so I have the safety information any counsellor needs.',
      },
      {
        question: 'What happens if I need to cancel or reschedule?',
        answer:
          'Sessions can be rescheduled if you let me know at least 24 hours in advance. Requests made within 24 hours of the scheduled time may not be eligible for rescheduling. In cases of genuine emergency, such as serious illness or a critical family situation, one reschedule may be offered as a courtesy at my discretion even where prior notice was not possible. Full details are on the terms page.',
      },
      {
        question: 'What happens if I miss a session or arrive late?',
        answer:
          'If you miss a session without prior notice and without an emergency reason, the session is considered completed, since the time was reserved specifically for you. If you are running late, I will wait up to 10 minutes; if you join after that the session is marked as completed. If you arrive late and we do begin, the session still ends at the originally scheduled time.',
      },
      {
        question: 'What if the internet drops during a session?',
        answer:
          'If there are connection or technical difficulties, we will both try to reconnect for up to 10 minutes. If the session cannot go ahead because of persistent connection problems, it is considered completed. Switching from video to audio often solves the problem, and doing so mid-session is perfectly normal.',
      },
    ],
  },
  {
    eyebrow: 'Privacy & safety',
    heading: 'Confidentiality and limits',
    items: [
      {
        question: 'Is online therapy confidential?',
        answer:
          'Yes. Everything you share in therapy is kept confidential and treated with respect. Your information is not shared with anyone without your permission, except in rare situations required by law, such as when there is a serious risk of harm to you or someone else. Session notes are kept securely. The privacy policy sets this out in full.',
      },
      {
        question: 'How do I keep my own side of the session private?',
        answer:
          'This is worth planning in advance, because your environment is not automatically private the way a therapy room is. Choose a room you can close, use headphones, and decide beforehand what you will say if someone asks where you are going. Many people simply say they have a meeting. A car or a quiet outdoor spot works well for people who share a home.',
      },
      {
        question: 'Do you prescribe medication or provide a diagnosis?',
        answer:
          'No. As a counselling psychologist I do not prescribe medication and I do not provide psychiatric diagnosis. If medication or psychiatric assessment would serve you better, I will say so and suggest a referral. Being on psychiatric medication is not a barrier to counselling, and it is something I ask about at intake so that your care can be coordinated.',
      },
      {
        question: 'Is this a crisis or emergency service?',
        answer:
          'No. This practice is not a crisis service and I am not available for urgent support between sessions. If you or someone you know is in immediate danger, please contact Tele-MANAS on 14416 or 1800-891-4416, KIRAN on 1800-599-0019, or emergency services on 112.',
      },
    ],
  },
];

/** Flat list, used for FAQPage structured data. */
export const faqs: FAQItem[] = faqGroups.flatMap((group) => group.items);
