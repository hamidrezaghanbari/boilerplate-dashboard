import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {Checkbox} from '../modules/widgets/components/Checkbox'
import {Dropdown1} from '../../_metronic/partials'
import {Toggle} from '../modules/widgets/components/Toggle'
import {Input} from '../modules/widgets/components/Input'
import {Select} from '../modules/widgets/components/Select'
import {Table} from '../modules/widgets/components/table/Table'
import {DropDown} from '../modules/widgets/components/DropDown'
import {KTSVG} from '../../_metronic/helpers'
import {Filter} from '../modules/widgets/components/Filter'
import {Button} from '../modules/widgets/components/Button'

const PrivateRoutes = () => {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

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
    <Routes>
      <Route element={<MasterLayout />}>
        <Route
          path='*'
          element={
            <>
              {/* <Checkbox name='notification' />
              <Toggle name='toggle' />
              <Input name='username' />
              <Select name='select' options={[{title: 'option1', value: 'value1'}]} /> */}
              <Table
                title='Title'
                description='Description of all'
                loading={false}
                actions={
                  <div className='card-toolbar'>
                    {/* <FilterItem /> */}
                    {/* <MenuItem /> */}
                    <Button
                      className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                      disabled={false}
                      title='Click me'
                      icon={
                        <KTSVG
                          path='/media/icons/duotune/general/gen031.svg'
                          className='svg-icon-2'
                        />
                      }
                    />
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
          }
        />
        <Route path='*' element={<Dropdown1 />} />
        Redirect to Dashboard after success login/registartion
        {/* <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        /> */}
        {/* Page Not Found */}
        {/* <Route path='*' element={<Navigate to='/error/404' />} />  */}
      </Route>
    </Routes>
  )
}

const SuspensedView: FC = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
