# dapla-workbench
[![Build Status](https://dev.azure.com/statisticsnorway/Dapla/_apis/build/status/statisticsnorway.dapla-workbench?branchName=master)](https://dev.azure.com/statisticsnorway/Dapla/_build/latest?definitionId=20&branchName=master)

This project aggregates Statistics Norway Dataplatform frontend resources into a common web page to access them easily. 

### References (so-far)
* [dapla-variable-search](https://github.com/statisticsnorway/dapla-variable-search) (integrated)
* [dapla-user-access-admin](https://github.com/statisticsnorway/dapla-user-access-admin) (external)
* [dapla-lineage-viewer](https://github.com/statisticsnorway/dapla-lineage-viewer) (integrated)
* [dapla-catalog-viewer](https://github.com/statisticsnorway/dapla-catalog-viewer) (integrated)
* [dapla-metadata-explorer](https://github.com/statisticsnorway/dapla-metadata-explorer) (external)
* JupyterHub (external)

### Try this application locally
The first time you clone the repository, remember to run `yarn` or `yarn install`.

Run `yarn start` and navigate to `http://localhost:3000/`.

`yarn test` runs all tests and `yarn coverage` calculates (rather unreliably) test coverage.

### Docker locally
* `yarn build`
* `docker build -t dapla-workbench .`
* `docker run -p 8000:80 dapla-workbench:latest`
  * Alternatively with custom environment variables: `docker run -p 8000:80 -e REACT_APP_ENV=staging dapla-workbench:latest`
* Navigate to `http://localhost:8000/`

**Note** that this application requires [dapla-project (localstack)](https://github.com/statisticsnorway/dapla-project/blob/master/localstack/README.md)
running to function locally.
