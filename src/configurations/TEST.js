import { LANGUAGE } from '@statisticsnorway/dapla-js-utilities'
import { API } from './API'

export const TEST_CONFIGURATIONS = {
  alternativeApi: 'http://localhost:29999',
  apiContext: (fnSetConceptLDS, fnSetExplorationLDS, fnSetCatalogService, fnSetExplorationGraphql) => ({
    URLS: {
      CONCEPT_LDS: window._env.REACT_APP_CONCEPT_LDS,
      EXPLORATION_LDS: window._env.REACT_APP_EXPLORATION_LDS,
      CATALOG_SERVICE: window._env.REACT_APP_CATALOG_SERVICE,
      EXPLORATION_GRAPHQL: `${window._env.REACT_APP_EXPLORATION_LDS}${API.GRAPHQL}`
    },
    SET_URLS: {
      CONCEPT_LDS: fnSetConceptLDS,
      EXPLORATION_LDS: fnSetExplorationLDS,
      CATALOG_SERVICE: fnSetCatalogService,
      EXPLORATION_GRAPHQL: fnSetExplorationGraphql
    }
  }),
  errorString: 'A problem occured',
  language: LANGUAGE.LANGUAGES.NORWEGIAN.languageCode,
  otherLanguage: LANGUAGE.LANGUAGES.ENGLISH.languageCode
}
