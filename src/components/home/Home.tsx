import './home.css'
import Description from './sections/Description'
import Hero from './sections/Hero'

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Description />
    </main>
  )
}

export default Home