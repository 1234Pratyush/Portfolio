import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
// import GitHubActivity from '../Components/GitHubActivity'
import Skills from '../Components/Skills'
import Contact from './Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <hr className="border-gray-200 dark:border-[var(--color-site-border)]" />
      </div>
      <Projects />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <hr className="border-gray-200 dark:border-[var(--color-site-border)]" />
      </div>
      {/* <GitHubActivity /> */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <hr className="border-gray-200 dark:border-[var(--color-site-border)]" />
      </div>
      <Skills />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <hr className="border-gray-200 dark:border-[var(--color-site-border)]" />
      </div>
      <Contact />
    </>
  )
}

export default Home
