import React, { useContext } from 'react'
import { Dropdown, Header, Image, Menu } from 'semantic-ui-react'

import SSBLogo from '../media/ssb-logo-rgb.svg'
import { LanguageContext } from '../utilities'
import { SSB_COLORS } from '../configurations'
import { LANGUAGE, TEST_IDS, UI } from '../enums'

function AppMenu ({ setSettingsOpen }) {
  const { language, setLanguage } = useContext(LanguageContext)

  const dropdownItems = Object.keys(LANGUAGE.LANGUAGES).map(languageName =>
    <Dropdown.Item
      key={languageName}
      content={LANGUAGE[languageName][language]}
      onClick={() => setLanguage(LANGUAGE.LANGUAGES[languageName].languageCode)}
    />
  )

  return (
    <Menu secondary size='huge' style={{ padding: '1em', paddingTop: '2em' }}>
      <Menu.Item><Image size='medium' src={SSBLogo} /></Menu.Item>
      <Menu.Item><Header size='huge' content={UI.HEADER[language]} /></Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          style={{ color: SSB_COLORS.GREEN }}
          onClick={() => setSettingsOpen(true)}
          icon={{ name: 'setting', size: 'big', 'data-testid': TEST_IDS.ACCESS_SETTINGS_BUTTON }}
        />
        <Dropdown item text={`${LANGUAGE.LANGUAGE[language]} (${LANGUAGE.LANGUAGE_CHOICE[language]})`}>
          <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}

export default AppMenu
