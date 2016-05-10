var Router = require('nhg/router');
var Struct = require('nhg/struct');
var Varhash = require('nhg/varhash');
var Value = require('nhg/value');

module.exports = ApplicationRouter;

function ApplicationRouter () {
  var state = Struct({
    router: Router(),
    route: Value('404'),
    states: Varhash()
  });

  Router.onNotFound(state.router, function () {
    state.router.active.set(null);
  });

  return state;
}

ApplicationRouter.addRoute = function (state, route) {
  if (!state.states[route.path]) {
    state.states.put(route.path, route.state);
  }

  var sourRoute = Router.route(state.router, route);

  Router.beforeEnter(state.router, sourRoute, function (params, cb) {
    state.route.set(route.path);
    cb();
  });
};
