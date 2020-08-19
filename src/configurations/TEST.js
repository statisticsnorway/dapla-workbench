import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'

export const TEST_CONFIGURATIONS = {
  alternativeApi: 'http://localhost:29999',
  apiContext: (fnSetConceptLDS, fnSetExplorationLDS) => ({
    URLS: {
      CONCEPT_LDS: process.env.REACT_APP_CONCEPT_LDS,
      EXPLORATION_LDS: process.env.REACT_APP_EXPLORATION_LDS
    },
    SET_URLS: {
      CONCEPT_LDS: fnSetConceptLDS,
      EXPLORATION_LDS: fnSetExplorationLDS
    }
  }),
  errorString: 'A problem occured',
  language: LANGUAGE.LANGUAGES.NORWEGIAN.languageCode,
  otherLanguage: LANGUAGE.LANGUAGES.ENGLISH.languageCode
}
