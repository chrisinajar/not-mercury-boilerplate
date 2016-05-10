var test = require('tape');
var Init = require('./init');
var document = require('global/document');

test('router initialization', function (t) {
  Init(onReady);

  function onReady () {
    hasOneChild(document.body);

    var app = document.body.childNodes[0];

    hasOneChild(app);

    var route = app.childNodes[0];

    hasOneChild(route);

    var text = route.childNodes[0];

    t.notEqual(text.data, 'Couldnt find that route.');
    t.end();
  }

  function hasOneChild (dom) {
    t.ok(dom);
    t.ok(dom.childNodes);
    t.equal(dom.childNodes.length, 1);
  }
});
