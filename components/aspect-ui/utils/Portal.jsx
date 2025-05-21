'use client'

import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children }: { children }) => {
  return createPortal(children, document.body)
}
