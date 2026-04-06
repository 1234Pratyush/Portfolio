import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Your First Blog Post',
    date: 'Mar 12, 2026',
    excerpt: 'A brief summary of what this blog post is about and why readers should check it out.',
    slug: 'first-blog-post',
  },
  {
    title: 'Your Second Blog Post',
    date: 'Jan 21, 2026',
    excerpt: 'Another interesting topic you want to share with your audience.',
    slug: 'second-blog-post',
  },
]

const Blogs = () => {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Blogs
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                {post.date}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Read more
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Show all blogs
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs
