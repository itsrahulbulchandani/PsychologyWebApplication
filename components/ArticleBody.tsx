import Link from 'next/link';
import type { Block } from '@/lib/articles';

/**
 * Renders article blocks with the site's existing type styles.
 * Supports two inline markers inside text: [label](/path) and **bold**.
 */
function inline(text: string, keyPrefix: string) {
  const parts: React.ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const href = match[2];
      parts.push(
        href.startsWith('/') ? (
          <Link
            key={`${keyPrefix}-l${index}`}
            href={href}
            className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
          >
            {match[1]}
          </Link>
        ) : (
          <a
            key={`${keyPrefix}-l${index}`}
            href={href}
            className="text-pine underline underline-offset-4 decoration-pine/30 hover:decoration-pine"
            target="_blank"
            rel="noreferrer"
          >
            {match[1]}
          </a>
        )
      );
    } else if (match[3]) {
      parts.push(
        <strong key={`${keyPrefix}-b${index}`} className="text-ink font-semibold">
          {match[3]}
        </strong>
      );
    }

    lastIndex = pattern.lastIndex;
    index += 1;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-2xl">
      {blocks.map((block, i) => {
        const key = `b${i}`;

        switch (block.type) {
          case 'h2':
            return (
              <h2 key={key} className="font-display text-2xl sm:text-3xl text-ink mt-14 mb-5 leading-snug">
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={key} className="font-display text-xl text-ink mt-10 mb-4">
                {block.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={key} className="space-y-3 my-6">
                {block.items.map((item, j) => (
                  <li key={j} className="text-ink-soft leading-relaxed flex gap-3">
                    <span className="text-pine/50 shrink-0 mt-px">—</span>
                    <span>{inline(item, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key} className="space-y-4 my-6">
                {block.items.map((item, j) => (
                  <li key={j} className="text-ink-soft leading-relaxed flex gap-4">
                    <span className="font-display text-sm text-clay shrink-0 pt-1 w-6">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span>{inline(item, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ol>
            );
          case 'note':
            return (
              <aside
                key={key}
                className="bg-sage-pale border border-ink/10 rounded-2xl px-6 py-6 my-10 text-ink-soft text-[15px] leading-relaxed"
              >
                {inline(block.text, key)}
              </aside>
            );
          default:
            return (
              <p key={key} className="text-ink-soft leading-relaxed my-5">
                {inline(block.text, key)}
              </p>
            );
        }
      })}
    </div>
  );
}
