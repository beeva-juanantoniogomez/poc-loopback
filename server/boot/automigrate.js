'use strict';

const {log} = console;

module.exports = function(app, cb) {
  const mysqlDs = app.dataSources.mysqlDs;

  function fireAutomigrate(err) {
    if (err) throw err;

    // Load fixtures from 'loopback-fixtures'
    app.loadFixtures()
      .then(() => {
        log('Fixtures loaded!');
      })
      .catch((err) => {
        log('Error loading fixtures:', err);
      });

    process.nextTick(cb);
  }

  if (mysqlDs.connected) {
    mysqlDs.automigrate(fireAutomigrate);
  } else {
    mysqlDs.once('connected', function() {
      mysqlDs.automigrate(fireAutomigrate);
    });
  }
};
