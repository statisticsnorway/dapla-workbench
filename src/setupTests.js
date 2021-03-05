import '@testing-library/jest-dom/extend-expect'

jest.mock('axios-hooks')

window.__ENV = {
  REACT_APP_ENV: process.env.REACT_APP_ENV,
  REACT_APP_LINEAGE: process.env.REACT_APP_LINEAGE,
  REACT_APP_CATALOG_SERVICE: process.env.REACT_APP_CATALOG_SERVICE,
  REACT_APP_CONCEPT_LDS: process.env.REACT_APP_CONCEPT_LDS,
  REACT_APP_EXPLORATION_LDS: process.env.REACT_APP_EXPLORATION_LDS
}
