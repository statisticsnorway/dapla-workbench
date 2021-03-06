# dapla-workbench

[![Build Status](https://dev.azure.com/statisticsnorway/Dapla/_apis/build/status/statisticsnorway.dapla-workbench?branchName=master)](https://dev.azure.com/statisticsnorway/Dapla/_build/latest?definitionId=20&branchName=master)

This project aggregates Statistics Norway Data Platform frontend resources into a common web page to access them easily.

### References (so-far)

* [dapla-user-access-admin](https://github.com/statisticsnorway/dapla-user-access-admin) (external)
* [dapla-metadata-explorer](https://github.com/statisticsnorway/dapla-metadata-explorer) (external)
* [dapla-migration-webclient](https://github.com/statisticsnorway/dapla-migration-webclient) (external)
* [dapla-metadata-webview](https://github.com/statisticsnorway/dapla-metadata-webview) (external)
* JupyterHub (external)

### Try this application locally

The first time you clone the repository, remember to run `yarn` or `yarn install`.

Run `yarn start` and navigate to `http://localhost:3000/`.

`yarn test` runs all tests and `yarn coverage` calculates (rather unreliably) test coverage.

### Docker locally

* `yarn build`
* `docker build -t dapla-workbench .`
* `docker run -p 8000-8001:8180-8181 dapla-workbench:latest`
    * Alternatively with custom environment
      variables: `docker run -p 8000-8001:8180-8181 -e REACT_APP_ENV=staging dapla-workbench:latest`
* Navigate to `http://localhost:8000/` for app or `http://localhost:8001/metrics` for metrics
