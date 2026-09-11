/**
 * Guides are search-facing explainers, kept separate from the blog.
 *
 * The blog is Bhavana's own writing, published when she has something to say.
 * Guides answer specific questions people type into a search engine before they
 * are ready to contact anyone. They share the article data shape and renderer,
 * but live at /guides and never appear in the blog index.
 */

import type { Article } from '@/lib/articles';

export type GuideCluster = 'online' | 'practical' | 'choosing' | 'concerns' | 'life' | 'delhi';

export type Guide = Article & { cluster: GuideCluster };

export const guideClusters: { id: GuideCluster; title: string; blurb: string }[] = [
  {
    id: 'online',
    title: 'Online therapy in India',
    blurb: 'How video sessions work, whether they are as effective, and what privacy really means.',
  },
  {
    id: 'practical',
    title: 'Cost, booking and logistics',
    blurb: 'What therapy costs, how many sessions you need, and what happens if it is not working.',
  },
  {
    id: 'choosing',
    title: 'Choosing the right professional',
    blurb: 'Qualifications, titles, registration, and how to tell whether someone is a good fit.',
  },
  {
    id: 'concerns',
    title: 'What people bring to therapy',
    blurb: 'The difficulties people most often arrive with, and what the work on each looks like.',
  },
  {
    id: 'delhi',
    title: 'Therapy in Delhi NCR',
    blurb: 'What therapy costs locally and how to tell practitioners apart.',
  },
  {
    id: 'life',
    title: 'Life stages and transitions',
    blurb: 'Periods of change that reliably put pressure on people, and where support helps.',
  },
];

export const GUIDE_PUBLISHED = '2026-09-11';
