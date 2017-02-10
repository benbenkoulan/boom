webpackJsonp([1,2],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_func__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_func___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util_func__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/*import polyfill from 'babel-polyfill';*/



const isDev = true;

let arr = [{ name: 'liben', sex: 'male' }, { name: 'jinxue', sex: 'female' }];
arr = arr.map(person => {
	person.name += '--human';
	return person;
});

console.log(Promise);

let queryDiv = document.querySelector.partial('div');
console.log(queryDiv);

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

var _arguments = arguments,
    _this = this;

Function.prototype.partial = () => {
	console.log(_arguments.constructor);
	let fn = _this,
	    args = Array.from(_arguments);
	console.log(args.constructor);
	return () => fn.bind(args.concat.call(Array.from(_arguments)));
};

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);


/***/ })

},[301]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzIiwid2VicGFjazovLy8uL3V0aWwvZnVuYy5qcyJdLCJuYW1lcyI6WyJpc0RldiIsImFyciIsIm5hbWUiLCJzZXgiLCJtYXAiLCJwZXJzb24iLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInF1ZXJ5RGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFydGlhbCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJmbiIsImFyZ3MiLCJBcnJheSIsImZyb20iLCJiaW5kIiwiY29uY2F0IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLElBQWQ7O0FBRUEsSUFBSUMsTUFBTSxDQUFFLEVBQUNDLE1BQU0sT0FBUCxFQUFnQkMsS0FBSyxNQUFyQixFQUFGLEVBQWdDLEVBQUNELE1BQU0sUUFBUCxFQUFpQkMsS0FBSyxRQUF0QixFQUFoQyxDQUFWO0FBQ0FGLE1BQU1BLElBQUlHLEdBQUosQ0FBUUMsVUFBVTtBQUN2QkEsUUFBT0gsSUFBUCxJQUFlLFNBQWY7QUFDQSxRQUFPRyxNQUFQO0FBQ0EsQ0FISyxDQUFOOztBQUtBQyxRQUFRQyxHQUFSLENBQVlDLE9BQVo7O0FBRUEsSUFBSUMsV0FBV0MsU0FBU0MsYUFBVCxDQUF1QkMsT0FBdkIsQ0FBK0IsS0FBL0IsQ0FBZjtBQUNBTixRQUFRQyxHQUFSLENBQVlFLFFBQVosRTs7Ozs7Ozs7OztBQ2ZBSSxTQUFTQyxTQUFULENBQW1CRixPQUFuQixHQUE2QixNQUFNO0FBQ2xDTixTQUFRQyxHQUFSLENBQVksV0FBVVEsV0FBdEI7QUFDQSxLQUFJQyxVQUFKO0FBQUEsS0FBZUMsT0FBT0MsTUFBTUMsSUFBTixZQUF0QjtBQUNBYixTQUFRQyxHQUFSLENBQVlVLEtBQUtGLFdBQWpCO0FBQ0EsUUFBTyxNQUFNQyxHQUFHSSxJQUFILENBQVFILEtBQUtJLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkosTUFBTUMsSUFBTixZQUFqQixDQUFSLENBQWI7QUFDQSxDQUxELEMiLCJmaWxlIjoiOTRjYmM1YmMubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IHBvbHlmaWxsIGZyb20gJ2JhYmVsLXBvbHlmaWxsJzsqL1xyXG5pbXBvcnQgZnVuYyBmcm9tICd1dGlsL2Z1bmMnO1xyXG5pbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuY29uc3QgaXNEZXYgPSB0cnVlO1xyXG5cclxubGV0IGFyciA9IFsge25hbWU6ICdsaWJlbicsIHNleDogJ21hbGUnfSwge25hbWU6ICdqaW54dWUnLCBzZXg6ICdmZW1hbGUnfSBdO1xyXG5hcnIgPSBhcnIubWFwKHBlcnNvbiA9PiB7XHJcblx0cGVyc29uLm5hbWUgKz0gJy0taHVtYW4nO1xyXG5cdHJldHVybiBwZXJzb247XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coUHJvbWlzZSk7XHJcblxyXG5sZXQgcXVlcnlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLnBhcnRpYWwoJ2RpdicpO1xyXG5jb25zb2xlLmxvZyhxdWVyeURpdik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyIsIkZ1bmN0aW9uLnByb3RvdHlwZS5wYXJ0aWFsID0gKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKGFyZ3VtZW50cy5jb25zdHJ1Y3Rvcik7XHJcblx0bGV0IGZuID0gdGhpcywgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zb2xlLmxvZyhhcmdzLmNvbnN0cnVjdG9yKTtcclxuXHRyZXR1cm4gKCkgPT4gZm4uYmluZChhcmdzLmNvbmNhdC5jYWxsKEFycmF5LmZyb20oYXJndW1lbnRzKSkpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbC9mdW5jLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==