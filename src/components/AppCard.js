import React, { useContext, useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import { Card, Divider, Grid, Header, Icon, List } from 'semantic-ui-react'

import { LanguageContext } from '../utilities'
import { API, infoPopup, SSB_COLORS } from '../configurations'
import { UI } from '../enums'

function AppCard ({ app }) {
  const { language } = useContext(LanguageContext)

  const [health, setHealth] = useState(0)

  const [{ loading, error, response }] = useAxios(`${app.url}${API.GET_HEALTH}`)

  useEffect(() => {
    if (!loading && !error && response) {
      setHealth(response.status)
    }

    if (!loading && error) {
      try {
        setHealth(error.response.status)
      } catch (e) {
        console.log(e)
        try {
          setHealth(error)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }, [error, loading, response])

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
          <Grid.Column>
            {loading ? <Icon loading size='large' name='sync alternate' style={{ color: SSB_COLORS.BLUE }} /> :
              <>
                <Icon
                  size='large'
                  name={health === 0 ? 'question' : health === 200 ? 'check' : 'exclamation triangle'}
                  style={{ color: health === 0 ? SSB_COLORS.BLUE : health === 200 ? SSB_COLORS.GREEN : SSB_COLORS.RED }}
                />
                {`(${health})`}
              </>
            }
          </Grid.Column>
          <Grid.Column textAlign='right'>
            {infoPopup(
              UI.GO_TO_APP[language],
              <a href={`${app.url}`} target='_blank' rel='noopener noreferrer'>
                <Icon link size='large' name='external' style={{ color: SSB_COLORS.BLUE }} />
              </a>,
              'bottom right'
            )}
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  )
}

export default AppCard
