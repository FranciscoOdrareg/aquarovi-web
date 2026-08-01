import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import PageLoader from './components/PageLoader/PageLoader'
import MainLayout from './layouts/MainLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const GymPage = lazy(() => import('./pages/GymPage'))
const PoolPage = lazy(() => import('./pages/PoolPage'))
const PlansPage = lazy(() => import('./pages/PlansPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <MainLayout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gimnasio" element={<GymPage />} />
          <Route path="/piscina" element={<PoolPage />} />
          <Route path="/planes" element={<PlansPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App