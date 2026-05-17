import { useState, useEffect } from 'react'

const stats = [
  { value: 9, suffix: 'K+', label: 'Alumni Network' },
  { value: 14, suffix: 'K+', label: 'Current Students' },
  { value: 320, suffix: '', label: 'Faculty Members' },
  { value: 100, suffix: 'K+', label: 'Business Studies' },
]

function StatItem({ value, suffix, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="stats-item">
      <span className="stats-value">{count}{suffix}</span>
      <span className="stats-label">{label}</span>
    </div>
  )
}

function StatsBar() {
  return (
    <section className="stats">
      {stats.map((s) => (
        <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
      ))}
    </section>
  )
}

export default StatsBar