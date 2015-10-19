/**
 * AWS Module: Action: Modularized Code
 */
require('./chop');

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  return cb(null, action(event.haystack, event.needle));
};

// Your Code
var action = function(haystack, needle) {
  return {result: haystack.chop(needle)};
};
