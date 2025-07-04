import React from 'react'
import { cn } from '../../utils/cn'
import { AvatarImage } from './AvatarImage'

export const Avatar = ({
  className = '',
  children,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'relative flex size-12 items-center justify-center rounded-full bg-bg text-text',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children && children}
      {!children && <AvatarImage />}
    </div>
  )
}
