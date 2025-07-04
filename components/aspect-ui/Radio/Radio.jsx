'use client'

import React from 'react'
import { cn } from '../../utils/cn'

export const Radio = ({
  id,
  name,
  value,
  label,
  checked,
  className = "",
  labelClassName = "",
  wrapperClassName = "",
  onChange
}) => {
  return (
    <div className={cn('flex items-center', wrapperClassName)}>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={cn('form-radio h-5 w-5 accent-text', className)}
      />
      <label htmlFor={id} className={cn('ml-2 text-text', labelClassName)}>
        {label}
      </label>
    </div>
  )
}
