import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PERIODS = [
  { key: 'morning', label: 'Morning', start: 10, end: 12 },
  { key: 'afternoon', label: 'Afternoon', start: 12, end: 17 },
  { key: 'evening', label: 'Evening', start: 17, end: 21 },
]

function generateTimeSlots() {
  const slots = []
  for (let h = 10; h <= 21; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    if (h < 21) slots.push(`${String(h).padStart(2, '0')}:30`)
  }
  return slots
}

const ALL_SLOTS = generateTimeSlots()

function formatDisplay(time24) {
  if (!time24) return ''
  const [h, m] = time24.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour12 = h % 12 || 12
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`
}

function getPeriodForSlot(time24) {
  const h = parseInt(time24.split(':')[0], 10)
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
}

export default function ThemedTimePicker({ value, onChange, placeholder = 'Time' }) {
  const [open, setOpen] = useState(false)
  const [period, setPeriod] = useState(() => (value ? getPeriodForSlot(value) : 'morning'))
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (value) setPeriod(getPeriodForSlot(value))
  }, [value])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredSlots = useMemo(() => {
    return ALL_SLOTS.filter((slot) => {
      const [h, m] = slot.split(':').map(Number)
      if (period === 'morning') return h >= 10 && h < 12
      if (period === 'afternoon') return h >= 12 && h < 17
      return (h >= 17 && h < 21) || (h === 21 && m === 0)
    })
  }, [period])

  const selectTime = (slot) => {
    onChange(slot)
    setOpen(false)
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        value={value ? formatDisplay(value) : ''}
        onClick={() => setOpen(!open)}
        onFocus={() => setOpen(true)}
        className="booking-input cursor-pointer"
        aria-expanded={open}
        aria-haspopup="dialog"
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="themed-time-picker absolute left-0 right-0 top-[calc(100%+8px)] z-50"
            role="dialog"
            aria-label="Choose time"
          >
            <div className="themed-time-picker-header">
              <span className="font-heading text-lg font-semibold text-gold tracking-wide">
                Select Time
              </span>
              <span className="text-xs text-white/40 tracking-wide uppercase">
                10:00 AM – 09:00 PM
              </span>
            </div>

            <div className="themed-time-periods">
              {PERIODS.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPeriod(p.key)}
                  className={`themed-time-period ${period === p.key ? 'themed-time-period-active' : ''}`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="themed-time-slots">
              {filteredSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => selectTime(slot)}
                  className={`themed-time-slot ${value === slot ? 'themed-time-slot-selected' : ''}`}
                >
                  {formatDisplay(slot)}
                </button>
              ))}
            </div>

            {value && (
              <div className="themed-calendar-footer">
                <button
                  type="button"
                  className="themed-calendar-clear-btn"
                  onClick={() => {
                    onChange('')
                    setOpen(false)
                  }}
                >
                  Clear
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
