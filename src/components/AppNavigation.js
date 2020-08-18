import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'semantic-ui-react'

import { LanguageContext } from '../context/AppContext'
import { ROUTING } from '../configurations'
import { SIDEBAR_NAVIGATION } from '../enums'

function AppNavigation ({ activeSidebarItem, setActiveSidebarItem }) {
  const { language } = useContext(LanguageContext)

  return (
    <Breadcrumb>
      <Breadcrumb.Section
        link
        as={Link}
        to={ROUTING.HOME}
        content={SIDEBAR_NAVIGATION.HOME[language]}
        active={activeSidebarItem === 'HOME'}
        onClick={() => setActiveSidebarItem('HOME')}
      />
      {activeSidebarItem !== 'HOME' && Object.entries(ROUTING).filter(([name]) => name === activeSidebarItem).map(([name]) =>
        <Fragment key={name}>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active content={SIDEBAR_NAVIGATION[name][language]} />
        </Fragment>
      )}
    </Breadcrumb>
  )
}

export default AppNavigation
