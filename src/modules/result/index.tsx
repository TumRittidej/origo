import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaCheck, FaRegCalendar } from 'react-icons/fa6'

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
import { defaultReserveValues, reserveFormSchema } from './schema'
import type { ReserveFormValues } from './@types'
import ThankYouSection from '@/components/thankYouSection'
import { timeOptions } from '@/constants/time'
import { formatDate } from '@/utils/formatDate'

const ResultPage: FC = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false)

  const form = useForm<ReserveFormValues>({
    resolver: zodResolver(reserveFormSchema),
    defaultValues: defaultReserveValues
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
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/20 text-3xl p-2 mb-4 font-semibold text-secondary-color">
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
            <div className="rounded-full p-1 bg-white/15">
              <FaCheck size={16} color="white" />
            </div>
            ตลาดที่ควรเร่ง มีระยะเวลาในการซื้อขาย
          </li>
          <li className="flex gap-2 items-center group justify-center md:justify-start text-sm md:text-base">
            <div className="rounded-full p-1 bg-white/15">
              <FaCheck size={16} color="white" />
            </div>
            ลูกค้าที่สร้างยอดขายต่อเนื่องและมีกำลังซื้อสูง
          </li>
          <li className="flex gap-2 items-center group justify-center md:justify-start text-sm md:text-base">
            <div className="rounded-full p-1 bg-white/15">
              <FaCheck size={16} color="white" />
            </div>
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
                              className="text-white border-white/20 h-10 hover:bg-primary w-full justify-between text-left font-normal"
                            >
                              {field.value ? (
                                formatDate(field.value)
                              ) : (
                                <span>เลือกวันที่</span>
                              )}
                              <FaRegCalendar className="text-white/20" />
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
                          {timeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label} น.
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="p-6 text-lg cursor-pointer">
                  <div className="z-10">ยืนยันเวลานัดหมาย</div>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      ) : (
        <ThankYouSection>
          <div className="text-white/80 mt-4 text-lg border rounded-2xl py-2">
            {`เวลาจอง: ${formatDate(form.getValues().date)} (${form.getValues().time}น.)`}
          </div>
        </ThankYouSection>
      )}
    </div>
  )
}

export default ResultPage
