'use strict';

/**
 * Checks if an string is already hashed with bcrypt.
 *
 * @param  {String} str
 * @return {Boolean}
 */
function passAlreadyHashed(str) {
  return typeof str === 'string' &&
    str.length === 60 &&
    (str.startsWith('$2a$') || str.startsWith('$2b$') || str.startsWith('$2y$'));
}

module.exports = passAlreadyHashed;
