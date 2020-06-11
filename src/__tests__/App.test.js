import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'
import { AppContextProvider } from '../utilities'
import { TEST_CONFIGURATIONS } from '../configurations'
import { LANGUAGE, SETTINGS, TEST_IDS, UI } from '../enums'

jest.mock('../components/AppHome', () => () => null)

const { language, otherLanguage } = TEST_CONFIGURATIONS

const setup = () => {
  const { getByTestId, getByText } = render(
    <AppContextProvider>
      <App />
    </AppContextProvider>
  )

  return { getByTestId, getByText }
}

test('Renders basics', () => {
  const { getByText } = setup()

  expect(getByText(UI.HEADER[language])).toBeInTheDocument()
})

test('Change language works correctly', () => {
  const { getByText } = setup()

  userEvent.click(getByText(LANGUAGE.ENGLISH[language]))

  expect(getByText(UI.HEADER[otherLanguage])).toBeInTheDocument()
})

test('Opens settings', () => {
  const { getByTestId, getByText } = setup()

  userEvent.click(getByTestId(TEST_IDS.ACCESS_SETTINGS_BUTTON))

  expect(getByText(SETTINGS.HEADER[language])).toBeInTheDocument()
})
