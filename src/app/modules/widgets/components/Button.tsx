import { ReactElement } from 'react'

interface Props {
  title?: string | number
  icon?: HTMLElement | ReactElement
  className?: string
  disabled?: boolean
  menuTrigger?: 'click' | 'hover'
  menuPlacement?: 'bottom-end' | 'bottom-start' | 'top-start' | 'top-end'
}

export const Button = ({
  title,
  icon,
  className = '',
  disabled = false,
  menuTrigger,
  menuPlacement,
}: Props) => {
  return (
    <button
      disabled={disabled}
      type='button'
      className={`btn ${className}`}
      {...(menuTrigger && {'data-kt-menu-trigger': menuTrigger})}
      {...(menuPlacement && {'data-kt-menu-placement': menuPlacement})}
    >
      {icon && icon}
      {title ? title : ''}
    </button>
  )
}
