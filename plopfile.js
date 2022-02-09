// eslint-disable-next-line @typescript-eslint/no-var-requires
const componentGenerator = require('./template/')

module.exports = function (plop) {
  plop.setGenerator('pages', componentGenerator)
  // plop.setGenerator('store', componentGenerator)
  // plop.setGenerator('api', componentGenerator)
}
