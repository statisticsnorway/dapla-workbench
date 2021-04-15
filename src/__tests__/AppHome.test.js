import { render } from '@testing-library/react'

import { AppHome } from '../components'
import { LanguageContext } from '../context/AppContext'
import { TEST_CONFIGURATIONS } from '../configurations'

const { language } = TEST_CONFIGURATIONS

const setup = () => {
  const { getByText } = render(
      <LanguageContext.Provider value={{ language: language }}>
        <AppHome />
      </LanguageContext.Provider>
  )

  return { getByText }
}

test('Does not crash', () => {
  setup()
})
