import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { route } from '@/constants/routing'
import type { FC, ReactNode } from 'react'

type ThankYouSectionPropsType = {
  children?: ReactNode
}

const ThankYouSection: FC<ThankYouSectionPropsType> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="text-center bg-primary p-6 mt-10 rounded-2xl animate-fade-in-up">
      <div className="text-secondary-color text-xl font-semibold border border-secondary-color bg-secondary-color/10 inline rounded-2xl px-4">
        THANK YOU
      </div>
      <h4 className="text-white mt-6 font-semibold text-2xl">
        ขอบคุณสำหรับการนัดหมาย
      </h4>
      <p className="text-white/60 text-center text-xl pt-2">
        ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
        พร้อมสรุปแนวทางที่เหมาะกับธุรกิจของคุณ
      </p>
      <div>{children && children}</div>
      <Button
        className="p-6 text-xl mt-6 cursor-pointer"
        onClick={() => navigate(route.home())}
      >
        <div className="z-10">กลับหน้าสู่หน้าแรก</div>
      </Button>
    </div>
  )
}

export default ThankYouSection
