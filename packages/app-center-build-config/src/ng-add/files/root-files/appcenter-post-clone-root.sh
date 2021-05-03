#!/usr/bin/env bash

#
#
# App Center - Ionic Capacitor build script
#
# Reusable build script for App Center to build your Ionic + Capacitor application with Angular
# as your framework.
# This script assumes that you are making use of buildTargets (Android) and schemes (iOS) to use specific configuration
# based on the selected target/scheme. Your native projects can have target/scheme specific configuration. We call this the BUILD_ENV in this script.
# The BUILD_ENV will then be used to select the correct Angular configuration that you need to set in your angular.json file
# to use the correct environment settings for the Angular part of the application.
#
#
#

# fail if any command fails
set -e
# debug log
set -x

# The BUILD_ENV will be set with the expected environment (dev, tst, acc, prd, ...) based on the scheme (iOS) or buildType (Android)
BUILD_ENV=${APPCENTER_XCODE_SCHEME:-$APPCENTER_ANDROID_VARIANT}

# Replace any surrounding quotes
BUILD_ENV="${BUILD_ENV%\"}"
BUILD_ENV="${BUILD_ENV#\"}"

echo "Current Build environment:" $BUILD_ENV
# install dependencies
npm ci

# The BUILD_ENV will be set with the expected environment (dev, tst, acc, prd, ...) based on the scheme (iOS) or buildType (Android)
# Build the web app based on the given build environment. Make sure that your angular.json supports all possible configurations
npm run build -- --configuration=$BUILD_ENV

# copy the web assets to the native projects and updates the native plugins and dependencies based in package.json
npx cap sync