import {Table} from './Table'
import {fireEvent, logRoles, prettyDOM, render, screen} from '@testing-library/react'

describe('table tests', () => {
  // TODO refactor tests and codes
  // ??? test for skeleton
  describe('skeleton table tests', () => {
    const skeletonItemsCount = 5
    let skeletonRows: HTMLElement[]
    let skeletonHeader: HTMLElement[]

    beforeAll(() => {
      // ** render the table component
      render(
        <Table
          title='Table'
          trSkeletonClassName='skeleton-row'
          loading={true}
          skeletonRowsCount={skeletonItemsCount}
        />
      )

      // ** get skeleton elements
      skeletonRows = screen.queryAllByTestId('skeleton-row')
      skeletonHeader = screen.queryAllByTestId('skeleton-header')
    })

    // ** test loading of table
    test('should show loader when loading table', () => {
      expect(skeletonRows).toHaveLength(skeletonItemsCount)
    })

    // ** test for style of skeleton
    test('should show proper style for skeleton', () => {
      expect(skeletonRows?.[0]).toHaveClass('skeleton-row')
    })

    // ** test header columns
    test('should show proper header columns', () => {
      expect(skeletonHeader).toHaveLength(0)
    })
  })

  // ??? test for table with data empty array
  describe('table tests with data empty array', () => {
    const data: any[] = []
    const columnsData: any[] = ['col 1', 'col 1', 'col 1', 'col 1', 'col 1']
    let rows: HTMLElement[]
    let columns: HTMLElement[]
    let headers: HTMLElement[]
    let message: HTMLElement | null

    beforeAll(() => {
      render(
        <Table
          columns={columnsData}
          title='Table'
          data={data}
          loading={false}
          trClassName='tr-row'
        />
      )

      rows = screen.queryAllByTestId('data-row')
      columns = screen.queryAllByTestId('data-column')
      headers = screen.queryAllByTestId('data-header')
      message = screen.getByText(/Empty table/i)
    })

    // ** table test with at least one row (test row)
    test('should show data table rows', () => {
      expect(rows).toHaveLength(data?.length)
    })

    // ** table test with at least one row (test columns count)
    test('should show table columns', () => {
      expect(columns).toHaveLength(Object.keys(data?.[0] ?? {})?.length)
    })

    // ** show empty data
    test('should show empty table when data is empty array', () => {
      expect(message).not.toBeNull()
    })

    // ** test header columns
    test('should show proper header columns', () => {
      expect(headers).toHaveLength(5)
    })
  })

  // ??? test for table with data
  describe('table tests with data', () => {
    const data = [
      {
        name: 'Hamidreza',
        family: 'Ghanbari',
        photo: {
          title: 'Image',
          desc: 'Description of image',
          image: {path: '/img.png', alt: 'alt txt'},
        },
        progress: {title: '60%', type: 'progress'},
        action: {
          children: (
            <div>
              <button>click</button>
            </div>
          ),
        },
      },
    ]
    let rows: HTMLElement[]
    let columns: HTMLElement[]

    beforeAll(() => {
      render(<Table title='Table' data={data} loading={false} trClassName='tr-row' />)

      rows = screen.queryAllByTestId('data-row')
      columns = screen.queryAllByTestId('data-column')
    })

    // ** table test with at least one row (test row)
    test('should show data table rows', () => {
      expect(rows).toHaveLength(data?.length)
    })

    // ** table test with at least one row (test columns count)
    test('should show table columns', () => {
      expect(columns).toHaveLength(Object.keys(data?.[0] ?? {})?.length)
    })
  })
})
