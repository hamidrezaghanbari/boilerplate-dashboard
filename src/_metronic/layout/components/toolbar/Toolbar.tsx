import React from 'react'
import {useLayout} from '../../core/LayoutProvider'
import {Toolbar1} from './Toolbar1'

// TODO for breadcrumb and toolbars
const Toolbar = () => {
  const {config} = useLayout()

  switch (config.toolbar.layout) {
    // TODO for other toolbars
    case 'toolbar1':
      return <Toolbar1 />
      
      default:
      return <Toolbar1 />
  }
}

export {Toolbar}
