import React, { useState } from 'react'
import { ClientContext, GraphQLClient } from 'graphql-hooks'
import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'

import { API } from '../configurations'

export const ApiContext = React.createContext({
  CONCEPT_LDS: window._env.REACT_APP_CONCEPT_LDS,
  EXPLORATION_LDS: window._env.REACT_APP_EXPLORATION_LDS,
  CATALOG_SERVICE: window._env.REACT_APP_CATALOG_SERVICE,
  EXPLORATION_GRAPHQL: `${window._env.REACT_APP_EXPLORATION_LDS}${API.GRAPHQL}`
})

export const LanguageContext = React.createContext(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)

export const AppContextProvider = (props) => {
  const [conceptLDS, setConceptLDS] = useState(window._env.REACT_APP_CONCEPT_LDS)
  const [language, setLanguage] = useState(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)
  const [explorationLDS, setExplorationLDS] = useState(window._env.REACT_APP_EXPLORATION_LDS)
  const [catalogService, setCatalogService] = useState(window._env.REACT_APP_CATALOG_SERVICE)
  const [explorationGraphql, setExplorationGraphql] = useState(`${window._env.REACT_APP_EXPLORATION_LDS}${API.GRAPHQL}`)

  const graphqlClient = new GraphQLClient({ url: `${explorationGraphql}` })

  return (
    <ClientContext.Provider value={graphqlClient}>
      <ApiContext.Provider
        value={{
          URLS: {
            CONCEPT_LDS: conceptLDS,
            EXPLORATION_LDS: explorationLDS,
            CATALOG_SERVICE: catalogService,
            EXPLORATION_GRAPHQL: explorationGraphql
          },
          SET_URLS: {
            CONCEPT_LDS: setConceptLDS,
            EXPLORATION_LDS: setExplorationLDS,
            CATALOG_SERVICE: setCatalogService,
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
