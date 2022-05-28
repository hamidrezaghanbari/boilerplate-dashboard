/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

const createMenuWithSubmenu = (menu: any, index: number) => {
  return (
    <AsideMenuItemWithSub
      key={index}
      to={menu?.to}
      title={menu?.title}
      fontIcon={menu?.fontIcon}
      icon={menu?.icon}
    >
      {menu?.submenus?.map((submenu: any, index: number) =>
        !submenu?.submenus ? (
          <AsideMenuItem key={index} to={submenu?.to} title={submenu?.title} />
        ) : (
          createMenuWithSubmenu(submenu, index)
        )
      )}
    </AsideMenuItemWithSub>
  )
}

export function AsideMenuMain({menus}: {menus?: any}) {
  const intl = useIntl()

  return (
    <>
      {menus?.map((menu: any, index: number) =>
        !menu?.submenus ? (
          <AsideMenuItem
            key={index}
            to={menu?.to}
            icon={menu?.icon}
            title={menu?.title}
            fontIcon={menu?.fontIcon}
          />
        ) : (
          createMenuWithSubmenu(menu, index)
        )
      )}
    </>
  )
}
