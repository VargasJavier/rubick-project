import './home.css'
import Description from './sections/Description'
import Hero from './sections/Hero'
import ProjectsContainer from './sections/projects/ProjectsContainer'

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Description />
      <ProjectsContainer />
    </main>
  )
}

export default Home