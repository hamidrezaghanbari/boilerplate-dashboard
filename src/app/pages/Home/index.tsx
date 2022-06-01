import {KTSVG} from '../../../_metronic/helpers'
import {Checkbox} from '../../modules/widgets/components/Checkbox'
import {DropDown} from '../../modules/widgets/components/DropDown'
import {Filter} from '../../modules/widgets/components/Filter'
import {Input} from '../../modules/widgets/components/Input'
import {Select} from '../../modules/widgets/components/Select'
import { Table } from '../../modules/widgets/components/table/Table'
import {Toggle} from '../../modules/widgets/components/Toggle'

const HomePage = () => {
  const FilterItem = () => {
    return (
      <>
        <button
          disabled={false}
          type='button'
          className='btn btn-light-primary me-3'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-end'
        >
          <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2' />
          Filter
        </button>
        <Filter />
      </>
    )
  }

  const MenuItem = () => {
    return (
      <>
        <button
          type='button'
          className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='top-end'
        >
          <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
        </button>
        <DropDown />
      </>
    )
  }
  return (
    <>
      <Checkbox name='notification' />
      <Toggle name='toggle' />
      <Input name='username' />
      <Select name='select' options={[{title: 'option1', value: 'value1'}]} />
      <Table
        title='Title'
        description='Description of all'
        loading={false}
        actions={
          <div className='card-toolbar'>
            <FilterItem />
            {/* <MenuItem /> */}
            {/* <Button
                      className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                      disabled={false}
                      title='Click me'
                      icon={
                        <KTSVG
                          path='/media/icons/duotune/general/gen031.svg'
                          className='svg-icon-2'
                        />
                      }
                    /> */}
          </div>
        }
        // data={[]}
        data={[
          {
            name: 'Hamidreza',
            family: 'Ghanbari',
            photo: 'photo',
            progress: 'progress',
            action: {
              children: (
                <div className='d-flex justify-content-end align-items-center'>
                  <button className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm ms-2'>
                    View
                  </button>
                  <button className='btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm ms-2'>
                    Edit
                  </button>
                </div>
              ),
            },
          },
        ]}
      />
    </>
  )
}

export default HomePage