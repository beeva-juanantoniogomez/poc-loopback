'use strict';

module.exports = function(Artist) {
  const GENDER_ENUM = Artist.definition.properties.gender.enum;

  Artist.validatesInclusionOf('gender', {in: GENDER_ENUM});
};
