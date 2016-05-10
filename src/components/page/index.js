var h = require('nhg/h');
var State = require('nhg/state');
// var Header = require('../header');
var Route = require('../route');

module.exports = Page;

function Page () {
  var state = State({
    // header: Header(),
    route: Route()
  });

  return state;
}

Page.render = function (state, globalState) {
  return h('app', [
    // Header.render(state.header),
    Route.render(state.route, globalState)
  ]);
};
