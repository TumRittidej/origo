import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Container from '@/components/container'
import type { FC } from 'react'
import { BiSolidQuoteLeft } from 'react-icons/bi'

const reviews = [
  {
    initials: 'SP',
    name: 'Somchai P.',
    role: 'Chief Data Officer',
    text: 'ก่อนทำงานกับ Origo เราใช้เวลาส่วนใหญ่ไปกับการลองผิดลองถูกหลายเดือน ทีมช่วยวิเคราะห์ให้ชัดขึ้นมาก',
    stars: 5
  },
  {
    initials: 'NW',
    name: 'Nattaya W.',
    role: 'Founder & CEO',
    text: 'ทำให้เราเห็นชัดเลยว่าควรโฟกัสตลาดไหน และลูกค้าแบบไหน จากเดิมที่ตัดสินใจจากความรู้สึก',
    stars: 5
  },
  {
    initials: 'PK',
    name: 'Prasert K.',
    role: 'Operations Manager',
    text: 'ยอดขายโตขึ้นอย่างมีทิศทาง และงานบริหารหลายอย่างมีระบบมากขึ้นอย่างเห็นได้ชัด',
    stars: 5
  },
  {
    initials: 'AL',
    name: 'Anong L.',
    role: 'Export Director',
    text: 'ข้อมูลเชิงลึกช่วยให้ทีมขายคุยกับลูกค้าได้แม่นขึ้นและปิดดีลได้เร็วกว่าเดิม',
    stars: 5
  },
  {
    initials: 'KT',
    name: 'Krit T.',
    role: 'Commercial Lead',
    text: 'เราลดการลองผิดลองถูกได้เยอะมาก ทุกคนในทีมเห็นภาพเดียวกันและเดินไปทางเดียวกัน',
    stars: 5
  },
  {
    initials: 'SP',
    name: 'Somchai P.',
    role: 'Chief Data Officer',
    text: 'ก่อนทำงานกับ Origo เราใช้เวลาส่วนใหญ่ไปกับการลองผิดลองถูกหลายเดือน ทีมช่วยวิเคราะห์ให้ชัดขึ้นมาก',
    stars: 5
  },
  {
    initials: 'NW',
    name: 'Nattaya W.',
    role: 'Founder & CEO',
    text: 'ทำให้เราเห็นชัดเลยว่าควรโฟกัสตลาดไหน และลูกค้าแบบไหน จากเดิมที่ตัดสินใจจากความรู้สึก',
    stars: 5
  },
  {
    initials: 'PK',
    name: 'Prasert K.',
    role: 'Operations Manager',
    text: 'ยอดขายโตขึ้นอย่างมีทิศทาง และงานบริหารหลายอย่างมีระบบมากขึ้นอย่างเห็นได้ชัด',
    stars: 5
  },
  {
    initials: 'AL',
    name: 'Anong L.',
    role: 'Export Director',
    text: 'ข้อมูลเชิงลึกช่วยให้ทีมขายคุยกับลูกค้าได้แม่นขึ้นและปิดดีลได้เร็วกว่าเดิม',
    stars: 5
  },
  {
    initials: 'KT',
    name: 'Krit T.',
    role: 'Commercial Lead',
    text: 'เราลดการลองผิดลองถูกได้เยอะมาก ทุกคนในทีมเห็นภาพเดียวกันและเดินไปทางเดียวกัน',
    stars: 5
  }
]

const ReviewsCarousel: FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <Container className="px-20!">
        <div className="text-center mb-10">
          <h2 className="text-white items-center flex flex-col text-3xl sm:text-4xl md:text-5xl font-semibold">
            <span className="text-white/50">
              <BiSolidQuoteLeft size={140} />
            </span>{' '}
            ผลลัพธ์จากลูกค้าของเรา
            <div className="text-white/80 text-3xl font-normal mt-4">
              ลูกค้าของเรา ว่าอย่างไรบ้าง
            </div>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            (อ้างอิงจากกรณีจริง ขอสงวนสิทธิ์ไม่เปิดเผยชื่อ)
          </p>
        </div>
        <Carousel>
          <CarouselContent>
            {reviews.map((r, i) => (
              <CarouselItem
                key={i}
                className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="h-full bg-primary border-white/5 hover:border hover:border-secondary-color/40 hover:shadow-secondary-color/10 hover:shadow-[0_0_30px] duration-500">
                  <CardContent className="p-6 flex flex-col items-center text-center min-h-95">
                    <div className="h-20 w-20 rounded-full border border-muted-foreground/50 flex items-center justify-center text-xl text-white font-semibold">
                      {r.initials}
                    </div>

                    <p className="mt-4 font-medium text-white">{r.name}</p>
                    <p className="text-sm text-white/60">{r.role}</p>

                    <p className="mt-4 text-sm text-white/60 leading-relaxed">
                      {r.text}
                    </p>

                    <div className="mt-auto flex gap-1 pt-4">
                      {Array.from({ length: r.stars }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-4 w-4 fill-secondary-color text-secondary-color"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  )
}

export default ReviewsCarousel
