import React from 'react'
import { render } from '@testing-library/react'
import useAxios from 'axios-hooks'

import { AppCard } from '../components'
import { AppContextProvider } from '../utilities'
import { APPS, TEST_CONFIGURATIONS } from '../configurations'

const { errorString, language } = TEST_CONFIGURATIONS
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
  useAxios.mockReturnValue([{ loading: false, error: null, response: { status: 200 } }])
  const { getByText } = setup()

  expect(getByText(app.name)).toBeInTheDocument()
  expect(getByText(app.description[language], { exact: false })).toBeInTheDocument()
  app.functionalities.forEach(functionality => {
    expect(getByText(functionality[language], { exact: false })).toBeInTheDocument()
  })
})

test('Shows broken health', () => {
  useAxios.mockReturnValue([{ loading: false, error: { response: { status: 500 } }, response: null }])
  const { getByText } = setup()

  expect(getByText(`(${500})`)).toBeInTheDocument()
})

test('Shows error retrieving health', () => {
  useAxios.mockReturnValue([{ loading: false, error: errorString, response: null }])
  const { getByText } = setup()

  expect(getByText(`(${errorString})`)).toBeInTheDocument()
})
