import {Td} from './Td'

interface Props {
  loading: boolean
  className?: string
  trSkeletonClassName?: string
  row?: any[]
  tdClassName?: string
  tdSkeletonClassName?: string
}
export const Tr = ({
  loading = false,
  className = '',
  trSkeletonClassName = '',
  row,
  tdClassName = '',
  tdSkeletonClassName = '',
}: Props) => {
  const columns = Object.entries(row ?? {})

  return (
    <tr
      className={loading ? trSkeletonClassName : className}
      data-testid={`${loading ? 'skeleton' : 'data'}-row`}
    >
      {columns?.map(([key, value], idx) => {
        return (
          <Td
            column={key}
            value={value}
            key={idx}
            loading={loading}
            className={`${tdClassName} ${columns?.length - 1 === idx ? 'text-end' : ''}`}
            skeletonClassName={tdSkeletonClassName}
          />
        )
      })}
    </tr>
  )
}
