import React, { Fragment, useContext, useState } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import { InfoPopup, SimpleFooter, SSB_COLORS, SSB_STYLE } from '@statisticsnorway/dapla-js-utilities'

import { LanguageContext } from '../../context/AppContext'
import { SETTINGS, TEST_IDS } from '../../enums'
import ApiSettings from './ApiSettings'

function AppSettings ({ open, setOpen }) {
  const { language } = useContext(LanguageContext)

  const [defaults, setDefaults] = useState(false)
  const [applySettings, setApplySettings] = useState(false)

  return (
    <Modal open={open} style={SSB_STYLE} onClose={() => setOpen(false)}>
      <Header size='large' style={SSB_STYLE}>
        <Icon name='cog' style={{ color: SSB_COLORS.GREEN }} />
        {SETTINGS.HEADER[language]}
      </Header>
      <Modal.Content as={Segment} basic style={SSB_STYLE}>
        {['CONCEPT_LDS', 'EXPLORATION_LDS', 'CATALOG_SERVICE'].map(serviceApi =>
          <Fragment key={serviceApi}>
            <ApiSettings
              api={serviceApi}
              defaults={defaults}
              setDefaults={setDefaults}
              applySettings={applySettings}
              setApplySettings={setApplySettings}
            />
            <Divider hidden />
          </Fragment>
        )}
        <Container style={{ marginTop: '1rem' }}>
          <Divider hidden />
          <Grid columns='equal'>
            <Grid.Column>
              <Button primary size='large' onClick={() => setApplySettings(true)}>
                <Icon name='sync' style={{ paddingRight: '0.5rem' }} />
                {SETTINGS.APPLY[language]}
              </Button>
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <InfoPopup
                position='left center'
                text={SETTINGS.RESET_VALUES[language]}
                trigger={
                  <Icon
                    link
                    fitted
                    name='undo'
                    size='large'
                    style={{ color: SSB_COLORS.BLUE }}
                    onClick={() => setDefaults(true)}
                    data-testid={TEST_IDS.DEFAULT_SETTINGS_VALUES_BUTTON}
                  />
                }
              />
            </Grid.Column>
          </Grid>
        </Container>
      </Modal.Content>
      <Segment basic>
        <SimpleFooter
          language={language}
          appVersion={process.env.REACT_APP_VERSION}
          sourceUrl={process.env.REACT_APP_SOURCE_URL}
        />
      </Segment>
    </Modal>
  )
}

export default AppSettings
