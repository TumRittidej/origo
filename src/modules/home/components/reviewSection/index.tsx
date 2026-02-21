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
import ImageMock1 from '@/assets/bird_mock_up.webp'
import ImageMock2 from '@/assets/cat_mock_up.jpg'
import ImageMock3 from '@/assets/dog_mock_up.webp'

const reviews = [
  {
    image: ImageMock1,
    name: 'Somchai P.',
    role: 'Chief Data Officer',
    text: 'ก่อนทำงานกับ Origo เราใช้เวลาส่วนใหญ่ไปกับการลองผิดลองถูกหลายเดือน ทีมช่วยวิเคราะห์ให้ชัดขึ้นมาก',
    stars: 5
  },
  {
    image: ImageMock2,
    name: 'Nattaya W.',
    role: 'Founder & CEO',
    text: 'ทำให้เราเห็นชัดเลยว่าควรโฟกัสตลาดไหน และลูกค้าแบบไหน จากเดิมที่ตัดสินใจจากความรู้สึก',
    stars: 5
  },
  {
    image: ImageMock3,
    name: 'Prasert K.',
    role: 'Operations Manager',
    text: 'ยอดขายโตขึ้นอย่างมีทิศทาง และงานบริหารหลายอย่างมีระบบมากขึ้นอย่างเห็นได้ชัด',
    stars: 5
  },
  {
    image: ImageMock2,
    name: 'Anong L.',
    role: 'Export Director',
    text: 'ข้อมูลเชิงลึกช่วยให้ทีมขายคุยกับลูกค้าได้แม่นขึ้นและปิดดีลได้เร็วกว่าเดิม',
    stars: 5
  },
  {
    image: ImageMock1,
    name: 'Krit T.',
    role: 'Commercial Lead',
    text: 'เราลดการลองผิดลองถูกได้เยอะมาก ทุกคนในทีมเห็นภาพเดียวกันและเดินไปทางเดียวกัน',
    stars: 5
  },
  {
    image: ImageMock1,
    name: 'Somchai P.',
    role: 'Chief Data Officer',
    text: 'ก่อนทำงานกับ Origo เราใช้เวลาส่วนใหญ่ไปกับการลองผิดลองถูกหลายเดือน ทีมช่วยวิเคราะห์ให้ชัดขึ้นมาก',
    stars: 5
  },
  {
    image: ImageMock2,
    name: 'Nattaya W.',
    role: 'Founder & CEO',
    text: 'ทำให้เราเห็นชัดเลยว่าควรโฟกัสตลาดไหน และลูกค้าแบบไหน จากเดิมที่ตัดสินใจจากความรู้สึก',
    stars: 5
  },
  {
    image: ImageMock3,
    name: 'Prasert K.',
    role: 'Operations Manager',
    text: 'ยอดขายโตขึ้นอย่างมีทิศทาง และงานบริหารหลายอย่างมีระบบมากขึ้นอย่างเห็นได้ชัด',
    stars: 5
  },
  {
    image: ImageMock2,
    name: 'Anong L.',
    role: 'Export Director',
    text: 'ข้อมูลเชิงลึกช่วยให้ทีมขายคุยกับลูกค้าได้แม่นขึ้นและปิดดีลได้เร็วกว่าเดิม',
    stars: 5
  },
  {
    image: ImageMock1,
    name: 'Krit T.',
    role: 'Commercial Lead',
    text: 'เราลดการลองผิดลองถูกได้เยอะมาก ทุกคนในทีมเห็นภาพเดียวกันและเดินไปทางเดียวกัน',
    stars: 5
  }
]

type ReviewSectionPropsType = {
  id: string
}

const ReviewsCarousel: FC<ReviewSectionPropsType> = ({ id }) => {
  return (
    <section id={id} className="py-16 sm:py-20 bg-background">
      <Container className="px-12! md:px-16!">
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
          <p className="mt-2 text-muted-foreground">
            (อ้างอิงจากกรณีจริง ขอสงวนสิทธิ์ไม่เปิดเผยชื่อ)
          </p>
        </div>
        <Carousel>
          <CarouselContent className="px-4">
            {reviews.map((review) => (
              <CarouselItem
                key={review.name}
                className="px-4 py-6 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="py-12 h-full bg-primary border-white/5 hover:border hover:border-secondary-color/20 hover:shadow-secondary-color/20 hover:shadow-[0px_0px_20px] duration-500 transform hover:-translate-y-1">
                  <CardContent className="px-4 md:px-6 flex flex-col items-center text-center min-h-95">
                    <div>
                      <img
                        src={review.image ?? ''}
                        alt={review.name}
                        className="object-cover object-center rounded-full h-28 w-28 md:h-36 md:w-36 border border-muted-foreground"
                      />
                    </div>

                    <p className="mt-10 font-medium text-xl text-white">
                      {review.name ?? '-'}
                    </p>

                    <p className="mt-2 text-lg text-white/60">{review.role}</p>

                    <p className="mt-8 text-white/60 leading-relaxed">
                      {review.text ?? '-'}
                    </p>

                    <div className="mt-auto flex gap-1 pt-4">
                      {Array.from({ length: review.stars }).map((_, s) => (
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
