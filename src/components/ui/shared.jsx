import { motion } from 'framer-motion'

export function Container({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`site-container ${className}`}>
      {children}
    </Tag>
  )
}

export function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      {children}
    </section>
  )
}

export function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ label, title, subtitle, light = false, center = true, className = '' }) {
  return (
    <FadeUp className={`mb-12 lg:mb-16 px-2 ${className}`}>
      <div className={`flex flex-col ${center ? 'items-center text-center' : 'items-start text-left'}`}>
        {label && (
          <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-4 text-gold">
            {label}
          </span>
        )}
        <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${light ? 'text-white' : 'text-dark'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 md:mt-5 text-base md:text-lg max-w-2xl leading-relaxed ${light ? 'text-white/60' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeUp>
  )
}

export function Button({ children, variant = 'primary', className = '', onClick, type = 'button', href }) {
  const base = 'inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-500 cursor-pointer'
  
  const variants = {
    primary: 'bg-gold text-dark hover:bg-gold-light hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white text-dark hover:bg-gold hover:text-dark hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border border-gold/40 text-gold hover:bg-gold hover:text-dark hover:border-gold hover:scale-[1.02]',
    ghost: 'border border-white/20 text-white hover:bg-white hover:text-dark hover:scale-[1.02]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="w-2 h-2 rotate-45 border border-gold/60" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </div>
  )
}
