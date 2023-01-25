import React, { InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import s from './Input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, inputRef) => {
  const { className, ...rest } = props
  const baseClassName = cn(s.root, className)

  return (
    <input type='text' ref={inputRef} className={baseClassName} {...rest} />
  )
})

Input.displayName = 'Input'

export default Input
