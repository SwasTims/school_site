import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import AboutSec from '../components/AboutSec'
import Achievements from '../components/Achievements'

function Home() {
  return (
    <div>
      <Hero />
      <AboutSec />
      <StatsBar />
      <Achievements/>
    </div>
  )
}

export default Home