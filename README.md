# AngularLatestTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0-rc.8.

## Getting started

#### Install http-server for local development

Run `npm install -g http-server` to install [http-server](https://github.com/http-party/http-server).

#### Install Trusted Root CA for certificate

##### Note: Must use valid certificate (provided) and not just self signed certificate for the PWA to work properly

##### If you would like to generate your own cert, you can follow the instructions at: https://github.com/jsha/minica. You'll then need to update the provided certs in the ssl folder with your own.

##### Otherwise:

1. Import ssl/root-ca-cert.pem into Third-Party Root Certification Authorities using certmgr

## Build and Run application

#### Note: Automatically builds and starts http-server. Will not update with changes. Must stop and re-run npm start. This is due to it being a PWA.

Run `npm start` to build and run the PWA via [http-server](https://github.com/http-party/http-server).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://cypress.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
