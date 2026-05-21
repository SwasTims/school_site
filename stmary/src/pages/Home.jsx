import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import AboutSec from '../components/AboutSec'
import Achievements from '../components/Achievements'
import Services from '../components/Services'
import Principal from '../components/Principal'
import StudentVoices from '../components/StudentVoices'
import AcademyLife from '../components/AcademyLife'

function Home() {
  return (
    <div>
      <Hero />
      <AboutSec />
      <StatsBar />
      <Achievements/>
      <Services />
      <Principal />
      <StudentVoices />
      <AcademyLife />
    </div>
  )
}

export default Home