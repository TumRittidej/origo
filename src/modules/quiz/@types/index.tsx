import type { quizSchema } from '../schema'
import { z } from 'zod'

export type QuizFormValues = z.infer<typeof quizSchema>
