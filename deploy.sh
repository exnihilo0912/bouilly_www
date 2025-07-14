#! /bin/bash

# Pull without overriding local sqlite db
git stash;
git pull;
git stash pop;

cd packages;

# rebuild frontend
echo "DEPLOYING FRONT-END";
cd frontend;
npm i;
npm run build;
pm2 restart bouilly-frontend;
cd ..;

# Build backend
echo "DEPLOYING BACK-END";
cd backend;
npm i;
npm run build;
pm2 restart bouilly-api;
cd ..;

echo "DEPLOYMENT DONE";