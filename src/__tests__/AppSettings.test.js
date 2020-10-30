import React from 'react'
import useAxios from 'axios-hooks'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import { AppSettings } from '../components'
import { ApiContext, LanguageContext } from '../context/AppContext'
import { TEST_CONFIGURATIONS } from '../configurations'
import { SETTINGS, TEST_IDS } from '../enums'

const { alternativeApi, errorString, language } = TEST_CONFIGURATIONS
const apiContext = TEST_CONFIGURATIONS.apiContext(jest.fn(), jest.fn(), jest.fn(), jest.fn())
const execute = jest.fn()

const setup = () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(
    <ApiContext.Provider value={apiContext}>
      <LanguageContext.Provider value={{ language: language }}>
        <AppSettings open={true} setOpen={jest.fn()} />
      </LanguageContext.Provider>
    </ApiContext.Provider>
  )

  return { getByPlaceholderText, getByTestId, getByText }
}

describe('Common mock', () => {
  beforeEach(() => {
    useAxios.mockReturnValue([{ error: undefined, loading: false }, execute])
  })

  test('Renders correctly', () => {
    const { getByPlaceholderText } = setup()

    expect(getByPlaceholderText(SETTINGS.CONCEPT_LDS_API[language])).toHaveValue(apiContext.URLS.CONCEPT_LDS)
    expect(getByPlaceholderText(SETTINGS.EXPLORATION_LDS_API[language])).toHaveValue(apiContext.URLS.EXPLORATION_LDS)
    expect(getByPlaceholderText(SETTINGS.CATALOG_SERVICE_API[language])).toHaveValue(apiContext.URLS.CATALOG_SERVICE)
  })

  test('Editing values works correctly', async () => {
    const { getByPlaceholderText, getByText } = setup()

    await userEvent.type(getByPlaceholderText(SETTINGS.CONCEPT_LDS_API[language]), alternativeApi)

    expect(getByText(SETTINGS.EDITED_VALUES[language])).toBeInTheDocument()

    userEvent.click(getByText(SETTINGS.APPLY[language]))

    expect(apiContext.SET_URLS.CONCEPT_LDS).toHaveBeenCalled()
  })

  test('Pressing enter edits values and fires apply', async () => {
    const { getByPlaceholderText } = setup()

    await userEvent.type(getByPlaceholderText(SETTINGS.CONCEPT_LDS_API[language]), `${alternativeApi}{enter}`)

    expect(apiContext.SET_URLS.CONCEPT_LDS).toHaveBeenCalled()
  })

  test('Resetting to default values works correctly', async () => {
    const { getByPlaceholderText, getByTestId } = setup()

    await userEvent.type(getByPlaceholderText(SETTINGS.CONCEPT_LDS_API[language]), alternativeApi)

    userEvent.click(getByTestId(TEST_IDS.DEFAULT_SETTINGS_VALUES_BUTTON))

    expect(getByPlaceholderText(SETTINGS.CONCEPT_LDS_API[language])).toHaveValue(apiContext.URLS.CONCEPT_LDS)
  })
})

test('Shows error when there is a problem with an API', () => {
  useAxios.mockReturnValueOnce([{ error: errorString, loading: false }, execute])
  useAxios.mockReturnValueOnce([{ error: undefined, loading: false }, execute])
  useAxios.mockReturnValueOnce([{ error: undefined, loading: false }, execute])

  const { getByText } = setup()

  expect(getByText(errorString)).toBeInTheDocument()
})
