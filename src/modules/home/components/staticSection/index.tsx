import Container from '@/components/container'
import type { FC } from 'react'

const StaticSection: FC = () => {
  return (
    <section id="static_section" className="py-14 md:py-20 bg-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 md:gap-12">
          <div className="md:text-left text-center">
            <div className="text-white font-semibold text-5xl lg:text-7xl">
              165+
            </div>
            <div className="text-white/90 text-xl lg:text-3xl pt-4">ประเทศ</div>
            <p className="text-white/60 lg:text-lg pt-2">
              ครอบคลุมวิเคราะห์สัญญาณ <br /> ตลาดจากหลายภูมิภาคทั่วโลก
            </p>
          </div>
          <div className="md:text-left text-center">
            <div className="text-white font-semibold text-5xl lg:text-7xl">
              18+
            </div>
            <div className="text-white/90 text-xl lg:text-3xl pt-4">ปี</div>
            <p className="text-white/60 lg:text-lg pt-2">
              ประสบการณ์จริงในการทำ <br /> Go-to-Market ระดับสากล
            </p>
          </div>
          <div className="md:text-left text-center">
            <div className="text-white font-semibold text-5xl lg:text-7xl">
              70,000+
            </div>
            <div className="text-white/90 text-xl lg:text-3xl pt-4">ประเทศ</div>
            <p className="text-white/60 lg:text-lg pt-2">
              เครือข่ายการค้าและซัพพลายเชน <br /> ที่เชื่อมโยงกันจริง
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StaticSection
