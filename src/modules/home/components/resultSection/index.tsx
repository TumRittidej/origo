import Container from '@/components/container'
import type { FC } from 'react'

import { TbArrowBigDownFilled, TbArrowBigUpFilled } from 'react-icons/tb'

const ResultSection: FC = () => {
  return (
    <section id="result_section" className="py-14 md:py-20">
      <Container>
        <div className="px-6">
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

          <div className="mt-12 rounded-3xl bg-primary px-8 py-8 sm:px-12 sm:py-10 ">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 mb-8 p-2 sm:px-8 sm:py-8 hidden md:block">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,191,90,0.18),transparent_60%)]" />
              <div className="relative">
                <svg
                  viewBox="0 0 720 240"
                  className="h-60 w-full"
                  role="img"
                  aria-label="ยอดขายเติบโต 4 เดือน"
                >
                  <defs>
                    <linearGradient id="lineGlow" x1="0" x2="1" y1="0" y2="0">
                      <stop
                        offset="0%"
                        stopColor="#FFB347"
                        stopOpacity="0.85"
                      />
                      <stop offset="100%" stopColor="#FFBF5A" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  <g stroke="rgba(255,255,255,0.14)" strokeWidth="1">
                    <line x1="40" y1="20" x2="700" y2="20" />
                    <line x1="40" y1="70" x2="700" y2="70" />
                    <line x1="40" y1="120" x2="700" y2="120" />
                    <line x1="40" y1="170" x2="700" y2="170" />
                    <line x1="40" y1="220" x2="700" y2="220" />
                  </g>

                  <path
                    d="M80 210 L280 145 L470 115 L650 60"
                    fill="none"
                    stroke="url(#lineGlow)"
                    strokeWidth="3.5"
                  />

                  <g fill="#FFBF5A">
                    <circle cx="80" cy="210" r="4.5" />
                    <circle cx="280" cy="145" r="4.5" />
                    <circle cx="470" cy="115" r="4.5" />
                    <circle cx="650" cy="60" r="4.5" />
                  </g>

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

                <div className="pointer-events-none absolute right-6 top-14 text-right sm:right-10">
                  <p className="text-xl text-white/60 sm:text-2xl">
                    ยอดขายรวมมากกว่า
                  </p>
                  <div className="-mt-4 text-[3rem] font-semibold text-secondary-color sm:text-[3.6rem]">
                    4,000+
                  </div>
                  <p className="-mt-4 text-3xl text-white/95 sm:text-4xl">
                    ล้านบาท
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-6 md:mt-8">
              <div className="card-lift rounded-2xl border border-white/20 px-4 py-6 md:px-8 md:py-10 text-center hover:transform hover:-translate-y-2 duration-500 hover:shadow-[0_0_10px] hover:shadow-secondary-color group">
                <p className="text-lg text-white/80 sm:text-2xl md:text-4xl">
                  ฐานลูกค้าเติบโต
                </p>
                <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-center md:gap-6">
                  <span className="text-[3.3rem] md:text-[3.96rem] font-semibold text-white">
                    250%
                  </span>
                  <div>
                    <TbArrowBigUpFilled className="text-7xl text-lime-600" />
                  </div>
                </div>
              </div>

              <div className="card-lift rounded-2xl border border-white/20 px-4 py-6 md:px-8 md:py-10 text-center  hover:transform hover:-translate-y-2 duration-500 hover:shadow-[0_0_10px] hover:shadow-secondary-color">
                <p className="text-lg text-white/80 sm:text-2xl md:text-4xl">
                  ต้นทุนหาลูกค้าลดลง
                </p>
                <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-center md:gap-6">
                  <span className="text-[3.3rem] md:text-[3.96rem] font-semibold text-white">
                    85%
                  </span>
                  <div>
                    <TbArrowBigDownFilled className="text-7xl text-orange-800" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-white/40">
              กรณีศึกษาจากข้อมูลจริงของลูกค้า โดยไม่เปิดเผยชื่อและข้อมูลลูกค้า
              ตามข้อกำหนดด้านความลับทางธุรกิจ
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ResultSection
