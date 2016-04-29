var partial = require('ap').partial;
var routes = require('./routes');
var ApplicationRouter = require('./router');

module.exports = Init;

function Init () {
  var state = ApplicationRouter();

  routes.forEach(partial(ApplicationRouter.addRoute, state));

  return state;
}
