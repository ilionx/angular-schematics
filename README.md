# @ilionx/angular-schematics

Useful schematics for Angular and Ionic projects.

This project uses [Lerna](https://github.com/lerna/lerna) with [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/.)

## Packages

This is a monorepo which contains many schematic related packages:

| Project                     | Package                                                                                        | Version                                                                                                                                         | Links                                                                                                     |
| --------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **app-center-build-config** | [`@ilionx/app-center-build-config`](https://npmjs.com/package/@ilionx/app-center-build-config) | [![latest](https://img.shields.io/npm/v/@ilionx/app-center-build-config/latest.svg)](https://npmjs.com/package/@ilionx/app-center-build-config) | [![README](https://img.shields.io/badge/-README-brightgreen)](packages/app-center-build-config/README.md) |

## Getting Started - Local Development

### Installation

To get started locally, follow these instructions:

1. Clone this repo.
1. Make sure that you have NodeJS LTS or later installed. See instructions [here](https://nodejs.org/en/download/).
1. Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
1. Run `yarn` (no arguments) from the root of your clone of this project. This will install all the dependencies for your configured workspaces.

### Sandbox project

The sandbox is a version controlled directory and contains an Ionic + Capacitor application with Angular as Framework.

For testing and development, you can execute your schematic against the application in the sandbox. Check out [this post on using a sandbox to develop an Angular Schematic](https://www.kevinschuchard.com/blog/2018-11-20-schematic-sandbox/).

#### Sandbox Preparation

1. Run `yarn` (no arguments) from the root.
1. Run the specific schematic in the `sandbox` directory. E.g.: `yarn --cwd sandbox ng add @ilionx/app-center-build-config com.ilionx.dummy`
