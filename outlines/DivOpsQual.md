# Div-Ops Developer

[DivOps](https://www.jonathancreamer.com/announcing-div-ops/) is a play on Developer Operations (DevOps). The focus of DivOps is to build and support Frontend Developer experience. The range consists of maintaining dev servers to supporting CI/CD to maintaining the build system to actually deploying the code to frontend servers.

## Build

- Use ParcelJS to get a project up and running

## Lint

- Add some ESLint rules for your project

## CI/CD

- Setup a test using Github Actions to run every time you push to the main branch and will block you if it fails

## Serverless

- Deploy a Lambda to AWS with SAM
- Run that Lambda locally with SAM CLI

## Monitoring

- Setup Cloudwatch to monitor the health of Lambda
- Setup an alarm for elevated error rates
- Send an email notification if an error rate threshold passes
