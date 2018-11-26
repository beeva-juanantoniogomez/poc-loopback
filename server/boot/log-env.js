'use strict';

const {log} = console;

module.exports = function() {
  logEnv(process.env);
};

const logEnv = (env) => {
  log('---------------------');
  log(`- NODE_ENV=${env.NODE_ENV}`);
  log(`- HOST=${env.HOST}`);
  log(`- PORT=${env.PORT}`);
  log(`- DATABASE_URL=${env.DATABASE_URL}\n`);
  log('---------------------\n');
};
