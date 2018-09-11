'use strict';

module.exports = function(Participation) {
  const ROLE_ENUM = Participation.definition.properties.role.enum;

  Participation.validatesInclusionOf('role', {in: ROLE_ENUM});
};
