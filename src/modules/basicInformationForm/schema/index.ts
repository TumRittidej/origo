import { z } from 'zod'

export const basicInformationSchema = z.object({
  fullname: z.string().min(1, 'กรุณาระบุชื่อ-นามสกุล'),
  company: z.string().min(1, 'กรุณาระบุชื่อบริษัท'),
  position: z.string().min(1, 'กรุณาเลือกตำแหน่ง'),
  employeeCount: z.string().min(1, 'กรุณาเลือกจำนวนพนักงาน'),
  industry: z.string().min(1, 'กรุณาเลือกอุตสาหกรรม'),
  phone: z.string().optional(),
  email: z.string().email('รูปแบบอีเมลไม่ถูกต้อง')
})

export const defaultQuizSchema = {
  fullname: '',
  company: '',
  position: '',
  employeeCount: '',
  industry: '',
  phone: '',
  email: ''
}