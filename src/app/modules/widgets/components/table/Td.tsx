interface Props {
  loading: boolean
  className?: string
  skeletonClassName?: string
  column?: any
  value?: any
}

export const Td = ({
  loading = false,
  className = '',
  skeletonClassName = '',
  column,
  value,
}: Props) => {
  return (
    <td
      className={loading ? skeletonClassName : className}
      data-testid={`${loading ? 'skeleton' : 'data'}-column`}
    >
      {!!value?.children ? value?.children : typeof value === 'string' ? value : null}
    </td>
  )
}
