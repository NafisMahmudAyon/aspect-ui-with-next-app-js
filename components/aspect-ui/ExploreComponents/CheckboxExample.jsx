import { Checkbox } from '../Checkbox'
import React from 'react'

const CheckboxExample = () => {
  return (
    <div>
      <fieldset className="flex items-center gap-2">
        <Checkbox checked={true} label='Apple' />
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox checked={true} label="Banana" />
      </fieldset>
      <fieldset className="flex items-center gap-2">
        <Checkbox checked={true} label="Orange" />
      </fieldset>
    </div>
  )
}

export default CheckboxExample