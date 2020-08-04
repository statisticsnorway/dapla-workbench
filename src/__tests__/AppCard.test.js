import React from 'react'
import { render } from '@testing-library/react'

import { AppCard } from '../components'
import { AppContextProvider } from '../utilities'
import { APPS, TEST_CONFIGURATIONS } from '../configurations'

const { language } = TEST_CONFIGURATIONS
const app = APPS(process.env.REACT_APP_ENV)[0]

const setup = () => {
  const { getByText } = render(
    <AppContextProvider>
      <AppCard app={app} />
    </AppContextProvider>
  )

  return { getByText }
}

test('Renders basics', () => {
  const { getByText } = setup()

  expect(getByText(app.name)).toBeInTheDocument()
  expect(getByText(app.description[language], { exact: false })).toBeInTheDocument()
  app.functionalities.forEach(functionality => {
    expect(getByText(functionality[language], { exact: false })).toBeInTheDocument()
  })
})
