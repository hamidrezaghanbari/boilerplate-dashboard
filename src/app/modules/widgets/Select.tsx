import {Errors} from './errors'
import {Label} from './label'

interface Props {
  name: string
  label?: string
  wrapperClassName?: string
  className?: string
  labelClassName?: string
  errors?: string[]
  error?: string
  errorClassName?: string
  errorsClassName?: string
  options?: {title: string | number; value: string | number}[]
  otherProps?: any
  register?: any
}

export const Select = ({
  name,
  label,
  wrapperClassName = '',
  className = '',
  labelClassName = '',
  errors = [],
  error = undefined,
  errorClassName = '',
  errorsClassName = '',
  options = [],
  register = null
}: Props) => {
  return (
    <div className={wrapperClassName}>
      <Label label={label} htmlFor={name} labelClassName={labelClassName} />

      <select
        name={name}
        className={`form-select form-select-solid form-select-lg fw-bold ${className}`}
        {...register?.(name)}
      >
        {options?.map((option, idx) => (
          <option key={idx} value={option?.value}>
            {option?.title}
          </option>
        ))}
      </select>

      <Errors
        error={error}
        errors={errors}
        errorClassName={errorClassName}
        errorsClassName={errorsClassName}
      />
    </div>
  )
}
