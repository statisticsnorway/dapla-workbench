import React, { useState } from 'react'

import { LANGUAGE } from '../enums'

export const LanguageContext = React.createContext(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)

export const AppContextProvider = (props) => {
  const [language, setLanguage] = useState(LANGUAGE.LANGUAGES.NORWEGIAN.languageCode)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
        {props.children}
    </LanguageContext.Provider>
  )
}
