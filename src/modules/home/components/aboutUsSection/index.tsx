import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { route } from '@/constants/routing'
import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import aboutMeImage from '@/assets/about_me_image.png'

const AboutUsSection: FC = () => {
  const navigate = useNavigate()

  return (
    <section id="about_us_section" className="py-14 md:py-20 bg-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={aboutMeImage}
              alt="origo"
              className="h-full w-full object-cover object-[75%_100%] scale-[1.16] hover:scale-[1.2] -translate-y-[4%] transform duration-500"
            />
          </div>
          <div className="m-auto">
            <div className="text-sm text-white/70">ABOUT ME</div>
            <div className="text-white text-4xl lg:text-5xl xl:text-6xl leading-tight">
              ประสบการณ์ <span className="text-secondary-color">18 ปี</span>{' '}
              จากการทำตลาด และความสำเร็จจริง
            </div>
            <div className="text-xl md:text-2xl lg:text-4xl text-white/70 mt-6">
              เราจะอยู่เป็นส่วนหนึ่งในทีมของคุณ ทุกการตัดสินใจที่สำคัญ
            </div>
            <Button
              className="cursor-pointer text-xl md:text-[28px] p-6 md:px-10 md:py-8 mt-6"
              onClick={() => navigate(route.aboutUs())}
            >
              ทำความรู้จัก ORIGO
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutUsSection
