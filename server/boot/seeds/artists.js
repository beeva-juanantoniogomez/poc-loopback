'use strict';

const moment = require('moment');

const records = function() {
  return [{
    fullname: 'Footano',
    birthdate: moment('15/02/1960', 'DD/MM/YYYY').toDate(),
    photo: 1990,
    gender: 'male',
  }, {
    fullname: 'Bariano',
    birthdate: moment('15/02/1960', 'DD/MM/YYYY').toDate(),
    photo: 'https://my-image.com/02',
    gender: 'female',
  }];
};

module.exports = records;
