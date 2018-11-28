'use strict';

const passAlreadyHashed = require('../../utils/pass-already-hashed');
const throwResponseError = require('../../utils/throw-response-error');

module.exports = function(Customer) {

  const {min: PWD_MIN, max: PWD_MAX} = Customer.definition.properties.password;

  /**
   * The standard validation is not valid, because uses the hashed string instead of the plain password:
   *
   * Customer.validatesLengthOf('password', {
   *   min: 6,
   *   message: { min: 'Password is too short' }
   * });
   *
   * We've to override the built-in function of common/models/user.js:
   */
  Customer.validatePassword = function(plain) {
    if (!plain || typeof plain !== 'string') {
      throwResponseError(422, 'invalid', 'password', 'Invalid password');
    }

    const len = Buffer.byteLength(plain, 'utf8');

    if (len > PWD_MAX) {
      throwResponseError(422, 'tooLong', 'password', `The password entered was too long. Max length is ${PWD_MAX} (entered ${len})`);
    }

    if (len < PWD_MIN) {
      throwResponseError(422, 'tooShort', 'password', `The password entered was too short. Min length is ${PWD_MIN} (entered ${len})`);
    }
  };

  /**
   * The built-in function of common/models/user.js only checks the hashes starting with $2a$:
   * https://github.com/strongloop/loopback/blob/master/common/models/user.js#L1092
   *
   * We've to override the built-in function to check the hash properly:
   */
  Customer.setter.password = function(plain) {
    if (typeof plain !== 'string') {
      return;
    }
    if (passAlreadyHashed(plain)) {
      // The password is already hashed. It may be the case when the instance is loaded from DB
      this.$password = plain;
    } else {
      this.$password = this.constructor.hashPassword(plain);
    }
  };

  /**
   * Example of Remote Method
   */
  Customer.hello = function(msg, cb) {
    process.nextTick(function() {
      cb(null, 'Sender says ' + (msg || 'hello') + ' to receiver');
    });
  };

};
