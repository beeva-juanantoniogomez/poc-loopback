'use strict';

module.exports = function(Movie) {
  Movie.beforeRemote('create', function(context, user, next) {
    context.args.data.created = Date.now();
    context.args.data.publisherId = context.req.accessToken.userId;
    next();
  });
};
