import Container from '@/components/container'
import { type FC } from 'react'

const NotHardWorkSection: FC = () => {
  // const ref = useRef<HTMLDivElement>(null)
  // const [visible, setVisible] = useState(false)

  // useEffect(() => {
  //   if (!ref.current) return

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true)
  //         observer.disconnect() // เล่นครั้งเดียว
  //       }
  //     },
  //     { threshold: 0.4 }
  //   )

  //   observer.observe(ref.current)

  //   return () => observer.disconnect()
  // }, [])
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="text-center">
          <div className="text-lg md:text-2xl text-white/70 pb-2">
            ไม่ใช่เพราะทำงานหนักขึ้น
          </div>
          <div className="text-2xl md:text-4xl text-white/80 pb-6">
            แต่เพราะเริ่มจากการ
          </div>
          <div className="text-3xl md:text-6xl text-white pb-12">
            กำหนดทิศทางการขายที่ชัดเจน
          </div>
          <div data-aos="fade-down">
            <div className="text-4xl md:text-5xl text-secondary-color font-semibold">
              เจ้าของธุรกิจ
            </div>
            <div className="text-2xl md:text-3xl text-white/80 pt-2">
              มีเวลาเหลือมากขึ้น
            </div>
          </div>
          <div
            className="mx-auto h-10 w-px my-6 bg-secondary-color-hover"
            data-aos="fade-down"
            data-aos-delay="100"
          />
          {/* <div
            ref={ref}
            className={`mx-auto my-6 w-px h-10 bg-secondary-color-hover origin-top transition-transform duration-700 ease-out ${
              visible ? 'scale-y-100' : 'scale-y-0'
            }`}
            data-aos-delay="100"
          /> */}
          <div data-aos="fade-down" data-aos-delay="200">
            <div className="text-4xl md:text-5xl text-secondary-color font-semibold">
              ธุรกิจ
            </div>
            <div className="text-2xl md:text-3xl text-white/80 pt-2">
              เติบโตอย่างเป็นระบบ
            </div>
          </div>
          <div
            className="mx-auto h-10 w-px my-6 bg-secondary-color-hover"
            data-aos="fade-down"
            data-aos-delay="300"
          />
          {/* <div
            ref={ref}
            className={`mx-auto my-6 w-px h-10 bg-secondary-color-hover origin-top transition-transform duration-700 ease-out ${
              visible ? 'scale-y-100' : 'scale-y-0'
            }`}
            data-aos-delay="400"
          /> */}
          <div data-aos="fade-down" data-aos-delay="400">
            <div className="text-4xl md:text-5xl text-secondary-color font-semibold">
              ทีมงาน
            </div>
            <div className="text-2xl md:text-3xl text-white/80 pt-2">
              รู้ชัดว่าควรโฟกัสอะไร
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NotHardWorkSection
