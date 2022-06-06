import {Errors} from './errors'
import {Label} from './label'

interface Props {
  name: string
  label?: string
  wrapperClassName?: string
  className?: string
  labelClassName?: string
  placeholder?: string
  errors?: string[]
  error?: string
  errorClassName?: string
  errorsClassName?: string
}

export const Input = ({
  name,
  label,
  wrapperClassName = '',
  className = '',
  labelClassName = '',
  placeholder,
  errors = [],
  error = '',
  errorClassName = '',
  errorsClassName = '',
}: Props) => {
  return (
    <div className={`row mb-8 ${wrapperClassName}`}>
      <Label label={label} htmlFor={name} labelClassName={labelClassName} />
      <input
        type='text'
        className={`form-control form-control-lg form-control-solid mb-3 mb-lg-0 ${className}`}
        placeholder={placeholder ? placeholder : name}
        name={name}
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
