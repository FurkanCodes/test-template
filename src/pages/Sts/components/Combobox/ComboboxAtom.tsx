import { useState } from 'react'
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core'

const groceries = [
  'Test verisi',

]

function ComboboxAtom() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const [value, setValue] = useState<string | null>(null)

  const options = groceries.map(item => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ))

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={val => {
        setValue(val)
        combobox.closeDropdown()
      }}
    >
      <Combobox.Target>
        <InputBase
          component='button'  
          type='button'
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents='none'
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Değer seçin</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}

export default ComboboxAtom
