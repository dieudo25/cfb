#!/bin/bash

/opt/plesk/node/14/bin/npm install --scripts-prepend-node-path
NODE_ENV=production /opt/plesk/node/14/bin/npm run build --scripts-prepend-node-path
touch ./tmp/restart.txt