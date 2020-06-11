import React from 'react'
import { render } from '@testing-library/react'
import useAxios from 'axios-hooks'

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

describe('Common mock', () => {
  useAxios.mockReturnValue([{ loading: false, error: null, response: null }])

  test('Renders basics', () => {
    const { getByText } = setup()

    APPS(process.env.REACT_APP_ENV).forEach(app => {
      expect(getByText(app.name)).toBeInTheDocument()
    })
  })
})
