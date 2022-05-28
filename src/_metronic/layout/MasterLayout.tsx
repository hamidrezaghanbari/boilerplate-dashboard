import {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
// import {AsideDefault} from './components/aside/AsideDefault'
import {AsideDefault} from './components/aside-c/AsideDefault'
import {Footer} from './components/Footer'
// import {HeaderWrapper} from './components/header/HeaderWrapper'
import {HeaderWrapper} from './components/header-c/HeaderWrapper'
import {Toolbar} from './components/toolbar/Toolbar'
import {RightToolbar} from '../partials/layout/RightToolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {useLocation} from 'react-router-dom'
import {DrawerMessenger, ActivityDrawer, Main, InviteUsers, UpgradePlan} from '../partials'
import {MenuComponent} from '../assets/ts/components'
import {useIntl} from 'react-intl'

const MasterLayout = () => {
  const location = useLocation()
  // useEffect(() => {
  //   setTimeout(() => {
  //     MenuComponent.reinitialization()
  //   }, 500)
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     MenuComponent.reinitialization()
  //   }, 500)
  // }, [location.key])

  const intl = useIntl()

  const menus = [
    {
      to: '/home',
      icon: '/media/icons/duotune/art/art002.svg',
      // title: intl.formatMessage({id: 'MENU.DASHBOARD'}),
      title: 'Home',
      fontIcon: 'bi-app-indicator',
    },
    {
      to: '/home',
      icon: '/media/icons/duotune/art/art002.svg',
      // title: intl.formatMessage({id: 'MENU.DASHBOARD'}),
      title: 'Requests',
      fontIcon: 'bi-app-indicator',
    },
    {
      to: '/home',
      icon: '/media/icons/duotune/art/art002.svg',
      // title: intl.formatMessage({id: 'MENU.DASHBOARD'}),
      title: 'Proxy',
      fontIcon: 'bi-app-indicator',
    },
    // {
    //   to: '/builder',
    //   icon: '/media/icons/duotune/general/gen019.svg',
    //   title: 'Layout Builder',
    //   fontIcon: 'bi-layers',
    // },
    // {
    //   to: '/crafted/pages',
    //   title: 'Pages',
    //   fontIcon: 'bi-archive',
    //   icon: '/media/icons/duotune/general/gen022.svg',
    //   submenus: [
    //     {
    //       to: '/crafted/pages/profile',
    //       title: 'tohid',
    //       submenus: [
    //         {to: '/crafted/pages/profile/overview', title: 'Overview'},
    //         {to: '/crafted/pages/profile/overview', title: 'Projects'},
    //         {to: '/crafted/pages/profile/overview', title: 'Tests'},
    //         {to: '/crafted/pages/profile/overview', title: 'Tohid'},
    //       ],
    //     },
    //     {
    //       to: '/crafted/pages/profile',
    //       title: 'Profile',
    //       submenus: [
    //         {to: '/crafted/pages/profile/overview', title: 'Overview'},
    //         {to: '/crafted/pages/profile/overview', title: 'Projects'},
    //         {to: '/crafted/pages/profile/overview', title: 'Tests'},
    //         {to: '/crafted/pages/profile/overview', title: 'Tohid'},
    //       ],
    //     },
    //   ],
    // },
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
            {/* <Toolbar /> */}
            <div className='post d-flex flex-column-fluid' id='kt_post'>
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>

      {/* begin:: Drawers */}
      {/* <ActivityDrawer />
      <RightToolbar />
      <DrawerMessenger /> */}
      {/* end:: Drawers */}

      {/* TODO for modals */}
      {/* begin:: Modals */}
      {/* <Main />
      <InviteUsers />
      <UpgradePlan /> */}
      {/* end:: Modals */}
      {/* TODO for scroll to top */}
      {/* <ScrollTop /> */}
    </PageDataProvider>
  )
}

export {MasterLayout}
