import type { contactSchema } from '../schema'
import { z } from 'zod'

export type ContactFormValues = z.infer<typeof contactSchema>
