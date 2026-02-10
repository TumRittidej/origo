import { timeOptions } from '@/constants/time'
import { z } from 'zod'

export const reserveFormSchema = z.object({
  date: z.date(),
  time: z.string().min(1, 'กรุณาเลือกเวลา')
})

export const defaultReserveValues = {
  date: new Date(),
  time: timeOptions[0].value
}

