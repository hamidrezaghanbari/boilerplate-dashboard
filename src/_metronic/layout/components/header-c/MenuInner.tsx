import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

const createMenuWithSubmenu = (headerMenu: any, key: number) => (
  <MenuInnerWithSub
    key={key}
    title={headerMenu?.title}
    to={headerMenu?.to}
    fontIcon={headerMenu?.fontIcon}
    hasArrow={headerMenu?.hasArrow}
    menuPlacement={headerMenu?.menuPlacement}
    menuTrigger={headerMenu?.menuTrigger}
  >
    {headerMenu?.submenus?.map((submenu: any, index: number) =>
      !submenu?.submenus ? (
        <MenuItem key={index} title={submenu?.title} to={submenu?.to} />
      ) : (
        createMenuWithSubmenu(submenu, index)
      )
    )}
  </MenuInnerWithSub>
)

export function MenuInner({headerMenus}: {headerMenus?: any}) {
  const intl = useIntl()

  return headerMenus?.map((headerMenu: any, index: number) =>
    !headerMenu?.submenus ? (
      <MenuItem key={index} title={headerMenu?.title} to={headerMenu?.to} />
    ) : (
      createMenuWithSubmenu(headerMenu, index)
    )
  ) ?? null

}
