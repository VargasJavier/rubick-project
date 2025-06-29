import './home.css'
import Description from './sections/description/Description'
import Hero from './sections/hero/Hero'
import ProjectsContainer from './sections/projects/ProjectsContainer'
import ReviewsContainer from './sections/reviews/ReviewsContainer'

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Description />
      <ProjectsContainer />
      <ReviewsContainer />
    </main>
  )
}

export default Home