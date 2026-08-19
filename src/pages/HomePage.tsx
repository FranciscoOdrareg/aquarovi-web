import Benefits from '../components/Benefits/Benefits'
import BrandTransition from '../components/BrandTransition/BrandTransition'
import FinalCallToAction from '../components/FinalCallToAction/FinalCallToAction'
import Hero from '../components/Hero/Hero'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import Partnerships from '../components/Partnerships/Partnerships'
import QuickAccess from '../components/QuickAccess/QuickAccess'
import SEO from '../components/SEO/SEO'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'

function HomePage() {
  return (
    <>
      <SEO
        title="Centro Deportivo Aquarovi | Gimnasio y piscina en San Ramón"
        description="Gimnasio y piscina climatizada en San Ramón de Alajuela. Conoce nuestros planes, clases de natación, Aquafitness, Aquaterapia y opciones combinadas."
        canonical="https://aquarovi-web.vercel.app/"
      />

      <main>
        <HomeSlider />
        <Hero />
        <QuickAccess />
        <BrandTransition />
        <Services />
        <Benefits />
        <Partnerships />
        <Testimonials />
        <FinalCallToAction />
      </main>
    </>
  )
}

export default HomePage