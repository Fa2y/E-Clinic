#!/bin/sh
cd /opt/frontend
# echo "Changing api calls url from local to prod/dev domain"
# find ./src -type f -exec sed -i 's/0.0.0.0/<domain-name>/g' {} +
echo "Running yarn build"
yarn build
echo "Running serve -s build"
serve -s build