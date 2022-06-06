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
  type?: 'input' | 'number'
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
  type = 'input'
}: Props) => {
  return (
    <div className={wrapperClassName}>
      <Label label={label} htmlFor={name} labelClassName={labelClassName} />
      <input
        type={type}
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
