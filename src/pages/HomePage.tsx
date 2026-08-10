import Benefits from '../components/Benefits/Benefits'
import FinalCallToAction from '../components/FinalCallToAction/FinalCallToAction'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <FinalCallToAction />
    </main>
  )
}

export default HomePage