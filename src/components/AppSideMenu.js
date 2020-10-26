import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Header, Icon, Menu } from 'semantic-ui-react'

import { LanguageContext } from '../context/AppContext'
import { EXTERNAL_SERVICES, ROUTING, SIDEBAR_NAVIGATION_STYLE } from '../configurations'
import { SIDEBAR_NAVIGATION, UI } from '../enums'

function AppSideMenu ({ activeSidebarItem, setActiveSidebarItem, setAppSidebarVisible }) {
  const { language } = useContext(LanguageContext)

  return (
    <>
      <Menu.Item>
        <Menu.Header as={Header} size='medium' content={UI.SIDEBAR_NAVIGATION_HEADER[language]} />
      </Menu.Item>
      {Object.entries(ROUTING).map(([name, route]) =>
        <Menu.Item
          as={Link}
          to={route}
          key={name}
          name={name}
          active={activeSidebarItem === name}
          onClick={() => {
            setActiveSidebarItem(name)
            setAppSidebarVisible(false)
          }}
        >
          <Icon name={SIDEBAR_NAVIGATION_STYLE[name].icon} style={{ color: SIDEBAR_NAVIGATION_STYLE[name].color }} />
          {SIDEBAR_NAVIGATION[name][language]}
        </Menu.Item>
      )}
      <Divider />
      <Menu.Item>
        <Menu.Header as={Header} size='medium' content={UI.SIDEBAR_SERVICES_HEADER[language]} />
      </Menu.Item>
      {EXTERNAL_SERVICES(window._env.REACT_APP_ENV).map(({ name, url }) =>
        <Menu.Item key={name}>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {name}
          </a>
        </Menu.Item>
      )}
    </>
  )
}

export default AppSideMenu
