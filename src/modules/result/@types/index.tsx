import type { reserveFormSchema } from '../schema'
import { z } from 'zod'

export type ReserveFormValues = z.infer<typeof reserveFormSchema>
