import React, { useContext, useRef, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Menu, Ref, Segment, Sidebar, Sticky } from 'semantic-ui-react'
import { VariableSearch } from '@statisticsnorway/dapla-variable-search'

import { ApiContext, LanguageContext } from './context/AppContext'
import { AppHome, AppSettings, AppSideMenu, AppTopMenu } from './components'
import { ROUTING } from './configurations'

function App () {
  const { URLS } = useContext(ApiContext)
  const { language } = useContext(LanguageContext)

  const appRefArea = useRef()

  const [settingsOpen, setSettingsOpen] = useState(false)
  const [activeSidebarItem, setActiveSidebarItem] = useState('HOME')
  const [appSidebarVisible, setAppSidebarVisible] = useState(false)

  return (
    <>
      <Sidebar.Pushable style={{ transform: 'none' }}>
        <Sticky>
          <Sidebar
            vertical
            as={Menu}
            borderless
            icon='labeled'
            animation='overlay'
            target={appRefArea}
            visible={appSidebarVisible}
            onHide={() => setAppSidebarVisible(false)}
          >
            <AppSideMenu activeSidebarItem={activeSidebarItem} setActiveSidebarItem={setActiveSidebarItem} />
          </Sidebar>
        </Sticky>
        <Sidebar.Pusher>
          <AppTopMenu
            setSettingsOpen={setSettingsOpen}
            activeSidebarItem={activeSidebarItem}
            appSidebarVisible={appSidebarVisible}
            setActiveSidebarItem={setActiveSidebarItem}
            setAppSidebarVisible={setAppSidebarVisible}
          />
          <Ref innerRef={appRefArea}>
            <Segment basic>
              <Switch>
                <Route path={ROUTING.VARIABLE_SEARCH}>
                  <VariableSearch restApi={URLS.EXPLORATION_LDS} language={language} />
                </Route>
                <Route path={ROUTING.HOME}>
                  <AppHome />
                </Route>
              </Switch>
            </Segment>
          </Ref>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <AppSettings open={settingsOpen} setOpen={setSettingsOpen} />
    </>
  )
}

export default App
