var h = require('nhg/h');
var State = require('nhg/state');

module.exports = WelcomePage;

function WelcomePage () {
  var state = State({
  });

  return state;
}

WelcomePage.render = function (state, globalState) {
  return h('div', 'Hello!');
};
