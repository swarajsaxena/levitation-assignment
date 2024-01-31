import React, { HTMLProps } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../lib/utils'

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  variant?: {
    default?: string
    disabled?: string
  }
  disabled?: boolean
}

const Label: React.FC<LabelProps> = ({
  className,
  variant,
  children,
  disabled,
  ...props
}) => {
  const labelClasses = cn(
    'text-sm font-medium leading-none',
    disabled && 'cursor-not-allowed opacity-70',
    variant && variant[disabled ? 'disabled' : 'default'],
    className
  )

  return (
    <label
      className={labelClasses}
      {...props}
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.shape({
    default: PropTypes.string,
    disabled: PropTypes.string,
  }),
  children: PropTypes.node,
  disabled: PropTypes.bool,
}

export { Label }
