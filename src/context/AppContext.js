import React, { useState } from 'react'
import { ClientContext, GraphQLClient } from 'graphql-hooks'
import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'

import { API } from '../configurations'

export const ApiContext = React.createContext({
  CONCEPT_LDS: process.env.REACT_APP_CONCEPT_LDS,
  EXPLORATION_LDS: process.env.REACT_APP_EXPLORATION_LDS,
  EXPLORATION_GRAPHQL: `${process.env.REACT_APP_EXPLORATION_LDS}${API.GRAPHQL}`
})

export const LanguageContext = React.createContext(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)

export const AppContextProvider = (props) => {
  const [conceptLDS, setConceptLDS] = useState(process.env.REACT_APP_CONCEPT_LDS)
  const [language, setLanguage] = useState(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)
  const [explorationLDS, setExplorationLDS] = useState(process.env.REACT_APP_EXPLORATION_LDS)
  const [explorationGraphql, setExplorationGraphql] = useState(`${process.env.REACT_APP_EXPLORATION_LDS}${API.GRAPHQL}`)

  const graphqlClient = new GraphQLClient({ url: `${explorationGraphql}` })

  return (
    <ClientContext.Provider value={graphqlClient}>
      <ApiContext.Provider
        value={{
          URLS: {
            CONCEPT_LDS: conceptLDS,
            EXPLORATION_LDS: explorationLDS,
            EXPLORATION_GRAPHQL: explorationGraphql
          },
          SET_URLS: {
            CONCEPT_LDS: setConceptLDS,
            EXPLORATION_LDS: setExplorationLDS,
            EXPLORATION_GRAPHQL: setExplorationGraphql
          }
        }}
      >
        <LanguageContext.Provider value={{ language, setLanguage }}>
          {props.children}
        </LanguageContext.Provider>
      </ApiContext.Provider>
    </ClientContext.Provider>
  )
}
