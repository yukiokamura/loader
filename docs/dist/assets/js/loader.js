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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Util_Loader_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _Util_easing_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



const head = document.getElementsByTagName("head")[0];
const body = document.body;
const number = document.querySelector(".number");
const bar = document.querySelector(".bar");
let c = 0;
let time = 0;
let now = 0;
const MAX = _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].libs.length + _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].imgs.length + _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].app.length + 1;
console.log(MAX);
const SPEED = 0.01;

function timeline() {
  render();

  const _flame = requestAnimationFrame(timeline);

  if (now > 0.999) {
    cancelAnimationFrame(_flame);
    gsap.timeline().add(e => {
      end();
    }, 1);
  }
}

function render() {
  const per = c / MAX;
  time += 1 / 60;
  const p = time;

  if (p <= 1) {
    now = _Util_easing_es6__WEBPACK_IMPORTED_MODULE_2__["EasingFunctions"].easeOutQuad(p) * per;
  } else {
    if (per < 1) {
      time = 1;
    } else {
      time = now;
    }
  }

  number.innerHTML = zeroPadding(now);
  bar.style = `transform: scaleX(${now});`; // now = per
}

function counter() {
  ++c;
}

function zeroPadding(n) {
  const _n = new Number(n * 100).toFixed(0);

  return _n >= 10 ? _n : "0" + _n;
}

async function init() {
  await Object(_Util_Loader_es6__WEBPACK_IMPORTED_MODULE_1__["loadFonts"])(head, _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].fonts);
  timeline();
  counter();
  body.classList.add("font-loaded");

  for (const script of _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].libs) {
    await Object(_Util_Loader_es6__WEBPACK_IMPORTED_MODULE_1__["loadScript"])(head, script.src);
    counter();
  }

  for (const img of _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].imgs) {
    await Object(_Util_Loader_es6__WEBPACK_IMPORTED_MODULE_1__["loadImg"])(img.src);
    counter();
  }

  await Object(_Util_Loader_es6__WEBPACK_IMPORTED_MODULE_1__["loadScript"])(head, _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].app[0].src);
  counter();
}

function end() {
  gsap.to(".bar", 0.5, {
    scaleX: 0,
    transformOrigin: "100% 0",
    ease: "expo.in"
  });

  for (var i = 0; i < 10; i++) {
    gsap.set(".number", {
      opacity: i % 2,
      delay: i * 0.05
    });
  }

  gsap.set(".number", {
    opacity: 0,
    delay: 10 * 0.05,
    onComplete: e => {
      $(".loader").remove();
      loadedName();
      body.classList.add("loaded");
      $(window).trigger("customloaded");
    }
  });
}

function loadedName() {
  let p = `<p>${_Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].fonts}</p>`;
  _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].imgs.map(e => {
    p += `<p>${e.src}</p>`;
  });
  _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].libs.map(e => {
    p += `<p>${e.src}</p>`;
  });
  _Common_config_es6__WEBPACK_IMPORTED_MODULE_0__["config"].app.map(e => {
    p += `<p>${e.src}</p>`;
  });
  $(".loaded-resouses .inner").append(p);
}

init();
console.log(_Util_easing_es6__WEBPACK_IMPORTED_MODULE_2__["EasingFunctions"]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFonts", function() { return loadFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadScript", function() { return loadScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
function loadFonts(head, path) {
  return new Promise((resolve, reject) => {
    const href = "https://fonts.googleapis.com/css" + path;
    const link = document.createElement("link");

    link.onload = e => {
      resolve();
    };

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", href);
    head.appendChild(link);
  });
}
function loadScript(head, path) {
  return new Promise((resolve, reject) => {
    const src = path;
    const script = document.createElement("script");

    script.onload = e => {
      resolve();
    };

    script.setAttribute("src", src);
    head.appendChild(script);
  });
}
function loadImg(path) {
  return new Promise((resolve, reject) => {
    const src = path;
    const img = new Image();

    img.onload = e => {
      resolve();
    };

    img.src = path;
  });
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasingFunctions", function() { return EasingFunctions; });
const EasingFunctions = {
  // no easing, no acceleration
  linear: t => t,
  // accelerating from zero velocity
  easeInQuad: t => t * t,
  // decelerating to zero velocity
  easeOutQuad: t => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // accelerating from zero velocity
  easeInCubic: t => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: t => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: t => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: t => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: t => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: t => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NvbW1vbi9jb25maWcuZXM2Iiwid2VicGFjazovLy8uL3NyYy9qcy9Mb2FkZXIvQ29udHJvbGxlci5lczYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvYWRlci9VdGlsL0xvYWRlci5lczYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0xvYWRlci9VdGlsL2Vhc2luZy5lczYiXSwibmFtZXMiOlsiY29uZmlnIiwiaXNfbWVkaWFxdWVyeSIsImlzX3JlbGVhc2UiLCJpc19zdGF0cyIsImltZ3MiLCJuYW1lIiwic3JjIiwidHlwZSIsImZvbnRzIiwibGlicyIsImFwcCIsImhlYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYm9keSIsIm51bWJlciIsInF1ZXJ5U2VsZWN0b3IiLCJiYXIiLCJjIiwidGltZSIsIm5vdyIsIk1BWCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJTUEVFRCIsInRpbWVsaW5lIiwicmVuZGVyIiwiX2ZsYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJnc2FwIiwiYWRkIiwiZSIsImVuZCIsInBlciIsInAiLCJFYXNpbmdGdW5jdGlvbnMiLCJlYXNlT3V0UXVhZCIsImlubmVySFRNTCIsInplcm9QYWRkaW5nIiwic3R5bGUiLCJjb3VudGVyIiwibiIsIl9uIiwiTnVtYmVyIiwidG9GaXhlZCIsImluaXQiLCJsb2FkRm9udHMiLCJjbGFzc0xpc3QiLCJzY3JpcHQiLCJsb2FkU2NyaXB0IiwiaW1nIiwibG9hZEltZyIsInRvIiwic2NhbGVYIiwidHJhbnNmb3JtT3JpZ2luIiwiZWFzZSIsImkiLCJzZXQiLCJvcGFjaXR5IiwiZGVsYXkiLCJvbkNvbXBsZXRlIiwiJCIsInJlbW92ZSIsImxvYWRlZE5hbWUiLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwibWFwIiwiYXBwZW5kIiwicGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHJlZiIsImxpbmsiLCJjcmVhdGVFbGVtZW50Iiwib25sb2FkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJJbWFnZSIsImxpbmVhciIsInQiLCJlYXNlSW5RdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluUXVpbnQiLCJlYXNlT3V0UXVpbnQiLCJlYXNlSW5PdXRRdWludCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTyxNQUFNQSxNQUFNLEdBQUc7QUFDcEJDLGVBQWEsRUFBRSxLQURLO0FBRXBCQyxZQUFVLEVBQUUsS0FGUTtBQUdwQkMsVUFBUSxFQUFFLElBSFU7QUFJcEJDLE1BQUksRUFBRSxD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R0FBY0EsQ0FBZCxHQUFrQkEsQ0FyQjdDO0FBc0I3QjtBQUNBUyxhQUFXLEVBQUVULENBQUMsSUFBSUEsQ0FBQyxHQUFHQSxDQUFKLEdBQVFBLENBQVIsR0FBWUEsQ0FBWixHQUFnQkEsQ0F2Qkw7QUF3QjdCO0FBQ0FVLGNBQVksRUFBRVYsQ0FBQyxJQUFJLElBQUksRUFBRUEsQ0FBRixHQUFNQSxDQUFOLEdBQVVBLENBQVYsR0FBY0EsQ0FBZCxHQUFrQkEsQ0F6Qlo7QUEwQjdCO0FBQ0FXLGdCQUFjLEVBQUVYLENBQUMsSUFDZkEsQ0FBQyxHQUFHLEdBQUosR0FBVSxLQUFLQSxDQUFMLEdBQVNBLENBQVQsR0FBYUEsQ0FBYixHQUFpQkEsQ0FBakIsR0FBcUJBLENBQS9CLEdBQW1DLElBQUksS0FBSyxFQUFFQSxDQUFQLEdBQVdBLENBQVgsR0FBZUEsQ0FBZixHQUFtQkEsQ0FBbkIsR0FBdUJBO0FBNUJuQyxDQUF4QixDIiwiZmlsZSI6ImxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGlzX21lZGlhcXVlcnk6IGZhbHNlLFxuICBpc19yZWxlYXNlOiBmYWxzZSxcbiAgaXNfc3RhdHM6IHRydWUsXG4gIGltZ3M6IFt7IG5hbWU6IFwib3BJbWdcIiwgc3JjOiBcIi4vYXNzZXRzL3BuZy9pbWctMDEucG5nXCIsIHR5cGU6IFwiaW1nXCIgfV0sXG4gIGZvbnRzOiBcIj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiLFxuICBsaWJzOiBbeyBzcmM6IFwiLi9hc3NldHMvanMvbGliLmpzXCIsIHR5cGU6IFwic2NyaXB0XCIgfV0sXG4gIGFwcDogW3sgc3JjOiBcIi4vYXNzZXRzL2pzL2FwcC5qc1wiLCB0eXBlOiBcInNjcmlwdFwiIH1dXG59O1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL0NvbW1vbi9jb25maWcuZXM2XCI7XG5pbXBvcnQgeyBsb2FkRm9udHMsIGxvYWRTY3JpcHQsIGxvYWRJbWcgfSBmcm9tIFwiLi9VdGlsL0xvYWRlci5lczZcIjtcbmltcG9ydCB7IEVhc2luZ0Z1bmN0aW9ucyB9IGZyb20gXCIuL1V0aWwvZWFzaW5nLmVzNlwiO1xuY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3QgbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5udW1iZXJcIik7XG5jb25zdCBiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhclwiKTtcblxubGV0IGMgPSAwO1xubGV0IHRpbWUgPSAwO1xubGV0IG5vdyA9IDA7XG5jb25zdCBNQVggPSBjb25maWcubGlicy5sZW5ndGggKyBjb25maWcuaW1ncy5sZW5ndGggKyBjb25maWcuYXBwLmxlbmd0aCArIDE7XG5jb25zb2xlLmxvZyhNQVgpO1xuY29uc3QgU1BFRUQgPSAwLjAxO1xuXG5mdW5jdGlvbiB0aW1lbGluZSgpIHtcbiAgcmVuZGVyKCk7XG4gIGNvbnN0IF9mbGFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lbGluZSk7XG4gIGlmIChub3cgPiAwLjk5OSkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF9mbGFtZSk7XG4gICAgZ3NhcC50aW1lbGluZSgpLmFkZChlID0+IHtcbiAgICAgIGVuZCgpO1xuICAgIH0sIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29uc3QgcGVyID0gYyAvIE1BWDtcbiAgdGltZSArPSAxIC8gNjA7XG4gIGNvbnN0IHAgPSB0aW1lO1xuICBpZiAocCA8PSAxKSB7XG4gICAgbm93ID0gRWFzaW5nRnVuY3Rpb25zLmVhc2VPdXRRdWFkKHApICogcGVyO1xuICB9IGVsc2Uge1xuICAgIGlmIChwZXIgPCAxKSB7XG4gICAgICB0aW1lID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZSA9IG5vdztcbiAgICB9XG4gIH1cblxuICBudW1iZXIuaW5uZXJIVE1MID0gemVyb1BhZGRpbmcobm93KTtcbiAgYmFyLnN0eWxlID0gYHRyYW5zZm9ybTogc2NhbGVYKCR7bm93fSk7YDtcblxuICAvLyBub3cgPSBwZXJcbn1cblxuZnVuY3Rpb24gY291bnRlcigpIHtcbiAgKytjO1xufVxuXG5mdW5jdGlvbiB6ZXJvUGFkZGluZyhuKSB7XG4gIGNvbnN0IF9uID0gbmV3IE51bWJlcihuICogMTAwKS50b0ZpeGVkKDApO1xuXG4gIHJldHVybiBfbiA+PSAxMCA/IF9uIDogXCIwXCIgKyBfbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgYXdhaXQgbG9hZEZvbnRzKGhlYWQsIGNvbmZpZy5mb250cyk7XG4gIHRpbWVsaW5lKCk7XG4gIGNvdW50ZXIoKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwiZm9udC1sb2FkZWRcIik7XG4gIGZvciAoY29uc3Qgc2NyaXB0IG9mIGNvbmZpZy5saWJzKSB7XG4gICAgYXdhaXQgbG9hZFNjcmlwdChoZWFkLCBzY3JpcHQuc3JjKTtcbiAgICBjb3VudGVyKCk7XG4gIH1cbiAgZm9yIChjb25zdCBpbWcgb2YgY29uZmlnLmltZ3MpIHtcbiAgICBhd2FpdCBsb2FkSW1nKGltZy5zcmMpO1xuICAgIGNvdW50ZXIoKTtcbiAgfVxuICBhd2FpdCBsb2FkU2NyaXB0KGhlYWQsIGNvbmZpZy5hcHBbMF0uc3JjKTtcbiAgY291bnRlcigpO1xufVxuXG5mdW5jdGlvbiBlbmQoKSB7XG4gIGdzYXAudG8oXCIuYmFyXCIsIDAuNSwge1xuICAgIHNjYWxlWDogMCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFwiMTAwJSAwXCIsXG4gICAgZWFzZTogXCJleHBvLmluXCJcbiAgfSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGdzYXAuc2V0KFwiLm51bWJlclwiLCB7XG4gICAgICBvcGFjaXR5OiBpICUgMixcbiAgICAgIGRlbGF5OiBpICogMC4wNVxuICAgIH0pO1xuICB9XG4gIGdzYXAuc2V0KFwiLm51bWJlclwiLCB7XG4gICAgb3BhY2l0eTogMCxcbiAgICBkZWxheTogMTAgKiAwLjA1LFxuICAgIG9uQ29tcGxldGU6IGUgPT4ge1xuICAgICAgJChcIi5sb2FkZXJcIikucmVtb3ZlKCk7XG4gICAgICBsb2FkZWROYW1lKCk7XG4gICAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgICAkKHdpbmRvdykudHJpZ2dlcihcImN1c3RvbWxvYWRlZFwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkZWROYW1lKCkge1xuICBsZXQgcCA9IGA8cD4ke2NvbmZpZy5mb250c308L3A+YDtcbiAgY29uZmlnLmltZ3MubWFwKGUgPT4ge1xuICAgIHAgKz0gYDxwPiR7ZS5zcmN9PC9wPmA7XG4gIH0pO1xuICBjb25maWcubGlicy5tYXAoZSA9PiB7XG4gICAgcCArPSBgPHA+JHtlLnNyY308L3A+YDtcbiAgfSk7XG4gIGNvbmZpZy5hcHAubWFwKGUgPT4ge1xuICAgIHAgKz0gYDxwPiR7ZS5zcmN9PC9wPmA7XG4gIH0pO1xuICAkKFwiLmxvYWRlZC1yZXNvdXNlcyAuaW5uZXJcIikuYXBwZW5kKHApO1xufVxuXG5pbml0KCk7XG5cbmNvbnNvbGUubG9nKEVhc2luZ0Z1bmN0aW9ucyk7XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEZvbnRzKGhlYWQsIHBhdGgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBocmVmID0gXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzc1wiICsgcGF0aDtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgbGluay5vbmxvYWQgPSBlID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2NyaXB0KGhlYWQsIHBhdGgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzcmMgPSBwYXRoO1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgc2NyaXB0Lm9ubG9hZCA9IGUgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1nKHBhdGgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzcmMgPSBwYXRoO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5vbmxvYWQgPSBlID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuICAgIGltZy5zcmMgPSBwYXRoO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBFYXNpbmdGdW5jdGlvbnMgPSB7XG4gIC8vIG5vIGVhc2luZywgbm8gYWNjZWxlcmF0aW9uXG4gIGxpbmVhcjogdCA9PiB0LFxuICAvLyBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VJblF1YWQ6IHQgPT4gdCAqIHQsXG4gIC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VPdXRRdWFkOiB0ID0+IHQgKiAoMiAtIHQpLFxuICAvLyBhY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbiAgZWFzZUluT3V0UXVhZDogdCA9PiAodCA8IDAuNSA/IDIgKiB0ICogdCA6IC0xICsgKDQgLSAyICogdCkgKiB0KSxcbiAgLy8gYWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuICBlYXNlSW5DdWJpYzogdCA9PiB0ICogdCAqIHQsXG4gIC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VPdXRDdWJpYzogdCA9PiAtLXQgKiB0ICogdCArIDEsXG4gIC8vIGFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuICBlYXNlSW5PdXRDdWJpYzogdCA9PlxuICAgIHQgPCAwLjUgPyA0ICogdCAqIHQgKiB0IDogKHQgLSAxKSAqICgyICogdCAtIDIpICogKDIgKiB0IC0gMikgKyAxLFxuICAvLyBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VJblF1YXJ0OiB0ID0+IHQgKiB0ICogdCAqIHQsXG4gIC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VPdXRRdWFydDogdCA9PiAxIC0gLS10ICogdCAqIHQgKiB0LFxuICAvLyBhY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbiAgZWFzZUluT3V0UXVhcnQ6IHQgPT4gKHQgPCAwLjUgPyA4ICogdCAqIHQgKiB0ICogdCA6IDEgLSA4ICogLS10ICogdCAqIHQgKiB0KSxcbiAgLy8gYWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuICBlYXNlSW5RdWludDogdCA9PiB0ICogdCAqIHQgKiB0ICogdCxcbiAgLy8gZGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbiAgZWFzZU91dFF1aW50OiB0ID0+IDEgKyAtLXQgKiB0ICogdCAqIHQgKiB0LFxuICAvLyBhY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbiAgZWFzZUluT3V0UXVpbnQ6IHQgPT5cbiAgICB0IDwgMC41ID8gMTYgKiB0ICogdCAqIHQgKiB0ICogdCA6IDEgKyAxNiAqIC0tdCAqIHQgKiB0ICogdCAqIHRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9