'use strict';

module.exports = function(app, cb) {
  const mysqlDs = app.dataSources.mysqlDs;

  function fireAutomigrate(err) {
    if (err) throw err;

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
