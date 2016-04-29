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
  // make the render method return itself
  // we can't just put the state in at this point since we don't have a reference
  // to the global state. ideally this should be passed in using render(state, params...)
  // we can change it to that style API and simplify this code once PR#4 is merged
  // https://github.com/bendrucker/sour/pull/4
  var _render = route.render;
  route.render = function () {
    return _render;
  };

  if (!state.states[route.path]) {
    state.states.put(route.path, route.state);
  }

  var sourRoute = Router.route(state.router, route);

  Router.hook(state.router, sourRoute, function (params, cb) {
    state.route.set(route.path);
    cb();
  });
};
