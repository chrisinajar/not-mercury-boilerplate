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

  // make sure we only start up once
  var onReady = once(_onReady);

  // wait for the router to full initialize before we start the render loop
  // this prevents it from quickly rendering a 404 and then the real page
  // once PR#3 is merged we wont need to do this anymore
  // https://github.com/bendrucker/sour/pull/3
  Router.hook(state.router.router, function (cb) {
    cb();
    setTimeout(onReady);
  });
  // after the hook is registered start watching
  Router.watch(state.router.router);

  function _onReady () {
    StartApp(Document.body, state, App.render);
    if (typeof done === 'function') {
      done();
    }
  }
}
