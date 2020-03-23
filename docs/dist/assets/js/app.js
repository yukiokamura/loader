/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Common_Base_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _UI_Controller_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



$(window).on("load", e => {
  window.config = _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"]; //requestAnimationFrame

  window.updates = [];
  new _Common_Base_es6__WEBPACK_IMPORTED_MODULE_1__["default"](_Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"]);
  new _UI_Controller_es6__WEBPACK_IMPORTED_MODULE_2__["default"]();
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = {
  is_mediaquery: false,
  is_release: false,
  is_stats: true,
  imgs: [{
    name: "opImg",
    src: "./assets/png/img-01.png",
    type: "img"
  }],
  fonts: "?family=Roboto+Condensed:400,700&display=swap",
  libs: [{
    src: "./assets/js/lib.js",
    type: "script"
  }],
  app: [{
    src: "./assets/js/app.js",
    type: "script"
  }]
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ua_Controller_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

 // import objectFitImages from 'object-fit-images';

class Base {
  constructor(c) {
    this.is_mediaquery = c.is_mediaquery;
    this.is_release = c.is_release;
    this.is_sp = window.ontouchstart === null;
    window.config.is_sp = this.is_sp;
    this.is_stats = c.is_stats;
    this.off_log();
    this.setDevice();
    this.setStats();
  }

  setDevice() {
    if (this.is_mediaquery) return;

    if (this.is_sp) {
      $('html').addClass('touch');
    } else {
      $('html').removeClass('touch');
    }
  }

  get_isSP() {
    return this.is_sp;
  }

  off_log() {
    if (!this.is_release) return;
    console = {
      log: e => {}
    };
  }

  setStats() {
    if (this.is_release || !this.is_stats) return;
    this.stats = new stats_js__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.body.appendChild(this.stats.domElement);
    this.requestFlame();
  }

  requestFlame() {
    this.__flame = requestAnimationFrame(this.requestFlame.bind(this));
    this.stats.begin();
    window.updates.map(update => {
      update.cb();
    });
    this.stats.end();
  }

  getUserAgentController() {
    return new _ua_Controller_es6__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var c=function(){var n=0,l=document.createElement("div");function e(e){return l.appendChild(e.dom),e}function t(e){for(var t=0;t<l.children.length;t++)l.children[t].style.display=t===e?"block":"none";n=e}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(e){e.preventDefault(),t(++n%l.children.length)},!1);var i=(performance||Date).now(),a=i,o=0,f=e(new c.Panel("FPS","#0ff","#002")),r=e(new c.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new c.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:l,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(r.update(e-i,200),a+1e3<=e&&(f.update(1e3*o/(e-a),100),a=e,o=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:l,setMode:t}};return c.Panel=function(n,l,i){var a=1/0,o=0,f=Math.round,r=f(window.devicePixelRatio||1),d=80*r,e=48*r,c=3*r,p=2*r,u=3*r,s=15*r,m=74*r,h=30*r,y=document.createElement("canvas");y.width=d,y.height=e,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=i,v.fillRect(0,0,d,e),v.fillStyle=l,v.fillText(n,c,p),v.fillRect(u,s,m,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u,s,m,h),{dom:y,update:function(e,t){a=Math.min(a,e),o=Math.max(o,e),v.fillStyle=i,v.globalAlpha=1,v.fillRect(0,0,d,s),v.fillStyle=l,v.fillText(f(e)+" "+n+" ("+f(a)+"-"+f(o)+")",c,p),v.drawImage(y,u+r,s,m-r,h,u,s,m-r,h),v.fillRect(u+m-r,s,r,h),v.fillStyle=i,v.globalAlpha=.9,v.fillRect(u+m-r,s,r,f((1-e/t)*h))}}},c});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
class Controller {
  constructor() {
    this.ua = navigator.userAgent.toLowerCase();
    this.ver = navigator.appVersion.toLowerCase();
  }

  isIE() {
    const isMSIE = this.ua.indexOf('msie') > -1 && this.ua.indexOf('opera') == -1;
    const isIE11 = this.ua.indexOf('trident/7') > -1;
    return isMSIE || isIE11;
  }

  isEdge() {
    return this.ua.indexOf('edge') > -1;
  }

  isChrome() {
    return this.ua.indexOf('chrome') > -1 && this.ua.indexOf('edge') == -1;
  }

  isFireFox() {
    return this.ua.indexOf('firefox') > -1;
  }

  isSafari() {
    return this.ua.indexOf('safari') > -1 && this.ua.indexOf('chrome') == -1;
  }

  isOpera() {
    return this.ua.indexOf('opera') > -1;
  }

  isiPhone() {
    return this.ua.indexOf('iphone') > -1;
  }

  isAndroid() {
    return this.ua.indexOf('android') > -1;
  }

}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _Base_Controller_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

class Controller extends _Base_Controller_es6__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
  }

  init() {
    this.name = "UIController";
  }

  setEvent() {
    super.__setUpdateFlag(false);
  }

  reset() {}

  update() {
    console.log("update");
  }

}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
class Controller {
  constructor(param) {
    this.__init();

    this.__setEvent();
  }

  __init() {
    this.init();
    this.setEvent();
  }

  __setEvent() {
    this.__setUpdate();
  }

  __setUpdate() {
    window.updates.push({
      id: this.name,
      cb: e => {
        this.__update();
      }
    });
  }

  __setUpdateFlag(flag = false) {
    this.__is_update = flag;
  }

  __update() {
    if (this.__is_update) this.update();
  }

}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy9Db21tb24vY29uZmlnLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ29tbW9uL0Jhc2UuZXM2Iiwid2VicGFjazovLy8vVXNlcnMveXVraW9rYW11cmEveWtva21yL0NPTU1PTi9ub2RlX21vZHVsZXMvc3RhdHMtanMvYnVpbGQvc3RhdHMubWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Db21tb24vdWEvQ29udHJvbGxlci5lczYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1VJL0NvbnRyb2xsZXIuZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy9VSS9CYXNlL0NvbnRyb2xsZXIuZXM2Il0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJvbiIsImUiLCJjb25maWciLCJ1cGRhdGVzIiwiSW5pdCIsIlVJQ29udHJvbGxlciIsImlzX21lZGlhcXVlcnkiLCJpc19yZWxlYXNlIiwiaXNfc3RhdHMiLCJpbWdzIiwibmFtZSIsInNyYyIsInR5cGUiLCJmb250cyIsImxpYnMiLCJhcHAiLCJCYXNlIiwiY29uc3RydWN0b3IiLCJjIiwiaXNfc3AiLCJvbnRvdWNoc3RhcnQiLCJvZmZfbG9nIiwic2V0RGV2aWNlIiwic2V0U3RhdHMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZ2V0X2lzU1AiLCJjb25zb2xlIiwibG9nIiwic3RhdHMiLCJTdGF0cyIsInNldE1vZGUiLCJkb21FbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlcXVlc3RGbGFtZSIsIl9fZmxhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiYmVnaW4iLCJtYXAiLCJ1cGRhdGUiLCJjYiIsImVuZCIsImdldFVzZXJBZ2VudENvbnRyb2xsZXIiLCJ1YSIsIkNvbnRyb2xsZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsInZlciIsImFwcFZlcnNpb24iLCJpc0lFIiwiaXNNU0lFIiwiaW5kZXhPZiIsImlzSUUxMSIsImlzRWRnZSIsImlzQ2hyb21lIiwiaXNGaXJlRm94IiwiaXNTYWZhcmkiLCJpc09wZXJhIiwiaXNpUGhvbmUiLCJpc0FuZHJvaWQiLCJpbml0Iiwic2V0RXZlbnQiLCJfX3NldFVwZGF0ZUZsYWciLCJyZXNldCIsInBhcmFtIiwiX19pbml0IiwiX19zZXRFdmVudCIsIl9fc2V0VXBkYXRlIiwicHVzaCIsImlkIiwiX191cGRhdGUiLCJmbGFnIiwiX19pc191cGRhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0FBLENBQUMsQ0FBQ0MsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxNQUFiLEVBQXFC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QUc7QUFDVCxVQUFNQyxlQUFOLENBQXNCLEtBQXRCO0FBQ0Q7O0FBRURDLE9BQUssR0FBRyxDQUFFOztBQUVWekIsUUFBTSxHQUFHO0FBQ1BuQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7O0FBakIwQyxDOzs7Ozs7O0FDRjdDO0FBQUE7QUFBZSxNQUFNdUIsVUFBTixDQUFpQjtBQUM5QmxDLGFBQVcsQ0FBQ3VELEtBQUQsRUFBUTtBQUNqQixTQUFLQyxNQUFMOztBQUNBLFNBQUtDLFVBQUw7QUFFRDs7QUFHREQsUUFBTSxHQUFFO0FBQ04sU0FBS0wsSUFBTDtBQUNBLFNBQUtDLFFBQUw7QUFDRDs7QUFHREssWUFBVSxHQUFFO0FBQ1YsU0FBS0MsV0FBTDtBQUNEOztBQUdEQSxhQUFXLEdBQUU7QUFFWDVFLFVBQU0sQ0FBQ0ksT0FBUCxDQUFleUUsSUFBZixDQUFvQjtBQUNsQkMsUUFBRSxFQUFDLEtBQUtuRSxJQURVO0FBRWxCcUMsUUFBRSxFQUFDOUMsQ0FBQyxJQUFFO0FBQ0osYUFBSzZFLFFBQUw7QUFDRDtBQUppQixLQUFwQjtBQU1EOztBQUdEUixpQkFBZSxDQUFDUyxJQUFJLEdBQUcsS0FBUixFQUFjO0FBQzNCLFNBQUtDLFdBQUwsR0FBbUJELElBQW5CO0FBQ0Q7O0FBR0RELFVBQVEsR0FBRTtBQUNSLFFBQUcsS0FBS0UsV0FBUixFQUFvQixLQUFLbEMsTUFBTDtBQUVyQjs7QUF0QzZCLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vQ29tbW9uL2NvbmZpZy5lczZcIjtcbmltcG9ydCBJbml0IGZyb20gXCIuL0NvbW1vbi9CYXNlLmVzNlwiO1xuaW1wb3J0IFVJQ29udHJvbGxlciBmcm9tIFwiLi9VSS9Db250cm9sbGVyLmVzNlwiO1xuJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBlID0+IHtcbiAgd2luZG93LmNvbmZpZyA9IGNvbmZpZztcblxuICAvL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuICB3aW5kb3cudXBkYXRlcyA9IFtdO1xuXG4gIG5ldyBJbml0KGNvbmZpZyk7XG4gIG5ldyBVSUNvbnRyb2xsZXIoKTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgaXNfbWVkaWFxdWVyeTogZmFsc2UsXG4gIGlzX3JlbGVhc2U6IGZhbHNlLFxuICBpc19zdGF0czogdHJ1ZSxcbiAgaW1nczogW3sgbmFtZTogXCJvcEltZ1wiLCBzcmM6IFwiLi9hc3NldHMvcG5nL2ltZy0wMS5wbmdcIiwgdHlwZTogXCJpbWdcIiB9XSxcbiAgZm9udHM6IFwiP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOjQwMCw3MDAmZGlzcGxheT1zd2FwXCIsXG4gIGxpYnM6IFt7IHNyYzogXCIuL2Fzc2V0cy9qcy9saWIuanNcIiwgdHlwZTogXCJzY3JpcHRcIiB9XSxcbiAgYXBwOiBbeyBzcmM6IFwiLi9hc3NldHMvanMvYXBwLmpzXCIsIHR5cGU6IFwic2NyaXB0XCIgfV1cbn07XG4iLCJpbXBvcnQgU3RhdHMgZnJvbSAnc3RhdHMtanMnO1xuaW1wb3J0IHVhIGZyb20gJy4vdWEvQ29udHJvbGxlci5lczYnO1xuLy8gaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNle1xuICBjb25zdHJ1Y3RvcihjKXtcbiAgICB0aGlzLmlzX21lZGlhcXVlcnkgPSBjLmlzX21lZGlhcXVlcnk7XG4gICAgdGhpcy5pc19yZWxlYXNlID0gYy5pc19yZWxlYXNlO1xuICAgIHRoaXMuaXNfc3AgPSB3aW5kb3cub250b3VjaHN0YXJ0PT09bnVsbDtcbiAgICB3aW5kb3cuY29uZmlnLmlzX3NwID0gdGhpcy5pc19zcDtcbiAgICB0aGlzLmlzX3N0YXRzID0gYy5pc19zdGF0cztcblxuXG5cblxuICAgIHRoaXMub2ZmX2xvZygpO1xuICAgIHRoaXMuc2V0RGV2aWNlKCk7XG4gICAgdGhpcy5zZXRTdGF0cygpO1xuICB9XG5cbiAgc2V0RGV2aWNlKCl7XG4gICAgaWYodGhpcy5pc19tZWRpYXF1ZXJ5KXJldHVybjtcblxuICAgIGlmKHRoaXMuaXNfc3Ape1xuICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKCd0b3VjaCcpXG4gICAgfWVsc2V7XG4gICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3RvdWNoJylcbiAgICB9XG4gIH1cblxuICBnZXRfaXNTUCgpe1xuICAgIHJldHVybiB0aGlzLmlzX3NwO1xuICB9XG5cbiAgb2ZmX2xvZygpe1xuICAgIGlmKCF0aGlzLmlzX3JlbGVhc2UpcmV0dXJuO1xuICAgIGNvbnNvbGUgPSB7XG4gICAgICBsb2c6ZT0+e1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdHMoKXtcbiAgICBpZih0aGlzLmlzX3JlbGVhc2UgfHwgIXRoaXMuaXNfc3RhdHMpcmV0dXJuO1xuICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICB0aGlzLnN0YXRzLnNldE1vZGUoMCk7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCB0aGlzLnN0YXRzLmRvbUVsZW1lbnQgKTtcbiAgICB0aGlzLnJlcXVlc3RGbGFtZSgpO1xuICB9XG5cbiAgcmVxdWVzdEZsYW1lKCl7XG4gICAgdGhpcy5fX2ZsYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdEZsYW1lLmJpbmQodGhpcykpO1xuICAgIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICB3aW5kb3cudXBkYXRlcy5tYXAodXBkYXRlPT57XG4gICAgICB1cGRhdGUuY2IoKTtcbiAgICB9KVxuICAgIHRoaXMuc3RhdHMuZW5kKCk7XG4gIH1cblxuICBnZXRVc2VyQWdlbnRDb250cm9sbGVyKCl7XG4gICAgcmV0dXJuIG5ldyB1YSgpO1xuICB9XG5cbn1cbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuU3RhdHM9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9ZnVuY3Rpb24oKXt2YXIgbj0wLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmdW5jdGlvbiBlKGUpe3JldHVybiBsLmFwcGVuZENoaWxkKGUuZG9tKSxlfWZ1bmN0aW9uIHQoZSl7Zm9yKHZhciB0PTA7dDxsLmNoaWxkcmVuLmxlbmd0aDt0KyspbC5jaGlsZHJlblt0XS5zdHlsZS5kaXNwbGF5PXQ9PT1lP1wiYmxvY2tcIjpcIm5vbmVcIjtuPWV9bC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC45O3otaW5kZXg6MTAwMDBcIixsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSx0KCsrbiVsLmNoaWxkcmVuLmxlbmd0aCl9LCExKTt2YXIgaT0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpLGE9aSxvPTAsZj1lKG5ldyBjLlBhbmVsKFwiRlBTXCIsXCIjMGZmXCIsXCIjMDAyXCIpKSxyPWUobmV3IGMuUGFuZWwoXCJNU1wiLFwiIzBmMFwiLFwiIzAyMFwiKSk7aWYoc2VsZi5wZXJmb3JtYW5jZSYmc2VsZi5wZXJmb3JtYW5jZS5tZW1vcnkpdmFyIGQ9ZShuZXcgYy5QYW5lbChcIk1CXCIsXCIjZjA4XCIsXCIjMjAxXCIpKTtyZXR1cm4gdCgwKSx7UkVWSVNJT046MTYsZG9tOmwsYWRkUGFuZWw6ZSxzaG93UGFuZWw6dCxiZWdpbjpmdW5jdGlvbigpe2k9KHBlcmZvcm1hbmNlfHxEYXRlKS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7bysrO3ZhciBlPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCk7aWYoci51cGRhdGUoZS1pLDIwMCksYSsxZTM8PWUmJihmLnVwZGF0ZSgxZTMqby8oZS1hKSwxMDApLGE9ZSxvPTAsZCkpe3ZhciB0PXBlcmZvcm1hbmNlLm1lbW9yeTtkLnVwZGF0ZSh0LnVzZWRKU0hlYXBTaXplLzEwNDg1NzYsdC5qc0hlYXBTaXplTGltaXQvMTA0ODU3Nil9cmV0dXJuIGV9LHVwZGF0ZTpmdW5jdGlvbigpe2k9dGhpcy5lbmQoKX0sZG9tRWxlbWVudDpsLHNldE1vZGU6dH19O3JldHVybiBjLlBhbmVsPWZ1bmN0aW9uKG4sbCxpKXt2YXIgYT0xLzAsbz0wLGY9TWF0aC5yb3VuZCxyPWYod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpLGQ9ODAqcixlPTQ4KnIsYz0zKnIscD0yKnIsdT0zKnIscz0xNSpyLG09NzQqcixoPTMwKnIseT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3kud2lkdGg9ZCx5LmhlaWdodD1lLHkuc3R5bGUuY3NzVGV4dD1cIndpZHRoOjgwcHg7aGVpZ2h0OjQ4cHhcIjt2YXIgdj15LmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gdi5mb250PVwiYm9sZCBcIis5KnIrXCJweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZlwiLHYudGV4dEJhc2VsaW5lPVwidG9wXCIsdi5maWxsU3R5bGU9aSx2LmZpbGxSZWN0KDAsMCxkLGUpLHYuZmlsbFN0eWxlPWwsdi5maWxsVGV4dChuLGMscCksdi5maWxsUmVjdCh1LHMsbSxoKSx2LmZpbGxTdHlsZT1pLHYuZ2xvYmFsQWxwaGE9Ljksdi5maWxsUmVjdCh1LHMsbSxoKSx7ZG9tOnksdXBkYXRlOmZ1bmN0aW9uKGUsdCl7YT1NYXRoLm1pbihhLGUpLG89TWF0aC5tYXgobyxlKSx2LmZpbGxTdHlsZT1pLHYuZ2xvYmFsQWxwaGE9MSx2LmZpbGxSZWN0KDAsMCxkLHMpLHYuZmlsbFN0eWxlPWwsdi5maWxsVGV4dChmKGUpK1wiIFwiK24rXCIgKFwiK2YoYSkrXCItXCIrZihvKStcIilcIixjLHApLHYuZHJhd0ltYWdlKHksdStyLHMsbS1yLGgsdSxzLG0tcixoKSx2LmZpbGxSZWN0KHUrbS1yLHMscixoKSx2LmZpbGxTdHlsZT1pLHYuZ2xvYmFsQWxwaGE9Ljksdi5maWxsUmVjdCh1K20tcixzLHIsZigoMS1lL3QpKmgpKX19fSxjfSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVye1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMudWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy52ZXIgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaXNJRSgpe1xuICAgIGNvbnN0IGlzTVNJRSA9IHRoaXMudWEuaW5kZXhPZignbXNpZScpID4gLTEgJiYgdGhpcy51YS5pbmRleE9mKCdvcGVyYScpID09IC0xO1xuICAgIGNvbnN0IGlzSUUxMSA9IHRoaXMudWEuaW5kZXhPZigndHJpZGVudC83JykgPiAtMVxuICAgIHJldHVybiBpc01TSUUgfHwgaXNJRTExO1xuICB9XG5cbiAgaXNFZGdlKCl7XG4gICAgcmV0dXJuIHRoaXMudWEuaW5kZXhPZignZWRnZScpID4gLTFcbiAgfVxuXG4gIGlzQ2hyb21lKCl7XG4gICAgcmV0dXJuIHRoaXMudWEuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiB0aGlzLnVhLmluZGV4T2YoJ2VkZ2UnKSA9PSAtMTtcbiAgfVxuXG4gIGlzRmlyZUZveCgpe1xuICAgIHJldHVybiB0aGlzLnVhLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xXG4gIH1cblxuICBpc1NhZmFyaSgpe1xuICAgIHJldHVybiB0aGlzLnVhLmluZGV4T2YoJ3NhZmFyaScpID4gLTEgJiYgdGhpcy51YS5pbmRleE9mKCdjaHJvbWUnKSA9PSAtMVxuICB9XG5cbiAgaXNPcGVyYSgpe1xuICAgIHJldHVybiB0aGlzLnVhLmluZGV4T2YoJ29wZXJhJykgPiAtMVxuICB9XG5cbiAgaXNpUGhvbmUoKXtcbiAgICByZXR1cm4gdGhpcy51YS5pbmRleE9mKCdpcGhvbmUnKSA+IC0xXG4gIH1cblxuICBpc0FuZHJvaWQoKXtcbiAgICByZXR1cm4gdGhpcy51YS5pbmRleE9mKCdhbmRyb2lkJykgPiAtMVxuICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlL0NvbnRyb2xsZXIuZXM2XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJVSUNvbnRyb2xsZXJcIjtcbiAgfVxuXG4gIHNldEV2ZW50KCkge1xuICAgIHN1cGVyLl9fc2V0VXBkYXRlRmxhZyhmYWxzZSk7XG4gIH1cblxuICByZXNldCgpIHt9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW0pIHtcbiAgICB0aGlzLl9faW5pdCgpO1xuICAgIHRoaXMuX19zZXRFdmVudCgpO1xuXG4gIH1cblxuXG4gIF9faW5pdCgpe1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuc2V0RXZlbnQoKTtcbiAgfVxuXG5cbiAgX19zZXRFdmVudCgpe1xuICAgIHRoaXMuX19zZXRVcGRhdGUoKTtcbiAgfVxuXG5cbiAgX19zZXRVcGRhdGUoKXtcblxuICAgIHdpbmRvdy51cGRhdGVzLnB1c2goe1xuICAgICAgaWQ6dGhpcy5uYW1lLFxuICAgICAgY2I6ZT0+e1xuICAgICAgICB0aGlzLl9fdXBkYXRlKClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgXG4gIF9fc2V0VXBkYXRlRmxhZyhmbGFnID0gZmFsc2Upe1xuICAgIHRoaXMuX19pc191cGRhdGUgPSBmbGFnO1xuICB9XG5cblxuICBfX3VwZGF0ZSgpe1xuICAgIGlmKHRoaXMuX19pc191cGRhdGUpdGhpcy51cGRhdGUoKTtcblxuICB9XG5cblxuXG5cblxuXG5cblxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9