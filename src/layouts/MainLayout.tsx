import type { ReactNode } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import SeoManager from '../components/SeoManager/SeoManager'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SeoManager />
      <ScrollToTop />
      <Header />

      {children}

      <Footer />
    </>
  )
}

export default MainLayout