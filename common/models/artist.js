'use strict';

module.exports = function(Artist) {
  Artist.validatesInclusionOf('gender', {
    in: Artist.definition.properties.gender.enum,
  });
};
