import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { heroSlides } from '../../data/content'
import { Container } from '../ui/shared'
import ThemedDatePicker from '../ui/ThemedDatePicker'
import ThemedTimePicker from '../ui/ThemedTimePicker'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/** Heavier, critically-damped spring — cinematic weight, never bounces or snaps. */
const SPRING = { stiffness: 45, damping: 16, mass: 0.7 }
const GLOW_SPRING = { stiffness: 28, damping: 18, mass: 1 }

const EASE = [0.16, 1, 0.3, 1]

/** Tracks cursor position inside a ref'd element via rAF; normalized (-1..1) + raw px. Pauses on hidden tab. */
function usePointer(sectionRef, disabled) {
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el || disabled) return

    let frame = null
    let lastEvent = null

    const apply = () => {
      frame = null
      if (!lastEvent) return
      const rect = el.getBoundingClientRect()
      const offsetX = lastEvent.clientX - rect.left
      const offsetY = lastEvent.clientY - rect.top
      const nx = (offsetX / rect.width) * 2 - 1
      const ny = (offsetY / rect.height) * 2 - 1
      px.set(Math.max(-1, Math.min(1, nx)))
      py.set(Math.max(-1, Math.min(1, ny)))
      rawX.set(offsetX)
      rawY.set(offsetY)
    }

    const handleMove = (e) => {
      lastEvent = e
      if (frame === null) frame = requestAnimationFrame(apply)
    }

    const reset = () => {
      px.set(0)
      py.set(0)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        lastEvent = null
        if (frame !== null) cancelAnimationFrame(frame)
        frame = null
      }
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', reset)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', reset)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [sectionRef, disabled, px, py, rawX, rawY])

  return { px, py, rawX, rawY }
}

/** Maps shared pointer values to a bounded, eased x/y translation for one parallax layer. */
function useParallaxLayer(px, py, strengthX, strengthY = strengthX) {
  const tx = useTransform(px, [-1, 1], [-strengthX, strengthX])
  const ty = useTransform(py, [-1, 1], [-strengthY, strengthY])
  return {
    x: useSpring(tx, SPRING),
    y: useSpring(ty, SPRING),
  }
}

export default function HeroSlider() {
  const sectionRef = useRef(null)
  const [tabHidden, setTabHidden] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const handleVisibility = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  const { px, py, rawX, rawY } = usePointer(sectionRef, reduceMotion)

  const bg = useParallaxLayer(px, py, reduceMotion ? 0 : 5)
  const smoke = useParallaxLayer(px, py, reduceMotion ? 0 : 10)
  const heroImg = useParallaxLayer(px, py, reduceMotion ? 0 : 20, reduceMotion ? 0 : 15)
  const headline = useParallaxLayer(px, py, reduceMotion ? 0 : 6)
  const cta = useParallaxLayer(px, py, reduceMotion ? 0 : 4)
  const glowX = useSpring(rawX, GLOW_SPRING)
  const glowY = useSpring(rawY, GLOW_SPRING)

  const words = heroSlides[0].title.split(' ')

  return (
    <section
      ref={sectionRef}
      data-paused={tabHidden}
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-dark"
    >
      {/* Layer 1 — background wash, 5px */}
      <motion.div style={{ x: bg.x, y: bg.y }} className="absolute inset-[-4%] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-black to-dark" />
      </motion.div>

      {/* Layer 3 — hero image slider, 20px / 15px, slow Ken Burns zoom */}
      <motion.div style={{ x: heroImg.x, y: heroImg.y }} className="absolute inset-[-3%] z-10">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          speed={1200}
          pagination={{ clickable: true }}
          navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }}
          className="h-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full overflow-hidden">
                <img
                  src={slide.image}
                  alt="Madonna Salon"
                  className="hero-slide-image absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Readability gradients — static, above image */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-dark via-dark/70 to-dark/30 pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-dark via-transparent to-dark/40 pointer-events-none" />

      {/* Layer 2 — drifting smoke, 10px */}
      <motion.div
        style={{ x: smoke.x, y: smoke.y }}
        className="absolute inset-0 z-30 overflow-hidden pointer-events-none"
      >
        <span className="hero-smoke hero-smoke-1" />
        <span className="hero-smoke hero-smoke-2" />
        <span className="hero-smoke hero-smoke-3" />
      </motion.div>

      {/* Studio spotlight — near-static, extremely slow drift */}
      <div className="absolute inset-0 z-30 pointer-events-none hero-spotlight" />

      {/* Soft light halo trailing the cursor — desktop only, adds cinematic depth */}
      {!reduceMotion && (
        <motion.div
          style={{ left: glowX, top: glowY }}
          className="hero-cursor-glow hidden lg:block"
        />
      )}

      {/* Content */}
      <Container className="relative z-40 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div style={{ x: headline.x, y: headline.y }} className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-block text-xs font-semibold tracking-[0.35em] uppercase text-gold mb-5"
          >
            Madonna Salon
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
            }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
                }}
                className="inline-block mr-[0.28em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
            className="mt-5 text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            {heroSlides[0].subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          style={{ x: cta.x, y: cta.y }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          className="mt-9"
        >
          <a href="#booking" className="hero-cta">
            Book Appointment
          </a>
        </motion.div>
      </Container>

      <Container className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between z-40">
        <button className="hero-nav-btn hero-prev pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 backdrop-blur-sm">
          <HiChevronLeft className="w-5 h-5" />
        </button>
        <button className="hero-nav-btn hero-next pointer-events-auto w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 backdrop-blur-sm">
          <HiChevronRight className="w-5 h-5" />
        </button>
      </Container>
    </section>
  )
}

export function BookingBar() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '' })

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
    setForm({ ...form, phone: digits })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^\d{10}$/.test(form.phone)) {
      alert('Please enter a valid 10-digit phone number.')
      return
    }
    if (!form.date) {
      alert('Please select a date for your appointment.')
      return
    }
    if (!form.time) {
      alert('Please select a time for your appointment.')
      return
    }
    alert('Thank you! We will confirm your appointment shortly.')
    setForm({ name: '', phone: '', date: '', time: '' })
  }

  return (
    <div id="booking" className="relative z-30 -mt-16 lg:-mt-20 pb-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="glass card-shell card-padding shadow-elevated hero-booking-card"
        >
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 lg:gap-8">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white text-center">
              Book Appointment
            </h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-gap">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="booking-input"
              />
              <div className="relative">
                <span className="absolute left-5 lg:left-6 top-1/2 -translate-y-1/2 text-base pointer-events-none">🇮🇳</span>
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  inputMode="numeric"
                  pattern="\d{10}"
                  maxLength={10}
                  value={form.phone}
                  onChange={handlePhoneChange}
                  className="booking-input booking-input-phone"
                />
              </div>
              <ThemedDatePicker
                value={form.date}
                onChange={(date) => setForm({ ...form, date })}
                placeholder="Date"
                required
              />
              <ThemedTimePicker
                value={form.time}
                onChange={(time) => setForm({ ...form, time })}
                placeholder="Time"
              />
            </div>
            <button
              type="submit"
              className="min-h-[48px] lg:min-h-[52px] px-10 py-3 lg:px-12 lg:py-3.5 bg-white text-dark font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-gold hover:shadow-luxury transition-all duration-500"
            >
              Book
            </button>
          </form>
        </motion.div>
      </Container>
    </div>
  )
}
