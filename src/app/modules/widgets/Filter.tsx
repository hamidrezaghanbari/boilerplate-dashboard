import {useForm} from 'react-hook-form'
import {Checkbox, Props as CheckboxProp} from './Checkbox'
import {Input} from './Input'
import {Select} from './Select'
import {Toggle, Props as ToggleProp} from './Toggle'
interface Option {
  label: string
  name: string
  type: 'input' | 'number' | 'select' | 'checkboxes' | 'toggles'
  options?: {title: string | number; value: string | number}[]
  checkboxes?: CheckboxProp[]
  toggles?: ToggleProp[]
}
interface Props {
  title?: string
  options?: Option[]
  onApply?: Function
}

export const Filter = ({title, options, onApply}: Props) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  // TODO for type of react hook form
  const optionComponent = (option: Option, register: any) => {
    switch (option?.type) {
      case 'input':
        return (
          <Input
            type={option?.type}
            name={option?.name}
            placeholder={option?.label}
            wrapperClassName='w-100'
            register={register}
          />
        )
      case 'number':
        return (
          <Input
            type={option?.type}
            name={option?.name}
            placeholder={option?.label}
            wrapperClassName='w-100'
            register={register}
          />
        )
      case 'select':
        return (
          <Select
            name={option?.name}
            wrapperClassName='w-100'
            options={option?.options}
            register={register}
          />
        )
      case 'checkboxes':
        return (
          option?.checkboxes?.map((checkbox: CheckboxProp, key: number) => (
            <Checkbox
              className='form-check-input'
              key={key}
              name={checkbox?.name}
              label={checkbox?.label}
              register={register}
            />
          )) ?? null
        )
      case 'toggles':
        return (
          option?.toggles?.map((toggle: ToggleProp, key: number) => (
            <Toggle
              className='form-check-input me-5'
              key={key}
              name={toggle?.name}
              label={toggle?.label}
              register={register}
            />
          )) ?? null
        )
      default:
        return null
    }
  }

  return (
    <form
      onSubmit={handleSubmit((props) => onApply?.(props))}
      className='menu menu-sub menu-sub-dropdown w-250px w-md-300px'
      data-kt-menu='true'
    >
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>{title ? title : 'Filter Options'}</div>
      </div>

      <div className='separator border-gray-200'></div>

      <div className='px-7 py-5'>
        {options?.map((option, key) => (
          <div key={key} className='mb-5'>
            <label className='form-label fw-bold'>{option?.label}</label>

            <div>{optionComponent(option, register)}</div>
          </div>
        ))}

        <div className='d-flex justify-content-end'>
          <button
            type='reset'
            className='btn btn-sm btn-white btn-active-light-primary me-2'
            data-kt-menu-dismiss='true'
          >
            Reset
          </button>

          <button type='submit' className='btn btn-sm btn-primary' data-kt-menu-dismiss='true'>
            Apply
          </button>
        </div>
      </div>
    </form>
  )
}
