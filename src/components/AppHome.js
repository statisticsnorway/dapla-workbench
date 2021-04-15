import { List, Segment } from 'semantic-ui-react'

import { EXTERNAL_SERVICES } from '../configurations'

function AppHome () {
  return (
    <Segment basic>
      <List relaxed="very">
        {EXTERNAL_SERVICES(window.__ENV.REACT_APP_ENV).map(({ name, url }) =>
          <List.Item key={name}>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              {name}
            </a>
          </List.Item>
        )}
      </List>
    </Segment>
  )
}

export default AppHome
