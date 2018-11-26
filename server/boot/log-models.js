'use strict';

const {log} = console;

module.exports = function(app) {
  const models = app.models;

  logModels(models);
};

const logModels = (models) => {
  const modelsNames = Object.keys(models);

  log('---------------------');
  log(`Found ${modelsNames.length} models:`);

  modelsNames.forEach((name) => log(`  - ${name}`));
  log('---------------------\n');

  log(`NODE_ENV=${process.env.NODE_ENV}\n`);
  log(`IP=${process.env.IP}\n`);
  log(`PORT=${process.env.PORT}\n`);
  log(`DATABASE_URL=${process.env.DATABASE_URL}\n`);
};
