(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MyMath = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function add(num1, num2) {
  return Number(num1) + Number(num2);
}

module.exports = {
  add,
};

},{}],2:[function(require,module,exports){
const { add } = require('./add');

function multiply(num1, num2) {
  let res = 0;
  for (let i = 0; i < Number(num2); i++) {
    res = add(res, num1);
  }
  return res;
}

module.exports = {
  multiply,
};

},{"./add":1}],3:[function(require,module,exports){
const { add } = require('./add');
const { multiply } = require('./multiply');

module.exports = {
  add,
  multiply,
};

},{"./add":1,"./multiply":2}]},{},[3])(3)
});
