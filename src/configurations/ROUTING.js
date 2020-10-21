export const EXTERNAL_SERVICES = environment => [
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
  CATALOG_VIEWER: '/catalog-viewer',
  VARIABLE_SEARCH: '/variable-search',
  LINEAGE_VIEWER: '/lineage'
}
