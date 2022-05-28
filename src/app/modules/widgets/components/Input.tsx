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
  errorsClassName = ''
}: Props) => {
  return (
    <div className={`row mb-8 ${wrapperClassName}`}>
      {label && (
        <label className={`col-lg-3 col-form-label ${labelClassName}`} htmlFor={name}>
          {label}
        </label>
      )}

      <div className='col-lg-6 fv-row'>
        <input
          type='text'
          className={`form-control form-control-lg form-control-solid mb-3 mb-lg-0 ${className}`}
          placeholder={placeholder ? placeholder : name}
          name={name}
        />
        <div className={`fv-plugins-message-container ${errorsClassName}`}>
          {[...errors, error]?.map((err, idx) => (
            <div key={idx} className={`fv-help-block ${errorClassName}`}>{err}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
