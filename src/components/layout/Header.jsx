import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi'
import { navigation, logo } from '../../data/content'
import { Button, Container } from '../ui/shared'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-elevated py-3' : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Madonna Salon"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium tracking-[0.15em] text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                    <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                  </a>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="glass rounded-2xl p-2 min-w-[200px] shadow-elevated">
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block px-5 py-3 text-sm text-white/70 hover:text-gold hover:bg-white/5 rounded-xl transition-all duration-300"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-medium tracking-[0.15em] text-white/80 hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="secondary" href="/#booking" className="!py-3.5 !px-7 !text-xs">
            Book Appointment
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <Container as="nav" className="py-8 flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium tracking-[0.15em] text-white/80 hover:text-gold transition-colors text-center"
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="pb-2">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-white/50 hover:text-gold transition-colors text-center"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex justify-center mt-4">
                <Button variant="secondary" href="/#booking" className="!text-xs">
                  Book Appointment
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
