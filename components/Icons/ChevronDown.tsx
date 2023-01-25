import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: string
}

const ChevronDown = ({
  size = '24',
  focusable = false,
  role = 'presentation',
  ...rest
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role={role}
      aria-hidden={true}
      focusable={focusable}
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...rest}
    >
      <path d='M6 9l6 6 6-6' />
    </svg>
  )
}

export default ChevronDown
