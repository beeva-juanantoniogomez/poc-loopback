'use strict';

const DEFAULT_ERROR_STATUS_CODE = 422;
const DEFAULT_ERROR_DETAIL = 'Unknown error';
const DEFAULT_ERROR_CODE = 'UNKNOWN_ERROR';

function throwResponseError(statusCode, code, attribute, detail) {
  const err = new Error(detail || DEFAULT_ERROR_DETAIL);

  err.statusCode = statusCode || DEFAULT_ERROR_STATUS_CODE;
  err.code = code || DEFAULT_ERROR_CODE;
  err.source = {
    pointer: attribute ? `data/attributes/${attribute}` : 'data',
  };

  throw err;
}

module.exports = throwResponseError;
