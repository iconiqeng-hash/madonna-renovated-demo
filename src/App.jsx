import Header from './components/layout/Header'
import Footer, { FloatingCallButton } from './components/layout/Footer'
import HeroSlider, { BookingBar } from './components/sections/Hero'
import { ServiceCards, AboutSection } from './components/sections/Services'
import Testimonials, { PromoBanner, BrandPartners } from './components/sections/Testimonials'
import LocationContact, { Gallery } from './components/sections/Contact'

function HomePage() {
  return (
    <>
      <HeroSlider />
      <BookingBar />
      <ServiceCards />
      <AboutSection />
      <Testimonials />
      <PromoBanner />
      <BrandPartners />
      <LocationContact />
      <Gallery />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}
