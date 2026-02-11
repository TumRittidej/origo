import type { FC } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import helpYouImage from '@/assets/help_you_image.png'
import Container from '@/components/container'
import { TbEyeCheck, TbTargetArrow } from 'react-icons/tb'

const HelpYouSection: FC = () => {
  return (
    <section id="help_you_section" className="py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-white/80 text-xl lg:text-3xl pb-4">
              ช่วยคุณ
            </div>
            <div className="font-semibold text-secondary-color text-2xl md:text-4xl lg:text-6xl pb-4">
              วิเคราะห์และเลือกตลาด
            </div>
            <div className="text-white/80 text-xl md:text-3xl lg:text-5xl pb-8 lg:pb-12">
              รวมถึงผู้ซื้อจากทั่วโลก
            </div>
            <div className="text-white/60 text-lg md:text-2xl lg:text-3xl">
              ให้คุณเข้าถึงกลุ่มลูกค้าเป้าหมายได้รวดเร็ว
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-2 pb-4">
                <div className="text-secondary-color-hover/90 text-[36px] lg:text-[46px]">
                  <TbEyeCheck />
                </div>
                <div className="text-white text-lg md:text-xl lg:text-3xl">
                  มองเห็น <span className="text-white/60">- Market Signal</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 pb-4">
                <div className="text-secondary-color-hover/90 text-[28px] lg:text-[38px]">
                  <TbTargetArrow />
                </div>
                <div className="text-white text-lg md:text-xl lg:text-3xl">
                  เลือกให้ถูก{' '}
                  <span className="text-white/60">
                    - Customer & Market Focus
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 pb-4">
                <div className="text-secondary-color-hover/90 text-[26px] lg:text-[36px]">
                  <FiCheckCircle />
                </div>
                <div className="text-white text-lg md:text-xl lg:text-3xl">
                  ตัดสินใจอย่างมั่นใจ{' '}
                  <span className="text-white/60">- Decision Clarity</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden relative /w-full /aspect-[7/6] rounded-[36px]">
            <img
              src={helpYouImage}
              className="transform hover:-translate-y-3 scale-[1.01] hover:scale-[1.09] duration-500"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HelpYouSection
