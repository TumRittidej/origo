import { z } from 'zod'

export const quizSchema = z.object({
  q1: z.string().min(1),
  q2: z.string().min(1),
  q3: z.string().min(1),
  q4: z.string().min(1),
  q5: z.string().min(1),
  q6: z.string().min(1),
  q7: z.string().min(1),
  q8: z.string().min(1),
  q9: z.string().min(1),
  q10: z.string().min(1),
  q11: z.string().min(1),
  q12: z.string().min(1),
  q13: z.string().min(1),
  q14: z.string().min(1),
  q15: z.string().min(1),
  q16: z.string().optional()
})

export const defaultQuizSchema = {
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  q6: '',
  q7: '',
  q8: '',
  q9: '',
  q10: '',
  q11: '',
  q12: '',
  q14: '',
  q15: '',
  q16: '',
}