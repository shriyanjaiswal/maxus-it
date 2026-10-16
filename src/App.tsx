import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { ServiceDetail } from './pages/ServiceDetail'
import { Solutions } from './pages/Solutions'
import { Portfolio } from './pages/Portfolio'
import { CaseStudy } from './pages/CaseStudy'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
