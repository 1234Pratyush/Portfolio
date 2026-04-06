const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Next.js', icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: 'Tailwind CSS', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Bootstrap', icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
      { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'Express', icon: `${DEVICON}/express/express-original.svg`, invert: true },
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: 'Redis', icon: `${DEVICON}/redis/redis-original.svg` },
      { name: 'Prisma', icon: `${DEVICON}/prisma/prisma-original.svg`, invert: true },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    skills: [
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
      { name: 'GitHub', icon: `${DEVICON}/github/github-original.svg`, invert: true },
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
      { name: 'VS Code', icon: `${DEVICON}/vscode/vscode-original.svg` },
      { name: 'Vercel', icon: `${DEVICON}/vercel/vercel-original.svg`, invert: true },
      { name: 'Figma', icon: `${DEVICON}/figma/figma-original.svg` },
      { name: 'Notion', icon: `${DEVICON}/notion/notion-original.svg`, invert: true },
      { name: 'npm', icon: `${DEVICON}/npm/npm-original-wordmark.svg` },
    ],
  },
]

const Skills = () => {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Skills & Tools
        </h2>

        <div className="mt-10 space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-[var(--color-site-border)] dark:bg-[var(--color-site-card)]"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`h-8 w-8 ${skill.invert ? 'dark:invert' : ''}`}
                      loading="lazy"
                    />
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-gray-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
