import {Outlet} from 'react-router-dom'
import {AsideDefault} from './components/aside-c/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header-c/HeaderWrapper'
import {Toolbar} from './components/toolbar/Toolbar'
import {Content} from './components/Content'
import {PageDataProvider} from './core'

const MasterLayout = () => {

  const menus = [
    {
      to: '/home',
      icon: '/media/icons/duotune/art/art002.svg',
      title: 'Home',
      fontIcon: 'bi-app-indicator',
    },
    {
      to: '/home',
      icon: '/media/icons/duotune/art/art002.svg',
      title: 'Requests',
      fontIcon: 'bi-app-indicator',
    },
    {
      to: '/home',
      icon: '/media/icons/duotune/art/art002.svg',
      title: 'Proxy',
      fontIcon: 'bi-app-indicator',
    },
  ]

  const headerMenus = [
    {
      title: 'Layout Builder',
      to: '/sss',
      menuPlacement: 'bottom-start',
      menuTrigger: `hover`,
      submenus: [
        {
          title: 'Layout Builder',
          to: '/builder',
        },
        {
          title: 'Layout Builder',
          to: '/builder',
        },
        {
          title: 'Layout Builder',
          to: '/builder',
          hasArrow: true,
          menuPlacement: 'right-start',
          menuTrigger: `{default:'click', lg: 'hover'}`,
          submenus: [
            {
              title: 'Layout Builder',
              to: '/builder',
            },
            {
              title: 'Layout Builder',
              to: '/builder',
            },
            {
              title: 'Layout Builder',
              to: '/builder',

              hasArrow: true,
              menuPlacement: 'right-start',
              menuTrigger: `{default:'click', lg: 'hover'}`,
              submenus: [
                {
                  title: 'Layout Builder',
                  to: '/builder',
                },
                {
                  title: 'Layout Builder',
                  to: '/builder',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Admin',
      to: '/ff',
    },
    {
      title: 'About me',
      to: '/fdas',
    },
    {
      title: 'From Iran',
      to: '/who',
    },
  ]

  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <AsideDefault
          logoImagePath='/media/logos/logo-1-dark.svg'
          logoLink='/dashboard'
          menus={menus}
        />
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          <HeaderWrapper headerMenus={headerMenus} />

          <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
            {/* toolbar and breadcrumb */}
            <Toolbar />
            {/* body of the page */}
            <div className='post d-flex flex-column-fluid' id='kt_post'>
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </PageDataProvider>
  )
}

export {MasterLayout}
