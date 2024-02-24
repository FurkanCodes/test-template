import { useState } from 'react'
import { DateInput } from '@mantine/dates'

function DateInputAtom() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <DateInput value={value} onChange={setValue} placeholder='Sisteme Giriş' />
  )
}
export default DateInputAtom
