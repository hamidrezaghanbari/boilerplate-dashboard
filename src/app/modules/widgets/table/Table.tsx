import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Button} from '../Button'
import {Tr} from './Tr'

interface Props {
  title: string
  description?: string
  actions?: any
  loading?: boolean
  data?: any[]
  columns?: any[]
  skeletonRowsCount?: number
  trClassName?: string
  trSkeletonClassName?: string
  tdClassName?: string
  tdSkeletonClassName?: string
}

export const Table = ({
  title,
  description = '',
  actions,
  loading = false,
  skeletonRowsCount = 5,
  data = [],
  columns,
  trClassName = '',
  trSkeletonClassName = '',
  tdClassName = '',
  tdSkeletonClassName = '',
}: Props) => {
  const tableColumns = !!columns?.length ? columns : Object.keys(data?.[0] ?? {})

  return (
    <>
      <div className='card'>
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>{title}</span>
            {description && <span className='text-muted mt-1 fw-bold fs-7'>{description}</span>}
          </h3>
          {actions && actions}
        </div>

        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}

              <thead>
                <tr className='fw-bolder text-muted'>
                  {tableColumns?.map((column, idx) => (
                    <th
                      data-testid={`${loading ? 'skeleton' : 'data'}-header`}
                      key={idx}
                      className={`${tableColumns?.length - 1 === idx ? 'text-end' : ''}`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* begin::Table body */}
              <tbody>
                {(loading ? Array.from({length: skeletonRowsCount}) : data)?.map((row, idx) => (
                  <Tr
                    row={row}
                    className={trClassName}
                    trSkeletonClassName={trSkeletonClassName}
                    key={idx}
                    loading={loading}
                  />
                ))}

                {data?.length === 0 && !loading && (
                  <tr>
                    <td>Empty table</td>
                  </tr>
                )}
              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>

          {/* end::Table container */}
        </div>
      </div>
      {/* TODO make it as component for table */}
      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>
        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>
          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>
          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>
          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
