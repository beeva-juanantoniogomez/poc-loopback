'use strict';

const dsName = process.env.NODE_ENV === 'heroku' ? 'postgreDs' : 'mysqlDs';
const {log} = console;

module.exports = function(app, cb) {
  const dataSource = app.dataSources[dsName];

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

  if (dataSource.connected) {
    dataSource.automigrate(fireAutomigrate);
  } else {
    dataSource.once('connected', function() {
      dataSource.automigrate(fireAutomigrate);
    });
  }
};
