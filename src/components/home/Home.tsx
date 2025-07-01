import './home.css'
import BlogsContainerHome from './sections/blogs/BlogsContainerHome'
import Description from './sections/description/Description'
import Hero from './sections/hero/Hero'
import LetsTalk from './sections/LetsTalk'
import ProjectsContainer from './sections/projects/ProjectsContainer'
import ReviewsContainer from './sections/reviews/ReviewsContainer'

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Description />
      <ProjectsContainer />
      <ReviewsContainer />
      <BlogsContainerHome />
      <LetsTalk />
    </main>
  )
}

export default Home