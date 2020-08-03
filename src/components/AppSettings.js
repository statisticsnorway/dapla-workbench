import React, { useContext } from 'react'
import { Container, Divider, Header, Icon, List, Modal, Segment } from 'semantic-ui-react'
import { SSB_COLORS, SSB_STYLE } from '@statisticsnorway/dapla-js-utilities'

import { LanguageContext } from '../utilities'
import { SETTINGS } from '../enums'

function AppSettings ({ open, setSettingsOpen }) {
  const { language } = useContext(LanguageContext)

  return (
    <Modal open={open} onClose={() => setSettingsOpen(false)} style={SSB_STYLE}>
      <Header as='h2' style={SSB_STYLE}>
        <Icon name='cog' style={{ color: SSB_COLORS.GREEN }} />
        {SETTINGS.HEADER[language]}
      </Header>
      <Modal.Content as={Segment} basic style={SSB_STYLE}>

      </Modal.Content>
      <Container fluid textAlign='center'>
        <Divider />
        <List horizontal divided link size='small' style={{ marginTop: '3em', marginBottom: '3em' }}>
          <List.Item as='a' href={`${process.env.REACT_APP_SOURCE_URL}`} icon={{ fitted: true, name: 'github' }} />
          <List.Item content={`${SETTINGS.APP_VERSION[language]}: ${process.env.REACT_APP_VERSION}`} />
        </List>
      </Container>
    </Modal>
  )
}

export default AppSettings
