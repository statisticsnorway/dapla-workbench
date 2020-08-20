import React, { useContext, useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import { Container, Form, Icon } from 'semantic-ui-react'
import { ErrorMessage, InfoText, SSB_COLORS } from '@statisticsnorway/dapla-js-utilities'

import { ApiContext, LanguageContext } from '../../context/AppContext'
import { API } from '../../configurations'
import { SETTINGS } from '../../enums'

function ApiSettings ({ api, applySettings, defaults, setApplySettings, setDefaults }) {
  const { language } = useContext(LanguageContext)
  const { URLS, SET_URLS } = useContext(ApiContext)

  const [apiUrl, setApiUrl] = useState(URLS[api])
  const [settingsEdited, setSettingsEdited] = useState(false)

  const [{ error, loading }, execute] = useAxios(`${apiUrl}${API.GET_HEALTH}`, { manual: true, useCache: false })

  const changeSettings = value => {
    setApiUrl(value)
    setDefaults(false)
    setApplySettings(false)
    setSettingsEdited(true)
  }

  useEffect(() => {
    execute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (defaults) {
      setDefaults(false)
      setSettingsEdited(true)
      setApiUrl(process.env['REACT_APP_' + api])
    }
  }, [api, defaults, setDefaults])

  useEffect(() => {
    if (applySettings) {
      execute()
      SET_URLS[api](apiUrl)
      setApplySettings(false)
      setSettingsEdited(false)

      if (api === 'EXPLORATION_LDS') {
        SET_URLS['EXPLORATION_GRAPHQL'](`${apiUrl}${API.GRAPHQL}`)
      }
    }
  }, [api, apiUrl, execute, applySettings, SET_URLS, setApplySettings])

  return (
    <>
      <Form size='large'>
        <Form.Input
          value={apiUrl}
          loading={loading}
          error={!!error && !settingsEdited}
          label={SETTINGS[api + '_API'][language]}
          placeholder={SETTINGS[api + '_API'][language]}
          onChange={(event, { value }) => changeSettings(value)}
          onKeyPress={({ key }) => key === 'Enter' && setApplySettings(true)}
          icon={!loading && !settingsEdited && !error ?
            <Icon name='check' style={{ color: SSB_COLORS.GREEN }} /> : null
          }
        />
      </Form>
      {!loading && !settingsEdited && error && <ErrorMessage error={error} language={language} />}
      {!loading && settingsEdited &&
      <Container style={{ marginTop: '0.5rem' }}>
        <InfoText text={SETTINGS.EDITED_VALUES[language]} />
      </Container>
      }
    </>
  )
}

export default ApiSettings
