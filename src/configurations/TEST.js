import { LANGUAGE } from '../enums'

const errorString = 'A problem occured'

export const TEST_CONFIGURATIONS = {
  errorHeader: 'Error header',
  errorString: errorString,
  errorObject: { response: { data: errorString } },
  errorStatus: { response: { statusText: errorString } },
  language: LANGUAGE.LANGUAGES.NORWEGIAN.languageCode,
  objectToString: '[object Object]',
  otherLanguage: LANGUAGE.LANGUAGES.ENGLISH.languageCode
}
