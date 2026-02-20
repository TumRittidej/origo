import { useState, type FC, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FullLogoWhite from '@/assets/full_logo_white.png'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { defaultQuizSchema, quizSchema } from './schema'
import type { QuizFormValues } from './@types'
import { useNavigate } from 'react-router-dom'
import { route } from '@/constants/routing'
import Container from '@/components/container'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface IQuiz {
  id: string
  type: 'choice' | 'text'
  title: ReactNode
  options: string[]
}

const quizQuestions: IQuiz[] = [
  {
    id: 'q1',
    type: 'choice',
    title: (
      <div>
        คุณมีข้อมูลที่ยืนยันได้ชัดเจนหรือไม่ว่า{' '}
        <span className="text-secondary-color">ผู้ซื้อ</span>{' '}
        ในตลาดเป้าหมายยังมีกำลังซื้ออยู่จริง?
      </div>
    ),
    options: [
      'มี — สอบถามจากลูกค้าในตลาดที่เกิดขึ้นจริงในช่วงปีที่ผ่านมา',
      'มีข้อมูลบางส่วน แต่ยังไม่เห็นภาพรวม',
      'ส่วนใหญ่เป็นการทดลองขาย',
      'ยังไม่มีความชัดเจน'
    ]
  },
  {
    id: 'q2',
    type: 'choice',
    title: (
      <div>
        คุณตอบได้ชัดเจนไหมว่า{' '}
        <span className="text-secondary-color">ทำไมลูกค้าถึงต้องเลือกคุณ</span>{' '}
        แทนที่จะไปซื้อกับคู่แข่ง?
      </div>
    ),
    options: ['ชัดเจนมาก', 'ค่อนข้างชัดเจน', 'ไม่ชัดเจน', 'ยังไม่มีข้อมูล']
  },
  {
    id: 'q3',
    type: 'choice',
    title: (
      <div>
        คุณมีข้อมูลหรือไม่ว่า{' '}
        <span className="text-secondary-color">
          ตลาดไหนกำลังซบเซาและไม่ควรทำตลาดในช่วงนี้
        </span>
        ?
      </div>
    ),
    options: [
      'รู้ชัดเจน และมีการกำหนดแผนไว้แล้ว',
      'พอทราบเป็นแนวทางบ้าง',
      'ยังไม่ค่อยชัด',
      'ยังไม่มีการคัดกรอง ลองทำทุกอย่าง'
    ]
  },
  {
    id: 'q4',
    type: 'choice',
    title: (
      <div>
        การขายของคุณ{' '}
        <span className="text-secondary-color">มีเป้าหมายกลุ่มผู้ซื้อ</span>{' '}
        ที่กำหนดไว้อย่าง
        <span className="text-secondary-color">ชัดเจน</span>
        หรือไม่?
      </div>
    ),
    options: [
      'กลุ่มเป้าหมายชัดเจนมาก',
      'ค่อนข้างชัดเจน',
      'กำหนดเป้าหมายไว้กว้าง ๆ',
      'ยังไม่มีการจัดลำดับความสำคัญ'
    ]
  },
  {
    id: 'q5',
    type: 'choice',
    title: (
      <div>
        <span className="text-secondary-color">คุณมั่นใจแค่ไหน </span>
        ว่าเงินที่จ่ายไปเพื่อหาลูกค้าใหม่ (CAC) ในตอนนี้{' '}
        <span className="text-secondary-color">คุ้มค่ากับรายได้ </span>
        ที่จะได้กลับมาในระยะยาว?
      </div>
    ),
    options: [
      'มั่นใจมาก',
      'ค่อนข้างมั่นใจ',
      'ยังไม่แน่ใจ',
      'ไม่มีการเก็บข้อมูลส่วนนี้ชัดเจน'
    ]
  },
  {
    id: 'q6',
    type: 'choice',
    title: (
      <div>
        <span className="text-secondary-color">คุณทราบไหมว่า </span>
        เราเสียเงินและเวลาไปมากแค่ไหน กับการหาลูกค้า{' '}
        <span className="text-secondary-color">ที่ไม่พร้อมจะซื้อ</span>?
      </div>
    ),
    options: ['น้อยมาก', 'มีบ้าง', 'ค่อนข้างยาก', 'ไม่ทราบ / ไม่มีข้อมูลชัดเจน']
  },
  {
    id: 'q7',
    type: 'choice',
    title: (
      <div>
        คุณมีเกณฑ์หรือระบบที่เป็นมาตรฐานในการตัดสินใจไหมว่า{' '}
        <span className="text-secondary-color">ตลาดไหนควรไปต่อ</span> หรือ
        <span className="text-secondary-color"> ตลาดไหนควรขยาย</span>?
      </div>
    ),
    options: [
      'มีระบบการตัดสินใจที่ชัดเจน',
      'มีบางส่วน แต่ยังไม่เป็นโครงสร้าง',
      'ตัดสินใจตามสถานการณ์เฉพาะหน้า',
      'ใช้สัญชาตญาณหรือประสบการณ์ส่วนตัว'
    ]
  },
  {
    id: 'q8',
    type: 'choice',
    title: (
      <div>
        ก่อนจะลงทุนออกงานแสดงสินค้า (Exhibition) คุณมีการตรวจสอบก่อนไหมว่า{' '}
        <span className="text-secondary-color">
          ตลาดนั้นมีความต้องการสินค้าของคุณจริง ๆ
        </span>
        ?
      </div>
    ),
    options: ['ทำทุกครั้ง', 'ทำบ้างบางครั้ง', 'ทำแต่น้อยมาก', 'ไม่เคยทำเลย']
  },
  {
    id: 'q9',
    type: 'choice',
    title: (
      <div>
        ข้อมูลความรู้เรื่องตลาดและลูกค้า{' '}
        <span className="text-secondary-color">ถูกบันทึกเป็นระบบ </span>
        ให้คนอื่นนำไปใช้ต่อได้ หรือว่ายังติดตัวอยู่กับตัวบุคคล?
      </div>
    ),
    options: [
      'บันทึกครบถ้วนและนำไปใช้ต่อได้ทันที',
      'บันทึกไว้เพียงบางส่วน',
      'เน้นจากประสบการณ์ตัวบุคคล',
      'ไม่มีการบันทึกเลย'
    ]
  },
  {
    id: 'q10',
    type: 'choice',
    title: (
      <div>
        ถ้าวันนี้คุณหยุดทำการตลาดไป 60 วัน{' '}
        <span className="text-secondary-color">คุณยังพอจะมองออกไหม </span>
        ว่าลูกค้าที่มีความต้องการจริง ๆ อยู่ที่ไหน?
      </div>
    ),
    options: ['ระบุได้อย่างชัดเจน', 'น่าจะพอทราบ', 'ไม่แน่ใจ', 'ไม่ทราบเลย']
  },
  {
    id: 'q11',
    type: 'choice',
    title: (
      <div>
        <span className="text-secondary-color">สถานการณ์ปัจจุบัน </span>
        ของธุรกิจคุณตรงกับข้อใดมากที่สุด?
      </div>
    ),
    options: [
      'อยู่ในช่วงเริ่มเติบโต',
      'อยู่ในช่วงขยายธุรกิจ',
      'ธุรกิจมั่นคงแล้วแต่ยังไม่มีประสิทธิภาพ',
      'กำลังสำรวจตลาดใหม่'
    ]
  },
  {
    id: 'q12',
    type: 'choice',
    title: (
      <div>
        <span className="text-secondary-color">ผลลัพธ์ใดสำคัญที่สุด</span>{' '}
        สำหรับคุณในช่วง 90 วันข้างหน้า?
      </div>
    ),
    options: [
      'ได้กลุ่มลูกค้าที่มีคุณภาพมากขึ้น',
      'ลดต้นทุนการหาลูกค้า',
      'เพิ่มอัตราการขายจากลูกค้าที่มีอยู่',
      'เห็นทิศทางตลาดที่ชัดเจน'
    ]
  },
  {
    id: 'q13',
    type: 'choice',
    title: (
      <div>
        คุณคิดว่าอะไรคือ <span className="text-secondary-color">อุปสรรค</span>{' '}
        ที่ใหญ่ที่สุดที่ทำให้ธุรกิจคุณยังไม่เติบโตเท่าที่ควร?
      </div>
    ),
    options: [
      'ตลาดที่ขายอยู่ไม่เติบโต',
      'ลูกค้าที่ได้มาไม่มีกำลังซื้อ',
      'ต้นทุนการหาลูกค้าสูงเกินไป',
      'ข้อมูลทางการตลาดยังไม่ชัดเจน'
    ]
  },
  {
    id: 'q14',
    type: 'choice',
    title: (
      <div>
        คุณคิดว่าอะไรที่เราสามารถ{' '}
        <span className="text-secondary-color">ช่วยคุณได้มากที่สุด</span>{' '}
        ในตอนนี้?
      </div>
    ),
    options: [
      'การให้ทิศทางและข้อมูลตลาดเชิงลึก',
      'การออกแบบกลยุทธ์',
      'มีทีมสนับสนุนด้านการขาย',
      'ที่ปรึกษาแบบครบวงจร'
    ]
  },
  {
    id: 'q15',
    type: 'text',
    title: (
      <div>
        มีข้อมูลอื่น ๆ ที่สำคัญที่คุณคิดว่า{' '}
        <span className="text-secondary-color">เราควรทราบ</span> หรือไม่?
      </div>
    ),
    options: []
  }
]

const descriptionByStep = {
  2: (
    <>
      <div className="text-2xl font-semibold text-secondary-color pb-2">
        คุณทราบหรือไม่ ?
      </div>
      <div>
        ในปี 2024-2025 บริษัทที่ใช้ Market Intelligence (สัญญาณตลาด)
        สามารถลดต้นทุนการหาลูกค้า (CAC) ได้มากกว่าวิธีแบบเดิมถึง 50-80%
        และมีโอกาสปิดการขายได้สูงกว่าคู่แข่งถึง 3 เท่า
      </div>
    </>
  ),
  6: 'ผลวิจัยระบุว่า ทีมการตลาดที่ไม่มีการระบุ Buyer Profile (ICP) ที่ชัดเจน จะสูญเสียงบประมาณ (Marketing Waste) ไปกับกลุ่มที่ไม่ใช่ถึง 70-80% ของงบทั้งหมด',
  10: 'องค์กรที่เปลี่ยนจากระบบ "สัญชาตญาณ" (Intuition) มาเป็น "Data-Driven" สามารถ ย่นเวลาสู่ความสำเร็จ (Time-to-Success) ได้เร็วขึ้นถึง 40%'
}

const QuizPage: FC = () => {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [showInterstitial, setShowInterstitial] = useState(false)

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(quizSchema),
    defaultValues: defaultQuizSchema,
    shouldUnregister: false,
    mode: 'onChange'
  })

  const total = quizQuestions.length
  const safeStep = Math.min(Math.max(step, 0), total - 1)
  const current = quizQuestions[safeStep]
  if (!current) return null

  const progress = ((safeStep + 1) / total) * 100

  const goBack = () => {
    if (safeStep > 0) setStep((s) => s - 1)
  }

  const onSubmit = (values: QuizFormValues) => {
    console.log('Quiz Result:', values)
    navigate(route.result())
  }

  return (
    <>
      {!showInterstitial && (
        <Container className="pt-12">
          <Progress value={progress} />
          <div className="text-sm flex justify-between w-full mt-4 mb-4">
            <div className="text-white/60 text-xs">ความคืบหน้า</div>
            <span className="text-secondary-color font-semibold">
              {Math.round(progress)}%
            </span>
          </div>
        </Container>
      )}
      <div className="flex mx-auto w-full max-w-3xl flex-col justify-center">
        {showInterstitial ? (
          <div
            key={current.id}
            className="opacity-40 flex items-center px-8 justify-center flex-col h-screen"
            data-aos="zoom-in"
          >
            <div className="mb-10 w-20 mx-auto">
              <img src={FullLogoWhite} />
            </div>
            <div className="relative flex bg-primary w-full flex-col gap-6 rounded-3xl border border-secondary-color/20 p-6 md:p-10 shadow-[0_0_40px_rgba(255,179,71,0.15)] hover:shadow-[0_0_60px_rgba(255,179,71,0.25)] transition-all duration-500">
              <div className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                {descriptionByStep?.[step] ?? ''}
              </div>
            </div>
            <div className="flex justify-center pt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setShowInterstitial(false)
                  setStep((s) => s + 1)
                }}
                className="rounded-full p-8 animate-scale-pop cursor-pointer bg-secondary-color text-black/90"
              >
                <IoIosArrowForward size={28} />
              </Button>
            </div>
          </div>
        ) : (
          <div className="pt-12 px-5 pb-10">
            <Form {...form} key={current.id}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div key={current.id} className="animate-fade-in-up">
                  <div className="mb-10 w-20 mx-auto">
                    <img src={FullLogoWhite} />
                  </div>
                  <FormField
                    control={form.control}
                    name={current.id as keyof QuizFormValues}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-3xl md:text-4xl leading-10 md:leading-12 font-semibold pb-6">
                          {current.title}
                        </FormLabel>
                        {current.type === 'choice' && (
                          <div className="space-y-6 mt-4">
                            {current.options.map((option) => {
                              const active = field.value === option

                              return (
                                <div
                                  key={option}
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => {
                                    form.setValue(
                                      current.id as keyof QuizFormValues,
                                      option,
                                      {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true
                                      }
                                    )

                                    if ([2, 6, 10].includes(safeStep)) {
                                      setShowInterstitial(true)
                                    } else if (safeStep < total - 1) {
                                      setStep((s) => s + 1)
                                    }
                                  }}
                                  className={cn(
                                    'text-white/80 rounded-xl text-lg border border-white/20 p-4 cursor-pointer transition bg-primary hover:border-secondary-color/80 hover:bg-white/10',
                                    active &&
                                      'border-secondary-color bg-secondary-color text-black hover:bg-secondary-color shadow-secondary-color shadow-xl/10'
                                  )}
                                >
                                  {option}
                                </div>
                              )
                            })}
                          </div>
                        )}

                        {current.type === 'text' && (
                          <div className="mt-4 space-y-3">
                            <Textarea
                              {...field}
                              className="min-h-40 max-w-full"
                              placeholder="พิมพ์คำตอบของคุณที่นี่..."
                            />
                          </div>
                        )}
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between pt-6">
                    {safeStep > 0 && (
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={goBack}
                        className="rounded-full p-6 cursor-pointer text-white/70 border-white/20 hover:scale-[1.1] duration-500 shadow-xs hover:border-secondary-color/50"
                      >
                        <IoIosArrowBack size={20} />
                      </Button>
                    )}

                    {safeStep === total - 1 && (
                      <Button
                        type="submit"
                        className="p-6 text-xl cursor-pointer"
                      >
                        <div className="z-10">ดูผลลัพธ์</div>
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    </>
  )
}

export default QuizPage
