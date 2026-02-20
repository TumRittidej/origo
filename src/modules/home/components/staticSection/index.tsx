import AnimatedCounter from '@/components/animatedCount'
import Container from '@/components/container'
import type { FC } from 'react'

type StaticSectionPropsType = {
  id: string
}

const StaticSection: FC<StaticSectionPropsType> = ({ id }) => {
  return (
    <section id={id} className="py-14 md:py-20 bg-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 md:gap-12">
          <div className="md:text-left text-center">
            <AnimatedCounter
              end={165}
              suffix="+"
              className="text-white font-semibold text-5xl lg:text-7xl"
            />
            <div className="text-white/90 text-2xl lg:text-4xl pt-4">
              ประเทศ
            </div>
            <p className="text-white/60 text-xl pt-2">
              ครอบคลุมวิเคราะห์สัญญาณตลาด จากหลายภูมิภาคทั่วโลก
            </p>
          </div>
          <div className="md:text-left text-center">
            <AnimatedCounter
              end={18}
              suffix="+"
              className="text-white font-semibold text-5xl lg:text-7xl"
            />
            <div className="text-white/90 text-2xl lg:text-4xl pt-4">ปี</div>
            <p className="text-white/60 text-xl pt-2">
              ประสบการณ์จริงในการทำ Go-to-Market ระดับสากล
            </p>
          </div>
          <div className="md:text-left text-center">
            <AnimatedCounter
              end={70000}
              suffix="+"
              className="text-white font-semibold text-5xl lg:text-7xl"
            />
            <div className="text-white/90 text-2xl lg:text-4xl pt-4">
              ประเทศ
            </div>
            <p className="text-white/60 text-xl pt-2">
              เครือข่ายการค้าและซัพพลายเชน ที่เชื่อมโยงกันจริง
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StaticSection
