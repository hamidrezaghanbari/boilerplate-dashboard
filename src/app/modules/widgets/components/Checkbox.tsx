interface Props {
  name: string
  label?: string
  defaultChecked?: boolean
  wrapperClassName?: string
  className?: string
  labelClassName?: string
}

export const Checkbox = ({
  name,
  label,
  defaultChecked = false,
  wrapperClassName = '',
  className = '',
  labelClassName = '',
}: Props) => {
  return (
    <div className={`form-check form-check-custom form-check-solid me-5 ${wrapperClassName}`}>
      <input
        className={`form-check-input ${className}`}
        defaultChecked={defaultChecked}
        type='checkbox'
        name={name}
        id={name}
      />

      {label && (
        <label htmlFor={name} className={`form-check-label ${labelClassName}`}>
          {label}
        </label>
      )}
    </div>
  )
}
