import React from 'react'
import { Card } from 'semantic-ui-react'

import { AppCard } from './'
import { APPS } from '../configurations'

function AppHome () {
  return (
    <Card.Group itemsPerRow={4}>
      {APPS(process.env.REACT_APP_ENV).map(app => <AppCard key={app.name} app={app} />)}
    </Card.Group>
  )
}

export default AppHome
