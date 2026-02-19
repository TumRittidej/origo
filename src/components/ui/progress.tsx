import * as React from 'react'
import { Progress as ProgressPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'
import { useInView } from 'react-intersection-observer'

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  })
  return (
    <div ref={ref}>
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          'bg-white/10 relative h-2 w-full overflow-hidden rounded-full',
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full w-full flex-1 transition-all bg-linear-to-r from-white/80 to-secondary-color rounded-full duration-1000"
          style={{
            transform: `translateX(-${inView ? 100 - (value || 0) : 100}%)`
          }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
}

export { Progress }
