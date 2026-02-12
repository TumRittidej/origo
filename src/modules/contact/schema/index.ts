import { timeOptions } from '@/constants/time'
import { z } from 'zod'

export const contactSchema = z.object({
  fullname: z.string().min(1, 'กรุณาระบุชื่อ-นามสกุล'),
  company: z.string().min(1, 'กรุณาระบุชื่อบริษัท'),
  position: z.string().min(1, 'กรุณาเลือกตำแหน่ง'),
  employeeCount: z.string().min(1, 'กรุณาเลือกจำนวนพนักงาน'),
  industry: z.string().min(1, 'กรุณาเลือกอุตสาหกรรม'),
  phone: z.string().optional(),
  email: z.string().email('รูปแบบอีเมลไม่ถูกต้อง'),
  date: z.date(),
  time: z.string().min(1, 'กรุณาเลือกเวลา'),
  acceptPolicy: z.boolean().refine((val) => val === true, {
    message: "กรุณายอมรับเงื่อนไขก่อนส่งแบบฟอร์ม"
  })
})

export const defaultContactValues = {
  fullname: '',
  company: '',
  position: '',
  employeeCount: '',
  industry: '',
  phone: '',
  email: '',
  date: new Date(),
  time: timeOptions[0].value,
  acceptPolicy: false
}