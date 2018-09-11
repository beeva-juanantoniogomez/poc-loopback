'use strict';

const async = require('async');
const {log} = console;

const SEEDS_COUNTRIES = require('./seeds/countries')();

module.exports = function(app) {
  const models = app.models;

  async.parallel({
    countries: async.apply(createCountries),
  }, function(err, results) {
    if (err) throw err;

    log(`Created ${results.countries.length} countries`);
  });

  function createCountries(cb) {
    models.Country.create(SEEDS_COUNTRIES, cb);
  }
};
