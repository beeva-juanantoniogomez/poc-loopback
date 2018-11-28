'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const app = module.exports = loopback();
const {log} = console;

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');

    const baseUrl = app.get('url').replace(/\/$/, '');

    log('Web server listening at: %s', baseUrl);

    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;

      log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }

    if (app.get('loopback-component-visualizer')) {
      const visualizerPath = app.get('loopback-component-visualizer').mountPath;

      log('Browse the Component Visualizer at %s%s', baseUrl, visualizerPath);
    }

    if (app.get('loopback-component-model-diagram')) {
      const modelDiagramPath = app.get('loopback-component-model-diagram').mountPath;

      log('Browse the Model Diagram at %s%s', baseUrl, modelDiagramPath);
    }

    log('\n');
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.start();
  }
});
