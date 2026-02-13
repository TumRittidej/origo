import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import { route } from '@/constants/routing'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type ReserveSectionPropsType = {
  id: string
}

const ReserveSection: FC<ReserveSectionPropsType> = ({ id }) => {
  const navigate = useNavigate()
  return (
    <section id={id} className="py-14 md:py-20">
      <Container>
        <div className="text-center bg-primary py-12 rounded-4xl border border-white/5 shadow-white/10 inset-shadow-sm shadow-[0px_0px_10px]">
          <div className="text-white text-3xl lg:text-5xl font-semibold">
            จองเวลาเพื่อคุยกับเรา
          </div>
          <div className="text-white/80 text-xl lg:text-3xl mt-2">
            ว่าธุรกิจของคุณ ควรวางแผนการเติบโตอย่างไร
          </div>
          <Button
            className="cursor-pointer text-xl md:text-[28px] p-6 md:px-10 md:py-8 mt-6"
            onClick={() => navigate(route.contact())}
          >
            <div className="z-10">จองเวลา</div>
          </Button>
          <div className="text-white/60 mt-4">(จำกัด 5 บริษัทต่อเดือน)</div>
        </div>
      </Container>
    </section>
  )
}

export default ReserveSection
