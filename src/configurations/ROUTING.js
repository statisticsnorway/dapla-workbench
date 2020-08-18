export const EXTERNAL_SERVICES = environment => [
  {
    name: 'variable-search',
    url: `https://variable-search.${environment}-bip-app.ssb.no`
  },
  {
    name: 'user-access-admin',
    url: `https://user-access-admin.${environment}-bip-app.ssb.no`
  },
  {
    name: 'dapla-metadata-explorer',
    url: `https://metadata-explorer.${environment}-bip-app.ssb.no`
  },
  {
    name: 'linked-data-store-client',
    url: `https://lds-client.${environment}-bip-app.ssb.no`
  },
  {
    name: 'JupyterHub',
    url: `https://jupyter.${environment}-bip-app.ssb.no`
  }
]

export const ROUTING = {
  HOME: '/',
  VARIABLE_SEARCH: '/variable-search'
}
