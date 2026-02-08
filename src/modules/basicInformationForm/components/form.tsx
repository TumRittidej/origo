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
import type { FC } from 'react'
import Container from '@/components/container'
import { useNavigate } from 'react-router-dom'
import { route } from '@/constants/routing'
import { basicInformationSchema, defaultQuizSchema } from '../schema'
import type { BasicInfoFormValues } from '../@types'

const LeadInfoForm: FC = () => {
  const navigate = useNavigate()

  const form = useForm<BasicInfoFormValues>({
    resolver: zodResolver(basicInformationSchema),
    defaultValues: defaultQuizSchema
  })

  const onSubmit = (values: BasicInfoFormValues): void => {
    console.log('Submit Values:', values)
    navigate(route.quiz())
  }

  return (
    <Container className="py-12 max-w-200!">
      <h1 className="text-white text-4xl font-semibold">เริ่มทำแบบประเมิน</h1>
      <p className="text-white/60 text-lg py-4">
        ข้อมูลเหล่านี้จะช่วยให้คำแนะนำที่เหมาะสมกับธุรกิจของคุณ
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  ชื่อ-นามสกุล<span className="text-secondary-color">*</span>
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
                  ชื่อบริษัท<span className="text-secondary-color">*</span>
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
                    <SelectItem value="เจ้าของบริษัท">เจ้าของบริษัท</SelectItem>
                    <SelectItem value="ผู้บริหาร">ผู้บริหาร</SelectItem>
                    <SelectItem value="ฝ่ายขาย">ฝ่ายขาย</SelectItem>
                    <SelectItem value="ฝ่ายกลยุทธ์">ฝ่ายกลยุทธ์</SelectItem>
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
                  จำนวนพนักงาน<span className="text-secondary-color">*</span>
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
                  อุตสาหกรรม<span className="text-secondary-color">*</span>
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
                    <SelectItem value="เครื่องจักร">เครื่องจักร</SelectItem>
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

          <div className="pt-4 text-center md:text-right">
            <Button type="submit" className="p-6 text-lg">
              เริ่มทำแบบประเมิน
            </Button>
          </div>
        </form>
      </Form>
    </Container>
  )
}

export default LeadInfoForm
