import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState, type FC } from 'react'
import Container from '@/components/container'
import { useNavigate } from 'react-router-dom'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import { FaRegCalendar } from 'react-icons/fa6'
import type { ContactFormValues } from './@types'
import { contactSchema, defaultContactSchema } from './schema'
import { Calendar } from '@/components/ui/calendar'
import Divider from '@/components/divider'
import { Checkbox } from '@/components/ui/checkbox'
import { route } from '@/constants/routing'
// import { basicInformationSchema, defaultQuizSchema } from '../schema'
// import type { BasicInfoFormValues } from '../@types'

const ContactPage: FC = () => {
  const navigate = useNavigate()
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultContactSchema
  })

  const onSubmit = (values: ContactFormValues): void => {
    console.log('Submit Values:', values)
    // navigate(route.quiz())
    setIsSubmitSuccess(true)
  }

  return (
    <Container className="py-12 max-w-230!">
      <div className="bg-primary p-8 rounded-3xl border border-secondary-color">
        {!isSubmitSuccess ? (
          <>
            <h1 className="text-secondary-color text-2xl md:text-4xl font-semibold">
              นัดหมายเวลาคุยกับเรา
            </h1>
            <p className="text-white/70 pb-6">
              เลือกวันและเวลาที่สะดวก แล้วทีมงานจะติดต่อกลับเพื่อยืนยัน
            </p>
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
                              className="text-white h-10 border-white hover:bg-primary w-full justify-between text-left"
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
                <Divider />
                <h1 className="text-secondary-color text-2xl md:text-4xl pt-4 font-semibold">
                  ข้อมูลสำหรับติดต่อกลับ
                </h1>

                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        ชื่อ-นามสกุล
                        <span className="text-secondary-color">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="กรอกชื่อ-นามสกุล" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        ชื่อบริษัท
                        <span className="text-secondary-color">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="กรอกชื่อบริษัท" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        ตำแหน่ง<span className="text-secondary-color">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกตำแหน่ง" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="เจ้าของบริษัท">
                            เจ้าของบริษัท
                          </SelectItem>
                          <SelectItem value="ผู้บริหาร">ผู้บริหาร</SelectItem>
                          <SelectItem value="ฝ่ายขาย">ฝ่ายขาย</SelectItem>
                          <SelectItem value="ฝ่ายกลยุทธ์">
                            ฝ่ายกลยุทธ์
                          </SelectItem>
                          <SelectItem value="อื่นๆ">อื่น ๆ</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="employeeCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        จำนวนพนักงาน
                        <span className="text-secondary-color">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกจำนวนพนักงาน" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-500">101-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        อุตสาหกรรม
                        <span className="text-secondary-color">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="เลือกอุตสาหกรรม" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="อาหารและเครื่องดื่ม">
                            อาหารและเครื่องดื่ม
                          </SelectItem>
                          <SelectItem value="อิเล็กทรอนิกส์">
                            อิเล็กทรอนิกส์
                          </SelectItem>
                          <SelectItem value="เครื่องจักร">
                            เครื่องจักร
                          </SelectItem>
                          <SelectItem value="อื่นๆ">อื่น ๆ</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>เบอร์ติดต่อ (ไม่บังคับ)</FormLabel>
                      <FormControl>
                        <Input placeholder="0xxxxxxxxx" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        อีเมล<span className="text-secondary-color">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="you@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="acceptPolicy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="leading-tight">
                        <FormLabel className="text-sm font-normal text-white">
                          ยินยอมให้ทีมงานติดต่อกลับเพื่อให้คำปรึกษาเบื้องต้นเกี่ยวกับ
                          Market Signal
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="p-6 text-lg w-full">
                  ยืนยันเวลานัดหมาย
                </Button>
              </form>
            </Form>
          </>
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
    </Container>
  )
}

export default ContactPage
