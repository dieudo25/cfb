#!/bin/bash

# Install Yarn
/opt/plesk/node/14/bin/npm install yarn --scripts-prepend-node-path

# Install dependecies using yarn
yarn install --scripts-prepend-node-path

# Build project
NODE_ENV=production yarn build --scripts-prepend-node-path

# Restart node app
touch ./tmp/restart.txt