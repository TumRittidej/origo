import type { basicInformationSchema } from '../schema'
import { z } from 'zod'

export type BasicInfoFormValues = z.infer<typeof basicInformationSchema>
