// import { useEffect, useState } from 'react'
// import { Star } from 'lucide-react'
// import { FaQuoteLeft } from 'react-icons/fa6'

// const CARD_WIDTH = 246
// const GAP = 24

// const reviews = [
//   {
//     initials: 'SP',
//     name: 'Somchai P.',
//     role: 'Chief Data Officer',
//     text: 'ก่อนทำงานกับ Origo เราใช้เวลาส่วนใหญ่ไปกับการลองผิดลองถูกหลายเดือน ทีมช่วยวิเคราะห์ให้ชัดขึ้นมาก',
//     stars: 5
//   },
//   {
//     initials: 'NW',
//     name: 'Nattaya W.',
//     role: 'Founder & CEO',
//     text: 'ทำให้เราเห็นชัดเลยว่าควรโฟกัสตลาดไหน และลูกค้าแบบไหน จากเดิมที่ตัดสินใจจากความรู้สึก',
//     stars: 5
//   },
//   {
//     initials: 'PK',
//     name: 'Prasert K.',
//     role: 'Operations Manager',
//     text: 'ยอดขายโตขึ้นอย่างมีทิศทาง และงานบริหารหลายอย่างมีระบบมากขึ้นอย่างเห็นได้ชัด',
//     stars: 5
//   },
//   {
//     initials: 'AL',
//     name: 'Anong L.',
//     role: 'Export Director',
//     text: 'ข้อมูลเชิงลึกช่วยให้ทีมขายคุยกับลูกค้าได้แม่นขึ้นและปิดดีลได้เร็วกว่าเดิม',
//     stars: 5
//   },
//   {
//     initials: 'KT',
//     name: 'Krit T.',
//     role: 'Commercial Lead',
//     text: 'เราลดการลองผิดลองถูกได้เยอะมาก ทุกคนในทีมเห็นภาพเดียวกันและเดินไปทางเดียวกัน',
//     stars: 5
//   }
// ]

// function useCardsPerView() {
//   const [cards, setCards] = useState(3)

//   useEffect(() => {
//     const calc = () => {
//       const w = window.innerWidth
//       if (w < 640) return 1 // mobile
//       if (w < 1024) return 2 // tablet
//       return 3 // desktop
//     }

//     const update = () => setCards(calc())
//     update()

//     window.addEventListener('resize', update)
//     return () => window.removeEventListener('resize', update)
//   }, [])

//   return cards
// }

// export default function ReviewsSlider() {
//   const cardsPerView = useCardsPerView()
//   const [index, setIndex] = useState(0)

//   const maxIndex = Math.max(reviews.length - cardsPerView, 0)

//   const next = () => setIndex((i) => Math.min(i + 1, maxIndex))
//   const prev = () => setIndex((i) => Math.max(i - 1, 0))

//   return (
//     <section className="relative bg-[var(--luxury-bg-elevated-1)] py-16 sm:py-20">
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="text-center">
//           <h2 className="font-heading text-3xl text-white sm:text-4xl md:text-5xl">
//             ผลลัพธ์จากลูกค้าของเรา
//           </h2>
//           <p className="mt-2 text-sm text-white/50">
//             (อ้างอิงจากกรณีจริง ขอสงวนสิทธิ์ไม่เปิดเผยชื่อ)
//           </p>
//         </div>

//         <div className="mt-10 flex flex-col lg:flex-row gap-6">
//           {/* Left panel */}
//           <div className="flex-none w-full lg:w-[246px] rounded-3xl border border-white/10 bg-[#1b1c1f] p-8 shadow-xl flex flex-col justify-between">
//             <p className="text-2xl lg:text-3xl text-white leading-tight">
//               <div className="text-white/50 text-8xl">
//                 <FaQuoteLeft />
//               </div>
//               ลูกค้าของเรา
//               <br />
//               ว่าอย่างไรบ้าง
//             </p>

//             <div className="mt-6 lg:mt-10 flex items-center justify-between">
//               <button
//                 onClick={prev}
//                 disabled={index === 0}
//                 className="text-3xl text-white/70 hover:text-white disabled:opacity-30"
//               >
//                 ←
//               </button>
//               <button
//                 onClick={next}
//                 disabled={index === maxIndex}
//                 className="text-3xl text-white/70 hover:text-white disabled:opacity-30"
//               >
//                 →
//               </button>
//             </div>
//           </div>

//           {/* Slider */}
//           <div className="overflow-hidden w-full">
//             <div
//               className="flex gap-6 transition-transform duration-500 ease-out"
//               style={{
//                 transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`
//               }}
//             >
//               {reviews.map((r, i) => (
//                 <div
//                   key={i}
//                   className="flex-none w-[246px] min-h-[380px] sm:min-h-[420px] flex flex-col items-center rounded-xl border border-white/20 bg-[#1a1b20] px-6 sm:px-8 py-8 sm:py-10 text-center shadow-xl transition hover:border-[#ffbd59]/30"
//                 >
//                   <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-white/30 flex items-center justify-center text-xl sm:text-2xl font-semibold text-white">
//                     {r.initials}
//                   </div>
//                   <p className="mt-4 sm:mt-5 font-medium text-white">
//                     {r.name}
//                   </p>
//                   <p className="mt-1 text-xs sm:text-sm text-white/50">
//                     {r.role}
//                   </p>
//                   <p className="mt-4 sm:mt-6 text-sm leading-relaxed text-white/50">
//                     {r.text}
//                   </p>

//                   <div className="mt-auto flex gap-1 pt-4 sm:pt-6">
//                     {Array.from({ length: r.stars }).map((_, s) => (
//                       <Star
//                         key={s}
//                         className="h-4 w-4 fill-[#FFBD59] text-[#FFBD59]"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

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
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
            ผลลัพธ์จากลูกค้าของเรา
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
                <Card className="h-full bg-primary border-white/20 hover:border hover:border-secondary-color hover:shadow-secondary-color/10 hover:shadow-[0_0_50px] duration-500">
                  <CardContent className="p-6 flex flex-col items-center text-center min-h-95">
                    <div className="h-20 w-20 rounded-full border border-white/80 flex items-center justify-center text-xl text-white font-semibold">
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
