import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'LA BIM Solutions',
    description: 'A professional website for a BIM & VDC services company delivering innovative digital construction solutions for architects, engineers, and contractors worldwide.',
    tags: ['React', 'Tailwind CSS', 'Web3Forms'],
    status: 'Completed',
    color: 'from-sky-500 to-blue-700',
    image: 'https://image.thum.io/get/width/800/https://labimsolutions.com/',
    link: 'https://labimsolutions.com/',
    github: 'https://github.com/yourusername/labimsolutions',
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project and what it does.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    status: 'Completed',
    color: 'from-emerald-500 to-teal-600',
    image: null,
    link: '#',
    github: '#',
  },

]

const ExternalLinkIcon = () => (
  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
  </svg>
)

const GitHubIcon = () => (
  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const Projects = () => {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl dark:border-[var(--color-site-border)] dark:bg-[var(--color-site-card)]"
            >
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.color}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-5xl font-bold text-white/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:hover:text-white"
                        aria-label={`${project.title} GitHub`}
                      >
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Tech-stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Show all projects
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
