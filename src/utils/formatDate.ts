import { format } from "date-fns"
import { th } from "date-fns/locale"

export const formatDate = (date: Date) => {
  if (!date) return '-'
  return format(date, 'dd MMMM yyyy', {
    locale: th
  })
}