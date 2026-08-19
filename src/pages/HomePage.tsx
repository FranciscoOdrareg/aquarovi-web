import Benefits from '../components/Benefits/Benefits'
import BrandTransition from '../components/BrandTransition/BrandTransition'
import FinalCallToAction from '../components/FinalCallToAction/FinalCallToAction'
import Hero from '../components/Hero/Hero'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import QuickAccess from '../components/QuickAccess/QuickAccess'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'

function HomePage() {
  return (
    <main>
      <HomeSlider />
      <Hero />
      <QuickAccess />
      <BrandTransition />
      <Services />
      <Benefits />
      <Testimonials />
      <FinalCallToAction />
    </main>
  )
}

export default HomePage