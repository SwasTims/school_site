import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import AboutSec from '../components/AboutSec'
import Achievements from '../components/Achievements'
import Services from '../components/Services'

function Home() {
  return (
    <div>
      <Hero />
      <AboutSec />
      <StatsBar />
      <Achievements/>
      <Services />
    </div>
  )
}

export default Home