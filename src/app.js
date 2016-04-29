var Struct = require('nhg/struct');
var Router = require('./router');
var Request = require('./request');
var Page = require('./components/page');
var request = require('config-request');

module.exports = App;

function App (initialState) {
  var state = Struct({
    router: Router(),
    page: Page(),
    request: Request()
  });

  request.configure(state.request.config());
  state.request.config(request.configure);

  return state;
}

App.render = function (state) {
  return Page.render(state.page, state);
};
