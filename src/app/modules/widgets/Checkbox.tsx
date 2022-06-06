import {Errors} from './errors'
import {Label} from './label'

export interface Props {
  name: string
  label?: string
  defaultChecked?: boolean
  wrapperClassName?: string
  className?: string
  labelClassName?: string
  errors?: string[]
  error?: string
  errorClassName?: string
  errorsClassName?: string
  otherProps?: any
  register?: any
}

export const Checkbox = ({
  name,
  label,
  defaultChecked = false,
  wrapperClassName = '',
  className = '',
  labelClassName = '',
  errors = [],
  error = '',
  errorClassName = '',
  errorsClassName = '',
  register = null
}: Props) => {
  return (
    <label className={`form-check form-check-custom form-check-solid me-5 ${wrapperClassName}`}>
      <input
        className={`form-check-input ${className}`}
        defaultChecked={defaultChecked}
        type='checkbox'
        name={name}
        id={name}
        {...(register?.(name) ?? {})}
      />

      <Label label={label} htmlFor={name} labelClassName={`form-check-label ${labelClassName}`} />

      <Errors
        error={error}
        errors={errors}
        errorClassName={errorClassName}
        errorsClassName={errorsClassName}
      />
    </label>
  )
}
