'use client'
import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { NavbarProvider } from './NavbarContext'

export const Navbar = ({ children, className = '', collapseBreakpoint = 'md', ...rest }) => {
  return (
    <NavbarProvider collapseBreakpoint={collapseBreakpoint}>
      <nav className={cn('relative bg-bg shadow-md', className)} {...rest}>
        {children}
      </nav>
    </NavbarProvider>
  )
}