export const APPS = (environment) => [
  {
    progress: 0,
    name: 'variable-search',
    url: `https://variable-search.${environment}-bip-app.ssb.no`,
    repository: 'https://github.com/statisticsnorway/variable-search',
    description: {
      en: 'This application aims to create an interactive search against the graphql-api exposed by Linked Data Store.',
      nb: 'Denne applikasjonens mål er å tilby et interaktivt søk mot graphql-apiet som eksponeres av Linked Data Store.'
    },
    functionalities: [
      {
        en: 'Searching through domains (spesifically variables and datasets)',
        nb: 'Søke gjennom domener (spesifikt variabler og datasett)'
      },
      {
        en: 'Listing connections between variables and datasets',
        nb: 'Utlisting av koblinger mellom variabler og datasett'
      }
    ]
  },
  {
    progress: 1,
    name: 'user-access-admin',
    url: `https://user-access-admin.${environment}-bip-app.ssb.no`,
    repository: 'https://github.com/statisticsnorway/user-access-admin',
    description: {
      en: 'This application aims to create a user interface against dapla-user-access-service, somewhat supported by dapla-catalog.',
      nb: 'Denne applikasjonens mål er å tilby et grensesnitt mot dapla-user-access-service og tildels mot dapla-catalog.'
    },
    functionalities: [
      {
        en: 'Creating, editing and listing users, groups and roles',
        nb: 'Liste ut, editere og lage brukere, grupper og roller'
      },
      {
        en: 'Checking different access rights on datasets for any given user with any given group/role',
        nb: 'Sjekke tilganger til datasett for en gitt bruker som medlem av en gruppe eller innehaver av en rolle'
      }
    ]
  },
  {
    progress: 0,
    name: 'dapla-metadata-explorer',
    url: `https://metadata-explorer.${environment}-bip-app.ssb.no`,
    repository: 'https://github.com/statisticsnorway/dapla-metadata-explorer',
    description: {
      en: 'This application aims to create a user interface against various metadata exploration services such as exploration-lds.',
      nb: 'Denne applikasjonens mål er å tilby et grensesnitt mot diverse metadatautforskningstjenester som for eksempel exploration-lds.'
    },
    functionalities: [
      {
        en: 'Listing, browsing and exploring metadata',
        nb: 'Liste ut, bla gjennom og utforske metadata'
      }
    ]
  },
  {
    progress: 1,
    name: 'linked-data-store-client',
    url: `https://lds-client.${environment}-bip-app.ssb.no`,
    repository: 'https://github.com/statisticsnorway/linked-data-store-client',
    description: {
      en: 'An application that works as an interface against the objectmodel stored in Linked Data Store.',
      nb: 'Denne applikasjonen tilbyr et grensesnitt mot objektmodellen som er lagret i Linked Data Store.'
    },
    functionalities: [
      {
        en: 'List, browse and make changes to domains in the information model',
        nb: 'Liste ut, bla gjennom og endre domenene i informasjonsmodellen'
      }
    ]
  },
  {
    progress: 0,
    name: 'react-reference-app',
    url: `https://react-reference-app.${environment}-bip-app.ssb.no`,
    repository: 'https://github.com/statisticsnorway/react-reference-app',
    description: {
      en: 'This application and its documentation should be used as a reference when creating new React applications that you want to deploy to BIP.',
      nb: 'Denne applikasjonen med tilhørende dokumentasjon skal brukes som en referanse når man lager nye React applikasjoner som skal rulles ut på BIP.'
    },
    functionalities: []
  }
]
