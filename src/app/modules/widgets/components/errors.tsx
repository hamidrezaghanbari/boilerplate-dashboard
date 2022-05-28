interface Props {
  errors?: string[]
  error?: string
  errorsClassName?: string
  errorClassName?: string
}

export const Errors = ({errors = [], error = undefined, errorsClassName = '', errorClassName = ''}: Props) => {
  return (
    <div className={`fv-plugins-message-container ${errorsClassName}`}>
      {[...errors, error]?.map((err, idx) => (
        <div key={idx} className={`fv-help-block ${errorClassName}`}>
          {err}
        </div>
      ))}
    </div>
  )
}
