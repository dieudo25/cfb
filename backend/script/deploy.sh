#!/bin/bash

# Install dependecies using yarn
/opt/plesk/node/14/bin/npm install

# Build project
NODE_ENV=production /opt/plesk/node/14/bin/npm run build --scripts-prepend-node-path

# Restart node app
touch ./tmp/restart.txt