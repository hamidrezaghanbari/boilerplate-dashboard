interface Props {
  label?: string
  labelClassName?: string
  htmlFor?: string
}
export const Label = ({label, labelClassName, htmlFor}: Props) => {
  return label ? (
    <label className={`col-lg-3 col-form-label ${labelClassName}`} htmlFor={htmlFor}>
      {label}
    </label>
  ) : null
}
