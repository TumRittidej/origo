import { z } from 'zod'

export const reserveFormSchema = z.object({
  date: z.date(),
  time: z.string().min(1, 'กรุณาเลือกเวลา')
})

export const defaultReserveSchema = {
  date: new Date(),
  time: '08:00'
}

