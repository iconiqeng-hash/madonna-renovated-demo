import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function toISO(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function parseISO(iso) {
  if (!iso) return null
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function formatDisplay(iso) {
  const date = parseISO(iso)
  if (!date) return ''
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export default function ThemedDatePicker({ value, onChange, placeholder = 'Date', required = false }) {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(() => parseISO(value) || new Date())
  const wrapperRef = useRef(null)
  const today = startOfDay(new Date())

  useEffect(() => {
    if (value) setView(parseISO(value))
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

  const year = view.getFullYear()
  const month = view.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  const selected = parseISO(value)

  const prevMonth = () => setView(new Date(year, month - 1, 1))
  const nextMonth = () => setView(new Date(year, month + 1, 1))

  const selectDay = (day) => {
    const date = new Date(year, month, day)
    if (startOfDay(date) < today) return
    onChange(toISO(year, month, day))
    setOpen(false)
  }

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

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
            className="themed-calendar absolute left-0 right-0 top-[calc(100%+8px)] z-50"
            role="dialog"
            aria-label="Choose date"
          >
            <div className="themed-calendar-header">
              <button type="button" onClick={prevMonth} className="themed-calendar-nav" aria-label="Previous month">
                <HiChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-heading text-lg font-semibold text-gold tracking-wide">
                {MONTHS[month]} {year}
              </span>
              <button type="button" onClick={nextMonth} className="themed-calendar-nav" aria-label="Next month">
                <HiChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="themed-calendar-weekdays">
              {WEEKDAYS.map((day) => (
                <span key={day} className="themed-calendar-weekday">
                  {day}
                </span>
              ))}
            </div>

            <div className="themed-calendar-grid">
              {cells.map((day, i) => {
                if (day === null) {
                  return <span key={`empty-${i}`} className="themed-calendar-day themed-calendar-day-empty" />
                }
                const date = new Date(year, month, day)
                const isPast = startOfDay(date) < today
                const isSelected = selected && isSameDay(date, selected)
                const isToday = isSameDay(date, today)

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isPast}
                    onClick={() => selectDay(day)}
                    className={`themed-calendar-day ${
                      isSelected
                        ? 'themed-calendar-day-selected'
                        : isToday
                          ? 'themed-calendar-day-today'
                          : isPast
                            ? 'themed-calendar-day-disabled'
                            : 'themed-calendar-day-default'
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>

            <div className="themed-calendar-footer">
              <button
                type="button"
                className="themed-calendar-today-btn"
                onClick={() => {
                  onChange(toISO(today.getFullYear(), today.getMonth(), today.getDate()))
                  setView(today)
                  setOpen(false)
                }}
              >
                Today
              </button>
              {value && (
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
