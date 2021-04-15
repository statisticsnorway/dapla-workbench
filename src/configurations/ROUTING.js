export const EXTERNAL_SERVICES = environment => [
  {
    name: 'dapla-user-access-admin',
    url: `https://dapla-user-access-admin.${environment}-bip-app.ssb.no`
  },
  {
    name: 'dapla-metadata-explorer',
    url: `https://metadata-explorer.${environment}-bip-app.ssb.no`
  },
  {
    name: 'dapla-metadata-webview',
    url: `https://dapla-metadata-webview.${environment}-bip-app.ssb.no`
  },
  {
    name: 'dapla-migration-webclient',
    url: `https://dapla-migration-webclient.${environment}-bip-app.ssb.no`
  },
  {
    name: 'JupyterHub',
    url: `https://jupyter.${environment}-bip-app.ssb.no`
  }
]
