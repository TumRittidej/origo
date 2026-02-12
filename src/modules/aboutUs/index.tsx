import Container from '@/components/container'
import AboutUsImage from '@/assets/about_us.jpg'
import type { FC } from 'react'
import Divider from '@/components/divider'
import { Button } from '@/components/ui/button'
import { route } from '@/constants/routing'
import { useNavigate } from 'react-router-dom'
import AnimatedCounter from '@/components/animatedCount'

const AboutUsPage: FC = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-background text-white min-h-screen">
      <div className="relative h-65 md:h-105 w-full overflow-hidden bg-background">
        <img
          src={AboutUsImage}
          alt="Origo Office"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-background/70" />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background" />

        <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl font-semibold text-white/80 md:leading-20">
            WHO <br /> WE <span className="text-secondary-color">ARE</span>
          </h1>
        </div>
      </div>

      <Container>
        <div className="space-y-2 mt-12 my-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            จุดเริ่มต้นของ ORIGO
          </h2>
        </div>

        <div className="pt-4 md:text-xl space-y-4 text-white/80 leading-relaxed">
          <p>
            ทีมผู้บริหารของเรามีประสบการณ์มากกว่า 18 ปี
            ในธุรกิจส่งออกและการค้าระหว่างประเทศ เราเชี่ยวชาญในการจับคู่ผู้ผลิต
            ผู้ส่งออก และผู้ซื้อรายใหญ่ในระดับ Global Supply Chain
            จากหลากหลายอุตสาหกรรม
          </p>

          <p>
            ในปี 2024 เรารวมทักษะและความเชี่ยวชาญเหล่านี้ เพื่อสร้าง ORIGO –
            บริการที่ช่วยผู้ประกอบการ SME
            เข้าถึงลูกค้ากลุ่มเป้าหมายในตลาดโลกได้เร็วขึ้นและเติบโตได้อย่างยั่งยืน
          </p>

          <div className="border border-white/20 py-6 px-10 rounded-3xl bg-[#1a1b1f]">
            ประสบการณ์ที่ทำให้เราเข้าใจว่า{' '}
            <span className="text-secondary-color">“ตลาดโลก”</span> ไม่ได้ไกล
            เครื่องมือที่ดีช่วยให้เรามองหาโอกาสได้เร็วขึ้น
            เข้าถึงกลุ่มลูกค้าได้ง่ายขึ้น และลดต้นทุนของธุรกิจ
          </div>

          <p>
            จากงานวิจัย และแนวคิดด้านการจัดการที่ใช้กันในองค์กรชั้นนำ 1%
            เราพบว่าสิ่งที่ทำให้ธุรกิจเติบโตได้ไม่ใช่การทำทุกอย่างพร้อมกัน
            แต่คือการ โฟกัสในสิ่งที่ถูกต้อง
          </p>
        </div>

        <h3 className="py-8 text-3xl font-semibold text-center">
          สิ่งที่เราเชื่อ
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 pb-12">
          <div className="text-white/80 border rounded-3xl p-8 hover:scale-[1.02] duration-500 border-white/20 bg-[#1a1b1f] text-center">
            <div>ธุรกิจส่วนใหญ่มีโอกาสในการเติบโต</div>
            <AnimatedCounter
              end={92}
              suffix="%"
              className="text-white font-semibold text-5xl lg:text-7xl my-4"
            />
            <div>เมื่อการตัดสินใจถูกจัดการด้วยระบบและข้อมูลที่ถูกต้อง</div>
          </div>
          <div className="text-white/80 border rounded-3xl p-8 hover:scale-[1.02] duration-500 border-secondary-color/20 shadow-secondary-color/20 shadow-[0px_0px_20px] bg-[#1a1b1f] text-center">
            <div>เพื่อให้ผู้บริหารมีเวลาโฟกัสใน</div>
            <AnimatedCounter
              end={8}
              suffix="%"
              className="text-secondary-color font-semibold text-5xl lg:text-7xl my-4"
            />
            <div>
              ที่สำคัญที่สุด ลูกค้า ความสัมพันธ์ และ
              การตัดสินใจเชิงกลยุทธ์เพื่อการเติบโต
            </div>
          </div>
        </div>
      </Container>
      <Divider />
      <div className="text-center py-12">
        <div className="text-white/90 text-2xl font-semibold">
          พร้อมที่จะเริ่มต้นกับเราแล้วหรือยัง?
        </div>
        <div className="text-white/60 pb-4">
          ให้เราช่วยออกแบบเส้นทางการเติบโตที่ชัดเจนสำหรับธุรกิจของคุณ
        </div>
        <Button
          type="submit"
          className="p-6 text-lg cursor-pointer"
          onClick={() => navigate(route.contact())}
        >
          ติดต่อเรา
        </Button>
      </div>
    </section>
  )
}

export default AboutUsPage
