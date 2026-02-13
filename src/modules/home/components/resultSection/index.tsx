import Container from '@/components/container'
import { useEffect, useRef, useState, type FC } from 'react'

import { TbArrowBigDownFilled, TbArrowBigUpFilled } from 'react-icons/tb'
import AnimatedCounter from '@/components/animatedCount'

type ResultSectionPropsType = {
  id: string
}

const ResultSection: FC<ResultSectionPropsType> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="font-heading text-3xl leading-tight text-white md:text-5xl">
            <span className="relative inline-block font-semibold underline underline-offset-8">
              ผลลัพธ์
            </span>
            จากลูกค้า ปี 2025
          </h2>

          <p className="mt-4 text-2xl text-white/90 md:text-5xl">
            เติบโตแบบก้าวกระโดดใน{' '}
            <span className="text-4xl font-semibold text-white md:text-7xl">
              4
            </span>{' '}
            เดือน
          </p>

          <p className="mt-4 text-sm text-white/60 sm:text-base">
            เราช่วยลูกค้าลดความเสี่ยงจากการทดลองตลาดที่สิ้นเปลือง
            และเร่งการเติบโตที่ชัดเจนตั้งแต่วันแรก
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-primary p-4 md:px-12 md:py-10 ">
          <div
            ref={ref}
            className="relative overflow-hidden rounded-2xl border border-white/20 mb-4 p-2 sm:px-8 :py-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,191,90,0.18),transparent_60%)]" />
            <div className="relative">
              <svg
                viewBox="0 0 720 240"
                className="w-full"
                role="img"
                aria-label="ยอดขายเติบโต 4 เดือน"
              >
                <defs>
                  <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#FFB347" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#FFBF5A" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Grid */}
                <g stroke="rgba(255,255,255,0.14)" strokeWidth="1">
                  <line x1="40" y1="20" x2="700" y2="20" />
                  <line x1="40" y1="70" x2="700" y2="70" />
                  <line x1="40" y1="120" x2="700" y2="120" />
                  <line x1="40" y1="170" x2="700" y2="170" />
                  <line x1="40" y1="220" x2="700" y2="220" />
                </g>

                {/* Animated line */}
                <path
                  d="M80 210 L280 145 L470 115 L650 60"
                  fill="none"
                  stroke="url(#lineGlow)"
                  strokeWidth="3.5"
                  className={`graph-line ${visible ? 'draw' : ''}`}
                />

                {/* Labels */}
                <g fill="rgba(255,255,255,0.6)" fontSize="12">
                  <text x="70" y="234">
                    Month 1
                  </text>
                  <text x="260" y="234">
                    Month 2
                  </text>
                  <text x="445" y="234">
                    Month 3
                  </text>
                  <text x="620" y="234">
                    Month 4
                  </text>
                </g>
              </svg>

              <div className="pointer-events-none absolute top-0 md:top-5 left-5 sm:left-10 lg:left-30">
                <p className="text-white/60 text-xs sm:text-base md:text-xl lg:text-2xl">
                  ยอดขายรวมมากกว่า
                </p>
                <AnimatedCounter
                  end={4000}
                  suffix="+"
                  className="font-semibold text-secondary-color text-lg md:text-4xl lg:text-6xl"
                />
                <p className="text-white/95 text-base md:text-2xl lg:text-4xl">
                  ล้านบาท
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-6 md:mt-8">
            <div className="card-lift rounded-2xl border border-white/20 p-4 md:px-8 md:py-10 text-center hover:transform hover:-translate-y-2 duration-500 hover:shadow-[0_0_10px] hover:shadow-secondary-color group">
              <p className="text-lg text-white/80 sm:text-2xl md:text-3xl lg:text-4xl">
                ฐานลูกค้าเติบโต
              </p>
              <div className="mt-4 md:mt-6 flex items-center justify-center md:gap-6">
                <AnimatedCounter
                  end={250}
                  suffix="%"
                  className="text-white font-semibold text-3xl md:text-5xl lg:text-7xl"
                />
                <div>
                  <TbArrowBigUpFilled className="text-4xl md:text-7xl text-lime-600" />
                </div>
              </div>
            </div>

            <div className="card-lift rounded-2xl border border-white/20 p-4 md:px-8 md:py-10 text-center  hover:transform hover:-translate-y-2 duration-500 hover:shadow-[0_0_10px] hover:shadow-secondary-color">
              <p className="text-lg text-white/80 sm:text-2xl md:text-3xl lg:text-4xl">
                ต้นทุนหาลูกค้าลดลง
              </p>
              <div className="mt-4 md:mt-6 flex items-center justify-center md:gap-6">
                <AnimatedCounter
                  end={85}
                  suffix="%"
                  className="text-white font-semibold text-3xl md:text-5xl lg:text-7xl"
                />
                <div>
                  <TbArrowBigDownFilled className="text-4xl md:text-7xl text-orange-800" />
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/40">
            กรณีศึกษาจากข้อมูลจริงของลูกค้า โดยไม่เปิดเผยชื่อและข้อมูลลูกค้า
            ตามข้อกำหนดด้านความลับทางธุรกิจ
          </p>
        </div>
      </Container>
    </section>
  )
}

export default ResultSection
