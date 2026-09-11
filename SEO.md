# SEO plan — ranking for "psychologist in Delhi"

Two halves. The on-site half is built and in the repo. The off-site half is a
checklist that has to be done by hand, in a Google account, by Bhavana.

For the target queries ("best psychologist in Delhi", "psychologist in Delhi",
"female psychologist in Delhi") the on-site work is necessary but not
sufficient. Those queries return a map pack first, then directories, then
individual practice sites. The map pack is won with a Google Business Profile
and reviews, not with HTML.

---

## 1. What is already built

**Keyword → page map.** One page owns each intent; nothing competes with itself.

| Page | Primary query | Supporting queries |
|---|---|---|
| `/` | psychologist in Delhi | counselling psychologist Delhi, online therapy India, Bhavana Bulchandani |
| `/psychologist-in-delhi` | psychologist in Delhi, best psychologist in Delhi | therapist in Delhi, counsellor in Delhi, psychologist near me, therapy cost Delhi |
| `/female-psychologist-in-delhi` | female psychologist in Delhi | lady psychologist Delhi, female therapist Delhi, female counsellor Delhi |
| `/online-therapy-india` | online therapy India | online counselling India, book therapy session online, online psychologist consultation |
| `/how-i-can-help` | therapy for anxiety / burnout / relationships | one anchor per area |
| `/booking` | book therapy session online | free discovery call, therapy appointment online |
| `/blog/how-much-does-therapy-cost-in-delhi` | therapy cost in Delhi | psychologist fees Delhi, counselling charges Delhi |
| `/blog/how-to-choose-a-psychologist-in-delhi` | how to choose a psychologist | best psychologist Delhi (informational slice) |

**Structured data.** One knowledge-graph node per entity, referenced by `@id`
everywhere: `WebSite`, `ProfessionalService` + `Psychologist` (with city-level
`PostalAddress`, `areaServed` across NCR, opening hours, offer catalogue,
prices), and `Person` (with `gender`, credentials, memberships, `workLocation`).
Each location page adds a `Service` node pointing back at the practice, plus its
own `FAQPage` and `BreadcrumbList`.

**Technical.** Canonicals per page, one `<h1>` per page, sitemap with the new
routes, redirect aliases for the common URL variants people type, Delhi
signals in titles, descriptions, footer, about page and the FAQ.

### One thing to confirm

`lib/site.ts` sets `location.locality` to `Delhi`. The Udyam registration is a
UP number, so if Bhavana's actual base city is Noida or Ghaziabad rather than
Delhi proper, change that one value — the schema, the copy and the Google
Business Profile must all agree, and Google cross-checks them.

---

## 2. Google Business Profile — do this first

This is the single largest lever and nothing on the site substitutes for it.
It has to be created by Bhavana, from her own Google account, at
<https://business.google.com>.

1. **Category:** primary `Psychologist`. Secondary: `Counselor`, `Mental health
   service`.
2. **Address:** choose *"I deliver goods and services to my customers"* and hide
   the address. This is a service-area business. Do not publish a residential
   address, and do not invent a clinic address — a failed verification is very
   hard to undo.
3. **Service areas:** Delhi, New Delhi, Noida, Gurugram, Ghaziabad, Faridabad.
4. **Website:** `https://www.sthairyam.co.in/psychologist-in-delhi`
5. **Hours:** Mon–Sun, 9:00 am – 11:00 pm. Must match the site.
6. **Services:** add each one separately with its price — Discovery call (free),
   Single session ₹1,200, 3-session bundle ₹3,200, 6-session bundle ₹6,000.
   Add the therapy areas as services too.
7. **Description:** 750 characters, opening with what she is and where.
8. **Photos:** profile photo, logo, and a few real images. Profiles with photos
   get materially more engagement, and engagement feeds ranking.
9. **Verification:** usually video verification for service-area businesses.
   Have the Udyam certificate and degree certificates to hand.

Then post to the profile roughly weekly — a new article, a note about
availability. Dormant profiles slide.

## 3. Reviews — this is what the word "best" is scored on

For "best psychologist in Delhi", Google has no measure of quality other than
review count, review rating, review recency and review text. A profile with 40
reviews beats one with 3, almost regardless of anything else.

- Ask every client who ends well. The ask has to be personal and specific, not
  a mass email.
- Send the short review link from the GBP dashboard.
- Reply to every review, including any negative one, without ever confirming
  that the reviewer is a client — confidentiality outranks marketing here.
- **Never** buy, incentivise or write reviews. Google detects clustered fake
  reviews and the penalty removes the profile from the pack entirely.
- Do not add `aggregateRating` to the site's schema for self-collected reviews:
  Google ignores self-serving review markup and it risks a manual action.

## 4. Directories and citations

Consistent name, city and URL everywhere. Inconsistent details actively hurt.

Priority order: Practo · Justdial · Lybrate · TherapyRoute · Psychology Today
(if she qualifies for their India listing) · Sulekha · IndiaMART (skip) ·
Counsellors Council of India member directory · APA member directory · any
alumni directory at BHU, Jamia or Amity.

These serve two purposes: they are citations Google reads, and several of them
rank on page one for the target queries themselves — being listed there is a
second route to the same searcher.

## 5. Links

Directories alone will not move a competitive city query. What does:

- **Guest articles** for Indian mental-health publications and wellness sections
  — YourStory, The Better India, Mid-Day wellness, Femina, campus magazines.
- **Expert quotes** for journalists writing about mental health in India.
- **Podcast and YouTube interviews**, which produce a link plus a name that
  people then search for directly. Branded search is itself a ranking signal.
- **University and association pages** — alumni features, member spotlights.
- **Corporate wellness talks** — the host organisation usually links to you.

Avoid paid link packages, guest-post farms and PBNs. In the medical/health
category Google applies stricter quality standards, and a spam link profile is
expensive to clean up.

## 6. Search Console and measurement

1. Verify `https://www.sthairyam.co.in` in Google Search Console.
2. Submit `https://www.sthairyam.co.in/sitemap.xml`.
3. Request indexing manually for the three new pages and the two new articles.
4. Repeat 1–2 in Bing Webmaster Tools.
5. Validate the structured data at <https://search.google.com/test/rich-results>
   for `/`, `/psychologist-in-delhi` and one article.
6. In GA4, mark the booking confirmation as a conversion so ranking work can be
   judged on bookings rather than on traffic.

Check monthly: impressions and average position for the Delhi queries in Search
Console, GBP calls and website clicks, and bookings attributed to organic.

Expect three to six months before movement on "psychologist in Delhi", and
longer for "best psychologist in Delhi", which is largely a review-count race.

## 7. Next content, in priority order

Each of these targets a real query and links back to a location page.

1. Therapy vs counselling in India — what the difference actually is
2. Best time of day for a therapy session when you work late
3. How to tell your family you are seeing a therapist
4. Does insurance cover therapy in India?
5. Anxiety in Delhi: air quality, commute, and the things that are not in your head
6. Signs you need therapy for work stress
7. What to do when therapy does not seem to be working
8. Therapy for students: DU, JNU and the first year away from home

Two per month is enough. Depth beats volume, and thin city pages for every NCR
suburb would be read as doorway pages and demoted.

---

## What not to do

- No invented clinic address, and no in-person claims. The site says plainly
  that this is online-only; keep it that way.
- No "best psychologist in Delhi" as a self-description in copy. It is
  unverifiable, it reads badly, and it is not what makes the phrase rank.
- No thin `/psychologist-in-<suburb>` page farm.
- No review markup for self-collected reviews.
- No keyword stuffing. The current density is already at the useful limit.
