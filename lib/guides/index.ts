import { onlineGuides } from './online';
import { practicalGuides } from './practical';
import { choosingGuides } from './choosing';
import { concernGuides } from './concerns';
import { lifeGuides } from './life';
import { delhiGuides } from './delhi';
import type { Guide, GuideCluster } from './types';

export type { Guide, GuideCluster } from './types';
export { guideClusters } from './types';

export const guides: Guide[] = [
  ...onlineGuides,
  ...practicalGuides,
  ...choosingGuides,
  ...concernGuides,
  ...lifeGuides,
  ...delhiGuides,
];

const bySlug = new Map(guides.map((guide) => [guide.slug, guide]));

export const getGuide = (slug: string) => bySlug.get(slug);

/** Guides belonging to one cluster, in authored order. */
export const guidesInCluster = (cluster: GuideCluster) =>
  guides.filter((guide) => guide.cluster === cluster);

/**
 * Related guides for a given guide. Unlike the blog, ordering follows the
 * authored `related` list rather than dates, because these are read by topic.
 */
export const getRelatedGuides = (guide: Guide) =>
  guide.related
    .map((slug) => bySlug.get(slug))
    .filter((item): item is Guide => Boolean(item));
