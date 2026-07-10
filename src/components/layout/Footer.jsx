import { FaPhoneAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { locations, contactInfo, footerLinks, recentPosts, socialLinks, logo } from '../../data/content'
import { GoldDivider, Container, Section } from '../ui/shared'

const socialIcons = {
  facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  pinterest: 'M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.949-.2-2.403.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z',
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
}

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <Section className="!pt-20 lg:!pt-24 !pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap">
            <div className="text-center lg:text-left card-padding lg:p-0">
              <div className="flex justify-center lg:justify-start mb-6">
                <img src={logo} alt="Madonna Salon" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-white/50 text-base leading-relaxed">
                We at Madonna are successfully transforming lives making you beautiful literally. Here each treatment will finalize your senses allowing you to submerge in a truly unique experience under the care of our expert stylists.
              </p>
            </div>

            <div className="text-center card-padding lg:p-0">
              <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">Recent Posts</h4>
              <div className="space-y-5">
                {recentPosts.map((post) => (
                  <a key={post.title} href="#" className="flex gap-4 group justify-center lg:justify-start text-left max-w-sm mx-auto lg:mx-0">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 card-shell">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-snug">
                        {post.title}
                      </p>
                      <span className="text-xs text-white/30 mt-1 block">{post.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 grid-gap text-center lg:text-left card-padding lg:p-0">
              <div>
                <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">Useful Links</h4>
                <ul className="space-y-3">
                  {footerLinks.useful.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors duration-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-white/50 hover:text-gold transition-colors duration-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-left card-padding lg:p-0 max-w-sm mx-auto lg:mx-0 w-full">
              <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6 text-center lg:text-left">Contact Us</h4>
              <div className="space-y-4 text-sm text-white/50">
                {locations.map((loc) => (
                  <div key={loc.name}>
                    <span className="text-white/70 font-medium">{loc.name}</span>
                    <p className="mt-1 leading-relaxed">{loc.address}</p>
                  </div>
                ))}
                <div className="pt-2">
                  {contactInfo.phones.slice(0, 2).map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block hover:text-gold transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
                <a href={`mailto:${contactInfo.emails[0]}`} className="block hover:text-gold transition-colors">
                  {contactInfo.emails[0]}
                </a>
              </div>
            </div>
          </div>

          <GoldDivider className="my-12" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-white/30 text-center card-padding lg:p-0">
            <p>Copyright © MADONNA SALON 2026</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.platform}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-white/40 transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d={socialIcons[social.icon]} />
                  </svg>
                </a>
              ))}
            </div>
            <p>Designed with premium care</p>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+919810193809"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-[4%] z-50 w-14 h-14 rounded-full bg-dark border border-gold/30 flex items-center justify-center shadow-luxury hover:bg-gold hover:border-gold group transition-all duration-500"
      aria-label="Call us"
    >
      <FaPhoneAlt className="w-5 h-5 text-gold group-hover:text-dark transition-colors duration-300" />
    </motion.a>
  )
}
