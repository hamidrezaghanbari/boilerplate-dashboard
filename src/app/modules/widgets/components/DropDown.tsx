export const DropDown = () => {
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px'
      data-kt-menu='true'
    >
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <div className='menu-content fs-6 text-dark fw-bolder px-3 py-4'>Quick Actions</div>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu separator */}
      <div className='separator mb-3 opacity-75'></div>
      {/* end::Menu separator */}
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <a href='#' className='menu-link px-3'>
          New Ticket
        </a>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <a href='#' className='menu-link px-3'>
          New Customer
        </a>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div
        className='menu-item px-3'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='right-start'
        data-kt-menu-flip='left-start, top'
      >
        {/* begin::Menu item */}
        <a href='#' className='menu-link px-3'>
          <span className='menu-title'>New Group</span>
          <span className='menu-arrow'></span>
        </a>
        {/* end::Menu item */}
        {/* begin::Menu sub */}
        <div className='menu-sub menu-sub-dropdown w-175px py-4'>
          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-3'>
              Admin Group
            </a>
          </div>
          {/* end::Menu item */}
          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-3'>
              Staff Group
            </a>
          </div>
          {/* end::Menu item */}
          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-3'>
              Member Group
            </a>
          </div>
          {/* end::Menu item */}
        </div>
        {/* end::Menu sub */}
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <a href='#' className='menu-link px-3'>
          New Contact
        </a>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu separator */}
      <div className='separator mt-3 opacity-75'></div>
      {/* end::Menu separator */}
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <div className='menu-content px-3 py-3'>
          <a className='btn btn-primary btn-sm px-4' href='#'>
            Generate Reports
          </a>
        </div>
      </div>
      {/* end::Menu item */}
    </div>
  )
}
