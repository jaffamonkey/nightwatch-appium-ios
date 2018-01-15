# nightwatch-example

An example project to illustrate the usage of Nightwatch.js

| dependency  | version |
| -------------: | -------------: |
| nightwatch  | ^0.9.19 |
| selenium-server-standalone | 3.8.1 |
| chromedriver | 2.35 |

# Requirements
* Linux
* Chrome is installed

# Install 
`npm install`

## Run
### chrome
`./node_modules/.bin/nightwatch`
### chrome-headless
`./node_modules/.bin/nightwatch -e chrome-headless`

## Test results are stored in

`/reports`
