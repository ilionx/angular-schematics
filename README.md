# @ilionx/angular-schematics

Useful schematics for Angular and Ionic projects.

## Packages

This is a monorepo which contains many packages:

| Project                     | Package                                                                                        | Version                                                                                                                                           | Links                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **app-center-build-config** | [`@ilionx/app-center-build-config`](https://npmjs.com/package/@ilionx/app-center-build-config) | [![latest](https://img.shields.io/npm/v/%ilionx%2Fapp-center-build-config/latest.svg)](https://npmjs.com/package/@ilionx/app-center-build-config) | [![README](https://img.shields.io/badge/README--green.svg)](/packages/app-center-build-config/README.md) |

## Getting Started - Local Development

### Installation

To get started locally, follow these instructions:

1. If you haven't done it already, make a fork of this repo.
1. Clone to your local computer using `git`.
1. Make sure that you have the LTS version Node or later installed. See instructions [here](https://nodejs.org/en/download/).
1. Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
1. Run `yarn` (no arguments) from the root of your clone of this project.
1. Run `yarn bootstrap` to link local packages together and install remaining package dependencies. [Read more](https://github.com/lerna/lerna/tree/master/commands/bootstrap).

### Sandbox project

The sandbox is a version controlled directory and contains an Ionic + Capacitor application with Angular as Framework.

For testing and development, you can execute your schematic against the application in the sandbox. Check out [this post on using a sandbox to develop an Angular Schematic](https://www.kevinschuchard.com/blog/2018-11-20-schematic-sandbox/).

#### Sandbox Preparation

1. Run `yarn` (no arguments) from the `sandbox` directory.
1. Run `yarn run link:all` to link schematic packages.
