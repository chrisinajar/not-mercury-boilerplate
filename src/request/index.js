var Struct = require('nhg/struct');
var Value = require('nhg/value');
// var request = require('config-request')
var storage = require('just-storage');

module.exports = Request;

// keep the request object up date and configured
function Request () {
  var state = Struct({
    config: Struct({
      baseUrl: Value('http://localhost:8100'),
      // X-Auth-Token
      // storage for key will pull the value from local storage whenever it's called
      // so when app start syncing this data to the configuration of request,
      // it'll automatically be inserted in there and sent with all requests
      token: storage.forKey('token')
    })
  });

  // TODO: When user logs in, fill in default token

  return state;
}

Request.init = function (state) {
  return true;
// example hello init
// request.get('/hello', function (err, data) {
//   if (err) {
//     console.error(err.stack || err)
//     return
//   }
//   console.log(data)
//   state.something.set(data)
// })
};
