interface Props {
  name: string
  label?: string
  defaultChecked?: boolean
  wrapperClassName?: string
  className?: string
  labelClassName?: string
}

export const Toggle = ({
  name,
  label,
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
        name={name}
        defaultChecked={defaultChecked}
      />
      {label && <label className={`form-check-label ${labelClassName}`}>{label}</label>}
    </div>
  )
}
