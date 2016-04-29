var NotFound = require('./not-found');
var Router = require('nhg/router');

module.exports = Route;

function Route () {
}

Route.render = function (state, globalState) {
  var router = globalState.router;
  var route = Router.render(router.router);

  if (!route) {
    route = NotFound;
  }

  return route(router.states[router.route], globalState);
};
