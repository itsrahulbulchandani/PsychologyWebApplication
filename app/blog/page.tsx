type WordPressPost = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  date: string;
};

const sanitizeHtml = (html: string) =>
  html.replace(/&nbsp;|&#160;/g, ' ').trim();

async function getPosts(): Promise<WordPressPost[]> {
  const response = await fetch(
    'https://public-api.wordpress.com/wp/v2/sites/psychfuel.home.blog/posts?per_page=9',
    { next: { revalidate: 300 } }
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          <span className="text-teal-700">Blog</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thoughts, insights, and resources on mental health and well-being.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {posts.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center text-gray-600">
            Unable to load posts right now. Please check back soon.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm text-teal-700 mb-2">
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {sanitizeHtml(post.title.rendered)}
                </h2>
                <div
                  className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.excerpt.rendered) }}
                />
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-700 font-semibold inline-flex items-center gap-2"
                >
                  Read on PsychFuel
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
