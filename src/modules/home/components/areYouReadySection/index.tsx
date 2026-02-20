import { useEffect, useState, type FC } from 'react'
import Container from '@/components/container'
import { Progress } from '@/components/ui/progress'
import Divider from '@/components/divider'
import { FaArrowRight, FaCheck } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { route } from '@/constants/routing'
import AnimatedCounter from '@/components/animatedCount'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { colors } from '@/constants/colors'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

type AreYouReadySectionPropsType = {
  id: string
}

const AreYouReadySection: FC<AreYouReadySectionPropsType> = ({ id }) => {
  const navigate = useNavigate()

  const [current, setCurrent] = useState(89)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (!inView) return

    const stepTime = 100 / 89
    let count = 0

    const timer = setInterval(() => {
      count += 1
      setCurrent(count)
      if (count >= 89) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView])

  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center justify-between">
          <div className="text-center md:text-left" data-aos="fade-right">
            <h2 className="text-white leading-tight text-6xl md:text-7xl">
              พร้อมแล้วหรือยัง?
            </h2>
            <div className="font-light mb-8 md:mb-0 mt-2 md:leading-14 text-white/90 text-3xl md:text-4xl">
              คำถามเพียง <span className="font-semibold">3 นาที</span>
              <div>ที่จะพาคุณออกไปจากจุดเดิม</div>
            </div>
            <Divider className="hidden md:block w-20! h-1!" />
            <ul className="mt-4 md:mt-8 space-y-3 text-xl text-white/75">
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
              className="cursor-pointer text-xl md:text-3xl p-6 md:px-10 md:py-8 mt-8 group"
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
              <p className="text-white/70 pb-4 text-xl md:text-2xl">
                สถานะ Market Signal ของคุณ
              </p>
              <div className="flex flex-col items-center pb-4">
                <div
                  ref={ref}
                  className="flex h-56 w-56 items-center justify-center text-5xl md:text-6xl p-2 mb-4 font-semibold text-secondary-color"
                >
                  <CircularProgressbar
                    value={inView ? 89 : 0}
                    text={`${current}%`}
                    styles={buildStyles({
                      pathColor: colors['secondary-color'],
                      textColor: '#fff',
                      trailColor: colors['muted-foreground'],
                      strokeLinecap: 'round',
                      textSize: '30px'
                    })}
                    strokeWidth={5}
                  />
                </div>
                <p className="text-white mt-2 font-semibold text-xl">
                  พร้อมเติบโตอย่างมีทิศทาง
                </p>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-white mb-1">
                  <span>ทิศทางตลาด</span>
                  <AnimatedCounter end={88} suffix="%" />
                </div>
                <Progress value={88} />
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-white mb-1">
                  <span>ตำแหน่งทางตลาด</span>
                  <AnimatedCounter end={87} suffix="%" />
                </div>
                <Progress value={87} />
              </div>
              <div>
                <div className="flex justify-between text-white mb-1">
                  <span>ข้อมูลในการตัดสินใจ</span>
                  <AnimatedCounter end={92} suffix="%" />
                </div>
                <Progress value={92} />
              </div>
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4">
                <div className="rounded-full p-3 bg-lime-800 text-primary">
                  <FaCheck size={20} />
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
