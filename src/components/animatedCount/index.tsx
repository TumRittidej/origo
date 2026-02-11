import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import type { FC } from 'react'

interface AnimatedCounterProps {
  end: number
  label?: string
  duration?: number
  suffix?: string
  className?: string
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({
  end,
  label,
  duration = 1,
  suffix = '',
  className
}: AnimatedCounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  })

  return (
    <div ref={ref}>
      <div className={`${className}`}>
        {inView ? <CountUp end={end} duration={duration} suffix={suffix} /> : 0}
      </div>
      {label && <p className="mt-1 text-sm text-white/70">{label}</p>}
    </div>
  )
}

export default AnimatedCounter
