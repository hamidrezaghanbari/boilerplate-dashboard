import { Errors } from './errors'
import {Label} from './label'

interface Props {
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
}: Props) => {
  return (
    <div
      className={`form-check form-switch form-switch-sm form-check-custom form-check-solid ${wrapperClassName}`}
    >
      <Label label={label} labelClassName={labelClassName} />
      <input
        className={`form-check-input ${className}`}
        type='checkbox'
        name={name}
        defaultChecked={defaultChecked}
      />
       <Errors
        error={error}
        errors={errors}
        errorClassName={errorClassName}
        errorsClassName={errorsClassName}
      />
    </div>
  )
}
