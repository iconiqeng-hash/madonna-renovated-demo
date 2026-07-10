import { motion } from 'framer-motion'
import { serviceCategories, genderServices, aboutImages, aboutExtendedImages } from '../../data/content'
import { FadeUp, ScaleIn, Container, Section, SectionHeading } from '../ui/shared'

export function ServiceCards() {
  return (
    <Section id="services" className="bg-white pt-28 lg:pt-36">
      <Container>
        <SectionHeading
          label="Our Services"
          title="Premium Beauty Services"
          subtitle="Expert care for every style and occasion"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 grid-gap">
          {serviceCategories.map((service, i) => (
            <ScaleIn key={service.title} delay={i * 0.15}>
              <motion.a
                href="/#booking"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group block relative card-shell overflow-hidden hover:shadow-elevated transition-shadow duration-500 aspect-[4/5] max-h-[480px]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 card-padding text-center">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/60 mt-2 text-base">{service.subtitle}</p>
                  <div className="mt-4 mx-auto w-12 h-px bg-gold transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.a>
            </ScaleIn>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-gap mt-8 lg:mt-10">
          {genderServices.map((service, i) => (
            <ScaleIn key={service.title} delay={0.2 + i * 0.15}>
              <motion.a
                href="/#booking"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group block relative card-shell overflow-hidden hover:shadow-elevated transition-shadow duration-500 aspect-[16/10] max-h-[360px]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/55 to-dark/10" />
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="card-padding text-center w-full">
                    <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white">{service.title}</h3>
                    <p className="text-white/50 mt-2 text-base lg:text-lg">{service.subtitle}</p>
                    <div className="mt-5 mx-auto w-16 h-px bg-gold transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </motion.a>
            </ScaleIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function AboutSection() {
  return (
    <Section id="about" className="bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.06),transparent_60%)]" />

      <Container className="relative flex flex-col items-center text-center">
        <FadeUp className="w-full max-w-3xl px-2">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">About Us</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
            <span className="text-white block">DELHI&apos;S</span>
            <span className="text-gradient-gold italic font-medium text-3xl md:text-4xl lg:text-5xl block mt-2">
              luxurious & aesthetic Salon
            </span>
          </h2>
          <p className="mt-8 text-white/60 text-base md:text-lg leading-relaxed text-center mx-auto">
            A completely reimagined, modernized and elevated Hair and Beauty Salon launched in 1978. Offering you a tranquil spa experience paired with exclusive treatments and products from the world&apos;s most innovative beauty brands, this is a pampering experience like no other.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-12 lg:mt-16 w-full flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-gap max-w-4xl w-full justify-items-center">
            {aboutImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="card-shell overflow-hidden w-full max-w-[220px]"
              >
                <img src={img} alt="Madonna Salon Interior" className="w-full aspect-[3/4] max-h-[280px] object-cover" />
              </motion.div>
            ))}
            {aboutExtendedImages.map((img, i) => (
              <motion.div
                key={`ext-${i}`}
                whileHover={{ scale: 1.03 }}
                className="card-shell overflow-hidden w-full max-w-[220px]"
              >
                <img src={img} alt="Salon experience" className="w-full aspect-square max-h-[200px] object-cover" />
              </motion.div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.25} className="mt-16 lg:mt-20 w-full max-w-2xl px-2">
          <ul className="space-y-4">
            {[
              '44+ years of expertise in salon business.',
              'Following latest trends & looks.',
            ].map((item) => (
              <li key={item} className="flex items-center justify-center gap-3 text-white/70 text-base md:text-lg">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center px-2 py-2">
            <a href="/#about" className="btn-read-more">
              Read More
            </a>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
