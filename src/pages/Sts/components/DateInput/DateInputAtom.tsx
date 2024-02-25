import { useState } from 'react'
import { DateInput, DateTimePicker } from '@mantine/dates'
import 'dayjs/locale/tr';
function DateInputAtom({placeholder}) {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <DateTimePicker locale='tr' clearable value={value} onChange={setValue} placeholder={placeholder} />
  )
}
export default DateInputAtom
