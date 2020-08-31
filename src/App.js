import React, { useContext, useEffect, useRef, useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Menu, Ref, Segment, Sidebar, Sticky } from 'semantic-ui-react'
import { CatalogViewer } from '@statisticsnorway/dapla-catalog-viewer'
import { VariableSearch } from '@statisticsnorway/dapla-variable-search'

import { ApiContext, LanguageContext } from './context/AppContext'
import { AppHome, AppSettings, AppSideMenu, AppTopMenu } from './components'
import { ROUTING } from './configurations'

function App () {
  const { pathname } = useLocation()
  const { URLS } = useContext(ApiContext)
  const { language } = useContext(LanguageContext)

  const appRefArea = useRef()

  const [settingsOpen, setSettingsOpen] = useState(false)
  const [activeSidebarItem, setActiveSidebarItem] = useState('HOME')
  const [appSidebarVisible, setAppSidebarVisible] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      const currentPath = Object.entries(ROUTING).filter((value) => value[1] === pathname)

      if (currentPath.length <= 1) {
        setActiveSidebarItem(currentPath[0][0])
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            context={appRefArea}
          />
          <Ref innerRef={appRefArea}>
            <Segment basic>
              <Switch>
                <Route path={ROUTING.CATALOG_VIEWER}>
                  <CatalogViewer restApi={URLS.CATALOG_SERVICE} language={language} />
                </Route>
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
