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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n  \r\n    sr = ScrollReveal();\r\n\r\n    sr.reveal('.collapse', {\r\n      duration: 800,\r\n      origin: 'top',\r\n      distance: '150px',\r\n      delay: 100\r\n    });\r\n\r\n    sr.reveal('.navbar', {\r\n      duration: 400,\r\n      origin: 'bottom',\r\n      delay: 120\r\n    });\r\n\r\n    sr.reveal('.carousel-inner', {\r\n      duration: 1200,\r\n      origin: 'top',\r\n      distance: '10px',\r\n      delay: 50\r\n    });\r\n\r\n    sr.reveal('.line', {\r\n      duration: 1200,\r\n      distance: '300px',\r\n      origin: 'right',\r\n      delay: 50\r\n\r\n    });\r\n\r\n    sr.reveal('.bg-equipo', {\r\n      duration: 1200,\r\n      distance: '300px',\r\n      origin: 'right',\r\n      delay: 50\r\n    });\r\n\r\n    sr.reveal('.we-are', {\r\n      duration: 1200,\r\n      distance: '300px',\r\n      origin: 'right',\r\n      delay: 50\r\n\r\n    });\r\n\r\n    sr.reveal('.noticia-1', {\r\n      duration: 1200,\r\n      distance: '300px',\r\n      origin: 'right',\r\n      delay: 50\r\n    });\r\n\r\n   sr.reveal('.noticia-2', {\r\n      duration: 1200,\r\n      distance: '300px',\r\n      origin: 'left',\r\n      delay: 50\r\n    })\r\n   sr.reveal('.noticia-3', {\r\n      duration: 1200,\r\n      distance: '300px',\r\n      origin: 'right',\r\n      delay: 50\r\n    });\r\n    sr.reveal('.form-class', {\r\n      duration: 1700,\r\n      delay: 50\r\n    });\r\n    sr.reveal('.bg-footer', {\r\n      duration: 1700,\r\n      delay: 50\r\n    });\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICAgIHNyID0gU2Nyb2xsUmV2ZWFsKCk7XHJcblxyXG4gICAgc3IucmV2ZWFsKCcuY29sbGFwc2UnLCB7XHJcbiAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgIG9yaWdpbjogJ3RvcCcsXHJcbiAgICAgIGRpc3RhbmNlOiAnMTUwcHgnLFxyXG4gICAgICBkZWxheTogMTAwXHJcbiAgICB9KTtcclxuXHJcbiAgICBzci5yZXZlYWwoJy5uYXZiYXInLCB7XHJcbiAgICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgICAgIG9yaWdpbjogJ2JvdHRvbScsXHJcbiAgICAgIGRlbGF5OiAxMjBcclxuICAgIH0pO1xyXG5cclxuICAgIHNyLnJldmVhbCgnLmNhcm91c2VsLWlubmVyJywge1xyXG4gICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgb3JpZ2luOiAndG9wJyxcclxuICAgICAgZGlzdGFuY2U6ICcxMHB4JyxcclxuICAgICAgZGVsYXk6IDUwXHJcbiAgICB9KTtcclxuXHJcbiAgICBzci5yZXZlYWwoJy5saW5lJywge1xyXG4gICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgZGlzdGFuY2U6ICczMDBweCcsXHJcbiAgICAgIG9yaWdpbjogJ3JpZ2h0JyxcclxuICAgICAgZGVsYXk6IDUwXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgc3IucmV2ZWFsKCcuYmctZXF1aXBvJywge1xyXG4gICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgZGlzdGFuY2U6ICczMDBweCcsXHJcbiAgICAgIG9yaWdpbjogJ3JpZ2h0JyxcclxuICAgICAgZGVsYXk6IDUwXHJcbiAgICB9KTtcclxuXHJcbiAgICBzci5yZXZlYWwoJy53ZS1hcmUnLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAxMjAwLFxyXG4gICAgICBkaXN0YW5jZTogJzMwMHB4JyxcclxuICAgICAgb3JpZ2luOiAncmlnaHQnLFxyXG4gICAgICBkZWxheTogNTBcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBzci5yZXZlYWwoJy5ub3RpY2lhLTEnLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAxMjAwLFxyXG4gICAgICBkaXN0YW5jZTogJzMwMHB4JyxcclxuICAgICAgb3JpZ2luOiAncmlnaHQnLFxyXG4gICAgICBkZWxheTogNTBcclxuICAgIH0pO1xyXG5cclxuICAgc3IucmV2ZWFsKCcubm90aWNpYS0yJywge1xyXG4gICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgZGlzdGFuY2U6ICczMDBweCcsXHJcbiAgICAgIG9yaWdpbjogJ2xlZnQnLFxyXG4gICAgICBkZWxheTogNTBcclxuICAgIH0pXHJcbiAgIHNyLnJldmVhbCgnLm5vdGljaWEtMycsIHtcclxuICAgICAgZHVyYXRpb246IDEyMDAsXHJcbiAgICAgIGRpc3RhbmNlOiAnMzAwcHgnLFxyXG4gICAgICBvcmlnaW46ICdyaWdodCcsXHJcbiAgICAgIGRlbGF5OiA1MFxyXG4gICAgfSk7XHJcbiAgICBzci5yZXZlYWwoJy5mb3JtLWNsYXNzJywge1xyXG4gICAgICBkdXJhdGlvbjogMTcwMCxcclxuICAgICAgZGVsYXk6IDUwXHJcbiAgICB9KTtcclxuICAgIHNyLnJldmVhbCgnLmJnLWZvb3RlcicsIHtcclxuICAgICAgZHVyYXRpb246IDE3MDAsXHJcbiAgICAgIGRlbGF5OiA1MFxyXG4gICAgfSk7XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ })

/******/ });