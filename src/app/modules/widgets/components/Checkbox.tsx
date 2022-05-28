interface Props {
  name: string
  label?: string
  value?: string
  defaultChecked?: boolean
  wrapperClassName?: string
  className?: string
  labelClassName?: string
}

export const Checkbox = ({
  name,
  label,
  value = '',
  defaultChecked = false,
  wrapperClassName = '',
  className = '',
  labelClassName = '',
}: Props) => {
  return (
    <div
      className={`form-check form-switch form-switch-sm form-check-custom form-check-solid ${wrapperClassName}`}
    >
      <input
        className={`form-check-input ${className}`}
        type='checkbox'
        value={value}
        name={name}
        defaultChecked={defaultChecked}
      />
      {label && <label className={`form-check-label ${labelClassName}`}>{label}</label>}
    </div>
  )
}
