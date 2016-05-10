var insertStylesheet = require('json-stylesheets');
var Document = require('nhg/document');
var Router = require('nhg/router');
var StartApp = require('nhg/app');
var once = require('once');
var App = require('./app');
var Request = require('./request');

module.exports = Init;

function Init (done) {
  var state = App();

  Request.init(state.request);

  insertStylesheet(require('json-stylesheets/minimal'));

  Router.afterEnter(state.router.router, once(onReady));

  // after the hook is registered start watching
  Router.watch(state.router.router);

  function onReady () {
    StartApp(Document.body, state, App.render);
    if (typeof done === 'function') {
      done();
    }
  }
}
