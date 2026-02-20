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

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import { FaRegCalendar } from 'react-icons/fa6'
import type { ContactFormValues } from './@types'
import { contactSchema, defaultContactValues } from './schema'
import { Calendar } from '@/components/ui/calendar'
import Divider from '@/components/divider'
import { Checkbox } from '@/components/ui/checkbox'
import ThankYouSection from '@/components/thankYouSection'
import { timeOptions } from '@/constants/time'
import { formatDate } from '@/utils/formatDate'
import { positionOptions } from '@/constants/position'
import { industryOptions } from '@/constants/industry'
import { employeeCountOption } from '@/constants/employeeCount'

const ContactPage: FC = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultContactValues
  })

  const onSubmit = (values: ContactFormValues): void => {
    console.log('Submit Values:', values)
    // navigate(route.quiz())
    setIsSubmitSuccess(true)
  }

  return (
    <Container className="py-12 max-w-230!">
      <div className="p-8 rounded-3xl">
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
                      <FormLabel>เลือกวันที่</FormLabel>

                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className="text-white text-lg h-14 border-none hover:bg-primary w-full justify-between text-left font-normal"
                            >
                              {field.value ? (
                                format(field.value, 'dd MMMM yyyy', {
                                  locale: th
                                })
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
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              disabled={option.disabled}
                            >
                              {option.label} น.
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
                          {positionOptions.map((option) => {
                            return (
                              <SelectItem
                                value={option.value}
                                key={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            )
                          })}
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
                          {employeeCountOption.map((option) => {
                            return (
                              <SelectItem
                                value={option.value}
                                key={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            )
                          })}
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
                          {industryOptions.map((option) => {
                            return (
                              <SelectItem
                                value={option.value}
                                key={option.value}
                              >
                                {option.value}
                              </SelectItem>
                            )
                          })}
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
                    <FormItem className="flex flex-row items-start cursor-pointer">
                      <FormControl className="cursor-pointer">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="leading-tight">
                        <FormLabel className="text-sm font-normal text-white cursor-pointer">
                          ยินยอมให้ทีมงานติดต่อกลับเพื่อให้คำปรึกษาเบื้องต้นเกี่ยวกับ
                          Market Signal
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="p-6 text-lg w-full cursor-pointer"
                >
                  ยืนยันเวลานัดหมาย
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <ThankYouSection>
            {
              <div className="text-white/80 mt-4 text-lg border rounded-2xl py-2">
                {`เวลาจอง: ${formatDate(form.getValues().date)} (${form.getValues().time})`}
              </div>
            }
          </ThankYouSection>
        )}
      </div>
    </Container>
  )
}

export default ContactPage
