// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app, options) {
  var globSync = require('glob').sync;
  var mocks, proxies;

  if (options.environment == 'offline') {

	  console.log('OFFLINE MODE : using mocks');
      
      mocks = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);

  } else {
      proxies = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);
  }

  // Log proxy requests
  var morgan = require('morgan');
  app.use(morgan('dev'));

  if (mocks) {
      mocks.forEach(function(route) {
          route(app);
      });
  }

  if (proxies) {
      proxies.forEach(function(route) {
          route(app);
      });
  }
};
// module.exports = function(app) {
//   var globSync   = require('glob').sync;
//   var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
//   var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

//   // Log proxy requests
//   var morgan  = require('morgan');
//   app.use(morgan('dev'));

//   mocks.forEach(function(route) { route(app); });
//   proxies.forEach(function(route) { route(app); });

// };
