import React from 'react'
import { render } from '@testing-library/react'

import { AppHome } from '../components'
import { AppContextProvider } from '../utilities'
import { APPS } from '../configurations'

const setup = () => {
  const { getByText } = render(
    <AppContextProvider>
      <AppHome />
    </AppContextProvider>
  )

  return { getByText }
}

test('Renders basics', () => {
  const { getByText } = setup()

  APPS(process.env.REACT_APP_ENV).forEach(app => {
    expect(getByText(app.name)).toBeInTheDocument()
  })
})
