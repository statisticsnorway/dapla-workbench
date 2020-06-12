import React from 'react'
import { render } from '@testing-library/react'

import { AppSettings } from '../components'
import { LanguageContext } from '../utilities'
import { TEST_CONFIGURATIONS } from '../configurations'
import { SETTINGS } from '../enums'

const { language } = TEST_CONFIGURATIONS

const setup = () => {
  const { getByText } = render(
    <LanguageContext.Provider value={{ language: language }}>
      <AppSettings open={true} setSettingsOpen={jest.fn()} />
    </LanguageContext.Provider>
  )

  return { getByText }
}

test('Renders correctly', () => {
  const { getByText } = setup()

  expect(getByText(SETTINGS.HEADER[language])).toBeInTheDocument()
})
