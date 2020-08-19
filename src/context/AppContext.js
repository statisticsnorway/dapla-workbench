import React, { useState } from 'react'
import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'

export const ApiContext = React.createContext({
  CONCEPT_LDS: process.env.REACT_APP_CONCEPT_LDS,
  EXPLORATION_LDS: process.env.REACT_APP_EXPLORATION_LDS
})

export const LanguageContext = React.createContext(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)

export const AppContextProvider = (props) => {
  const [conceptLDS, setConceptLDS] = useState(process.env.REACT_APP_CONCEPT_LDS)
  const [explorationLDS, setExplorationLDS] = useState(process.env.REACT_APP_EXPLORATION_LDS)
  const [language, setLanguage] = useState(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)

  return (
    <ApiContext.Provider
      value={{
        URLS: {
          CONCEPT_LDS: conceptLDS,
          EXPLORATION_LDS: explorationLDS
        },
        SET_URLS: {
          CONCEPT_LDS: setConceptLDS,
          EXPLORATION_LDS: setExplorationLDS
        }
      }}
    >
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </ApiContext.Provider>
  )
}
