import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { testimonials, brandPartners, promoBackground } from '../../data/content'
import { FadeUp, SectionHeading, Container, Section } from '../ui/shared'
import 'swiper/css'
import 'swiper/css/navigation'

function StarRating({ count = 5, center = false }) {
  return (
    <div className={`flex gap-1 ${center ? 'justify-center' : ''}`}>
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="w-4 h-4 text-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="TESTIMONIALS"
          subtitle="What our clients says about us?"
        />

        <FadeUp className="text-center mb-12 lg:mb-16 px-2">
          <p className="text-2xl font-bold text-dark tracking-wide">EXCELLENT</p>
          <StarRating center />
          <p className="text-gray-500 mt-3 text-base">Based on 217 reviews</p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-sm font-medium text-gray-600">Google Reviews</span>
          </div>
        </FadeUp>

        <div className="relative px-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.test-prev',
              nextEl: '.test-next',
            }}
            className="!pb-4"
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-100 card-shell card-padding hover:shadow-luxury transition-all duration-500 h-full flex flex-col text-center"
                >
                  <div className="flex flex-col items-center mb-5">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-semibold text-sm mb-3">
                      {review.initial}
                    </div>
                    <p className="font-semibold text-dark text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{review.time}</p>
                  </div>
                  <StarRating count={review.rating} center />
                  <p className="mt-4 text-gray-600 text-base leading-relaxed flex-1">
                    {review.text}
                  </p>
                  <button className="mt-5 text-sm text-gold hover:text-gold-soft transition-colors">
                    Read more
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="test-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/40 transition-all duration-300 shadow-card">
            <HiChevronLeft className="w-5 h-5" />
          </button>
          <button className="test-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/40 transition-all duration-300 shadow-card">
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </Section>
  )
}

export function PromoBanner() {
  return (
    <Section className="relative overflow-hidden !py-24 lg:!py-32">
      <img
        src={promoBackground}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-dark/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

      <Container className="relative z-10 flex flex-col items-center text-center px-2">
        <FadeUp className="flex flex-col items-center w-full max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide text-center">
            EXCEPTIONAL SERVICE
          </h2>
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-gold mt-3 italic text-center">
            AT EXCEPTIONAL PRICE
          </p>
          <p className="mt-5 md:mt-6 text-white/60 text-base md:text-lg max-w-xl leading-relaxed text-center">
            Book now & get instant 20% off on your selected services.
          </p>
          <div className="mt-10 flex justify-center px-4 py-2">
            <a
              href="/#booking"
              className="inline-flex items-center px-10 py-4 bg-gold text-dark font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-gold-light hover:shadow-luxury hover:scale-[1.02] transition-all duration-500"
            >
              Book Now
            </a>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}

export function BrandPartners() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading title="Brand Partners" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 grid-gap items-center justify-items-center">
          {brandPartners.map((brand, i) => (
            <FadeUp key={brand.name} delay={i * 0.08} className="w-full flex justify-center">
              <div className="flex items-center justify-center w-full min-h-[80px] md:min-h-[100px] px-4 py-6 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24 w-full max-w-[160px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden text-sm font-semibold text-gray-400 tracking-wider uppercase text-center">
                  {brand.name}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
