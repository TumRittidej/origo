import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import { FaRegCalendar } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form } from '@/components/ui/form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState, type FC } from 'react'
import { Progress } from '@/components/ui/progress'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { route } from '@/constants/routing'
import { reserveFormSchema } from './schema'
import type { ReserveFormValues } from './@types'

const ResultPage: FC = () => {
  const navigate = useNavigate()

  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false)

  const form = useForm<ReserveFormValues>({
    resolver: zodResolver(reserveFormSchema),
    defaultValues: {
      date: new Date(),
      time: '08:00'
    }
  })

  function onSubmit(values: ReserveFormValues) {
    console.log('SUBMIT =>', values)
    setIsSubmitSuccess(true)
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-5 py-10">
      <p className="text-center text-white pb-4 text-2xl md:text-4xl font-semibold">
        สถานะ Market Signal ของคุณ
      </p>
      <div className="flex flex-col items-center pb-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/20 text-2xl font-semibold text-secondary-color">
          42%
        </div>
        <h2 className="text-white mt-2 font-semibold md:text-lg">
          เริ่มเห็นทิศทาง แต่ยังไม่ชัดเจน
        </h2>
        <p className="text-white/60 text-center text-sm md:text-base max-w-100 pt-2">
          สถานะ - เริ่มเห็นทิศทางที่ถูกต้อง มีข้อมูลแต่ยังไม่ชัดเจน
          ระบบการตัดสินใจยังขึ้นอยู่กับตัวบุคคลหรือสถานการณ์เฉพาะหน้า
        </p>
      </div>
      <div className="bg-primary p-6 mt-4 rounded-2xl">
        <div className="mb-4">
          <div className="flex justify-between text-white text-sm md:text-base mb-1">
            <span>ทิศทางตลาด</span>
            <span>88%</span>
          </div>
          <Progress value={88} />
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-white text-sm md:text-base mb-1">
            <span>ตำแหน่งทางตลาด</span>
            <span>87%</span>
          </div>
          <Progress value={87} />
        </div>
        <div>
          <div className="flex justify-between text-white text-sm md:text-base mb-1">
            <span>ข้อมูลในการตัดสินใจ</span>
            <span>92%</span>
          </div>
          <Progress value={92} />
        </div>
      </div>
      <div className="text-center bg-primary p-6 mt-10 rounded-2xl">
        <h2 className="text-white mt-2 font-semibold md:text-lg">
          สิ่งที่คุณจะได้รู้จาก Market Signal
        </h2>
        <ul className="mt-4 space-y-3 text-white/75">
          <li className="flex gap-2 items-center group justify-center md:justify-start text-sm md:text-base">
            <IoIosCheckmarkCircleOutline
              size={24}
              className="group-hover:text-secondary-color group-hover:scale-120 duration-100"
            />
            ตลาดที่ควรเร่ง มีระยะเวลาในการซื้อขาย
          </li>
          <li className="flex gap-2 items-center group justify-center md:justify-start text-sm md:text-base">
            <IoIosCheckmarkCircleOutline
              size={24}
              className="group-hover:text-secondary-color group-hover:scale-120 duration-100"
            />
            ลูกค้าที่สร้างยอดขายต่อเนื่องและมีกำลังซื้อสูง
          </li>
          <li className="flex gap-2 items-center group justify-center md:justify-start text-sm md:text-base">
            <IoIosCheckmarkCircleOutline
              size={24}
              className="group-hover:text-secondary-color group-hover:scale-120 duration-100"
            />
            วิธีทำให้ทีมใช้ข้อมูลเดียวกันในการตัดสินใจ
          </li>
        </ul>
      </div>
      {!isSubmitSuccess ? (
        <div className="text-center bg-primary p-6 mt-10 rounded-2xl">
          <h2 className="text-white mt-2 font-semibold md:text-lg">
            นัดหมายเวลาคุยกับเรา
          </h2>
          <p className="text-white/60 text-center text-sm md:text-base pt-2">
            เลือกวันและเวลาที่สะดวก แล้วทีมงานจะติดต่อกลับเพื่อยืนยัน
          </p>
          <div className="mt-4 max-w-70 m-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-white">เลือกวันที่</FormLabel>

                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className="text-white h-10 hover:bg-primary w-full justify-between text-left font-normal"
                            >
                              {field.value ? (
                                format(field.value, 'dd MMMM yyyy', {
                                  locale: th
                                })
                              ) : (
                                <span>เลือกวันที่</span>
                              )}
                              <FaRegCalendar />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            defaultMonth={field.value}
                            onSelect={(day) => {
                              if (day) field.onChange(day)
                            }}
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">เลือกเวลา</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกเวลา" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[
                            '08:00',
                            '09:00',
                            '10:00',
                            '11:00',
                            '12:00',
                            '13:00',
                            '14:00',
                            '15:00',
                            '16:00'
                          ].map((t) => (
                            <SelectItem key={t} value={t}>
                              {t} น.
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="p-4">
                  ยืนยันเวลานัดหมาย
                </Button>
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <div className="text-center bg-primary p-6 mt-10 rounded-2xl animate-fade-in-up">
          <div className="text-secondary-color text-2xl border border-secondary-color bg-secondary-color/10 inline rounded-2xl px-4">
            THANK YOU
          </div>
          <h4 className="text-white mt-6 font-semibold text-lg md:text-2xl">
            ขอบคุณสำหรับการนัดหมาย
          </h4>
          <p className="text-white/60 text-center text-sm md:text-base pt-2">
            ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
            พร้อมสรุปแนวทางที่เหมาะกับธุรกิจของคุณ
          </p>
          <Button
            className="p-6 text-lg mt-6 cursor-pointer"
            onClick={() => navigate(route.home())}
          >
            กลับหน้าสู่หน้าแรก
          </Button>
        </div>
      )}
    </div>
  )
}

export default ResultPage
