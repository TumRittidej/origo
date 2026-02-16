import type { FC } from 'react'
import Container from '@/components/container'
import { Progress } from '@/components/ui/progress'
import Divider from '@/components/divider'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { route } from '@/constants/routing'

type AreYouReadySectionPropsType = {
  id: string
}

const AreYouReadySection: FC<AreYouReadySectionPropsType> = ({ id }) => {
  const navigate = useNavigate()

  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-white leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              พร้อมแล้วหรือยัง?
            </h2>
            <div className="font-light mb-8 md:mb-0 mt-2 md:leading-14 text-white/90 text-[20px] md:text-[28px] lg:text-[32px] xl:text-[40px]">
              คำถามเพียง <span className="font-semibold">3 นาที</span>
              <div>ที่จะพาคุณออกไปจากจุดเดิม</div>
            </div>
            <Divider className="hidden md:block w-20! h-1!" />
            <ul className="mt-4 md:mt-8 space-y-3 text-base md:text-lg text-white/75">
              <li className="flex gap-2 items-center group justify-center md:justify-start">
                <div className="rounded-full p-1 bg-white/15">
                  <FaCheck size={16} color="white" />
                </div>
                เพื่อกำหนดทิศทางได้แม่นยำขึ้น
              </li>
              <li className="flex gap-2 items-center group justify-center md:justify-start">
                <div className="rounded-full p-1 bg-white/15">
                  <FaCheck size={16} color="white" />
                </div>
                เพิ่มโอกาสในการปิดการขายได้มากขึ้น
              </li>
              <li className="flex gap-2 items-center group justify-center md:justify-start">
                <div className="rounded-full p-1 bg-white/15">
                  <FaCheck size={16} color="white" />
                </div>
                ที่จะมีเครื่องมือที่ดีกว่าเดิม
              </li>
            </ul>

            <Button
              className="cursor-pointer text-xl md:text-[28px] p-6 md:px-10 md:py-8 mt-8 group"
              onClick={() => navigate(route.basicInformationForm())}
            >
              <div className="z-10">เริ่มประเมิน (ฟรี) </div>
              <div className="text-white z-10 bg-black rounded-full p-1 md:p-2 text-[18px] md:text-[20px] group-hover:rotate-45 duration-300">
                <FaArrowRight />
              </div>
            </Button>
          </div>
          <Divider className="md:hidden" />
          <div>
            <div className="relative w-full rounded-3xl p-5 md:p-6 bg-primary border-white/10 border hover:border-secondary-color/20 hover:shadow-secondary-color/20 hover:shadow-[0px_0px_20px] duration-500 transform hover:-translate-y-1">
              <p className="text-white/70 pb-4 lg:text-lg">
                สถานะ Market Signal ของคุณ
              </p>
              <div className="flex flex-col items-center pb-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/20 text-3xl p-2 mb-4 font-semibold text-secondary-color">
                  89%
                </div>
                <p className="text-white mt-2 font-semibold text-lg">
                  พร้อมเติบโตอย่างมีทิศทาง
                </p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-white mb-1">
                  <span>ทิศทางตลาด</span>
                  <span>88%</span>
                </div>
                <Progress value={88} />
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-white mb-1">
                  <span>ตำแหน่งทางตลาด</span>
                  <span>87%</span>
                </div>
                <Progress value={87} />
              </div>
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>ข้อมูลในการตัดสินใจ</span>
                  <span>92%</span>
                </div>
                <Progress value={92} />
              </div>
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4">
                <div className="rounded-full p-2 bg-lime-700">
                  <FaCheck size={24} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AreYouReadySection
