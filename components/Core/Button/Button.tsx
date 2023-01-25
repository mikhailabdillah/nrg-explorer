import React, { ButtonHTMLAttributes, JSXElementConstructor } from 'react'
import cn from 'classnames'
import s from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  type?: 'button' | 'reset' | 'submit'
  variant?: 'primary'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component?: string | JSXElementConstructor<any>
}

const Button: React.FC<ButtonProps> = ({
  className,
  type = 'button',
  Component = 'button',
  variant,
  children,
  ...rest
}) => {
  const baseClassName = cn(
    s.root,
    {
      [s.primary]: variant === 'primary',
    },
    className
  )

  return (
    <Component type={type} className={baseClassName} {...rest}>
      {children}
    </Component>
  )
}

export default Button
