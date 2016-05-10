var NotFound = require('./not-found');
var Router = require('nhg/router');

module.exports = Route;

function Route () {
}

Route.render = function (state, globalState) {
  var router = globalState.router;

  return Router.render(
    router.router,
    router.states[router.route],
    globalState
  ) || NotFound();
};
