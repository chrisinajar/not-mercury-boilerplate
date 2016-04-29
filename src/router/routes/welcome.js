var Welcome = require('../../components/welcome');

module.exports = {
  path: '/',
  state: Welcome(),
  render: Welcome.render
};
