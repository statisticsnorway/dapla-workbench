import React, { useContext } from 'react'
import { Card, Divider, Grid, Header, Icon, List } from 'semantic-ui-react'
import { InfoPopup, SSB_COLORS } from '@statisticsnorway/dapla-js-utilities'

import { LanguageContext } from '../utilities'
import { UI } from '../enums'

function AppCard ({ app }) {
  const { language } = useContext(LanguageContext)

  return (
    <Card raised fluid>
      <Card.Content>
        <Card.Header as={Header} size='large'>{app.name}</Card.Header>
        <Card.Meta>{`${UI.STATUS[language]}: ${UI.PROGRESS[app.progress][language]}`}</Card.Meta>
        <Card.Description>
          <Divider hidden />
          {app.description[language]}
          <Divider hidden />
          {app.functionalities.length >= 1 &&
          <>
            {`${UI.FUNCTIONALITY_INCLUDES[language]}:`}
            <List bulleted key={app.name}>
              {app.functionalities.map((functionality, index) =>
                <List.Item key={index}>{functionality[language]}</List.Item>
              )}
            </List>
            <Divider hidden />
          </>
          }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid columns='equal'>
          <Grid.Column />
          <Grid.Column textAlign='right'>
            <InfoPopup
              position='bottom right'
              text={UI.GO_TO_APP[language]}
              trigger={
                <a href={`${app.url}`} target='_blank' rel='noopener noreferrer'>
                  <Icon link size='large' name='external' style={{ color: SSB_COLORS.BLUE }} />
                </a>
              }
            />
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

export default AppCard
