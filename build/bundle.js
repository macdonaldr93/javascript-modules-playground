(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var prettyPrint = (function (message) {
  console.log("prettyPrint says: " + message);
});

console.log('Main script loaded');
prettyPrint('Hello world');

})));
