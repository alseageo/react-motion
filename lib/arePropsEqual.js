"use strict";

exports.__esModule = true;
exports["default"] = arePropsEqual;
function keysEqual(a, b) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  for (var k in a) {
    if (hasOwnProperty.call(a, k)) {
      if (!hasOwnProperty.call(b, k) || a[k] !== b[k]) {
        return false;
      }
    }
  }

  return true;
}

function arePropsEqual(a, b) {
  return keysEqual(a, b) || keysEqual(b, a);
}

module.exports = exports["default"];