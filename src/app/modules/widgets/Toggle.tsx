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

export const Toggle = ({
  name,
  label,
  defaultChecked = false,
  wrapperClassName = '',
  className = '',
  labelClassName = '',
  errors = [],
  error = undefined,
  errorClassName = '',
  errorsClassName = '',
  register = null
}: Props) => {
  return (
    <label
      className={`form-check form-switch form-switch-sm form-check-custom form-check-solid ${wrapperClassName}`}
    >
      <input
        className={`form-check-input ${className}`}
        type='checkbox'
        name={name}
        defaultChecked={defaultChecked}
        {...register?.(name)}
      />
      <Label label={label} labelClassName={`form-check-label ${labelClassName}`} />
      <Errors
        error={error}
        errors={errors}
        errorClassName={errorClassName}
        errorsClassName={errorsClassName}
      />
    </label>
  )
}
