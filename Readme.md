### What it contains

This project contains e2e tests for sauce demo
1. Credentials and other data taken from Cypress.env. Alternatively, cypress.config.js can also be configured with base url based on environment in CI from process.env. For now they have been hardcoded in the env file
2. Locators are stored inside pages.
3. repeated steps like checkout, login have been stored as cypress commands and it accepts parameters.
4. Actual e2e test file is within the e2e folder


### How to run
Rename all the .txt files to .js files. This was done to be accepted as an attachment in the email
```
cd /{path}/foretehealth
npm i
npx cypress run --headed --browser=chrome
```