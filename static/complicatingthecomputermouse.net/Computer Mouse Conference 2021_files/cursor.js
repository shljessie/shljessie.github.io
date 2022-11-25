var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/client.js":
/*!**************************!*\
  !*** ./src/js/client.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const socket = io();\nconst cursors = document.querySelector(\".cursors\");\nlet cursorId = \"\";\n// let scrollerId = \"\";\nlet count;\n\nconst newHomepageVistorConnected = (visitor) => {\n    cursorId = visitor || `Visitor${Math.floor(Math.random() * 1000000)}`;\n    socket.emit(\"new homepage visitor\", cursorId);\n    addVisitorsToCount(cursorId);\n};\n\nconst addVisitorsToCount = (cursorId, count) => {\n    if (!!document.querySelector(`.${cursorId}-userlist`)) {\n        return;\n    }\n\n    const userBox = `<div class=\"cursor ${cursorId}-userlist\"><span class=\"cursor-id\">${cursorId}</span></div>`;\n    cursors.innerHTML += userBox;\n    const box = document.querySelector(`.${cursorId}-userlist`);\n    const xy = getRandomPosition(box, '.cursors');\n    box.style.top = xy[0] + 'px';\n    box.style.left = xy[1] + 'px';\n};\n\nnewHomepageVistorConnected();\n\nsocket.on(\"new homepage visitor\", function (data) {\n    count = data.length\n    data.map((user) => addVisitorsToCount(user, count));\n});\n\nsocket.on(\"visitor disconnected\", function (cursorId) {\n    let visitorCursor = document.querySelector(`.${cursorId}-userlist`);\n    if (visitorCursor) {\n        visitorCursor.remove();\n    }\n});\n\nfunction getRandomPosition(element, area) {\n    const availableSpace = document.querySelector(area);\n    const x = availableSpace.offsetHeight - element.clientHeight;\n    const y = availableSpace.offsetWidth - element.clientWidth;\n    const randomX = Math.floor(Math.random() * x);\n    const randomY = Math.floor(Math.random() * y);\n    return [randomX, randomY];\n}\n\n// DADA OF ALL DEMOS WEBRTC CODE\n// ----------------------webRTC stuff below don't touch------------------------------\n// const createViewer = require('../mediasoup-viewer/viewer/mediasoup-viewer.js');\n// let hasStarted = false;\n// const viewerWindow = document.getElementById('web-rtc-goes-inside-here');\n// const clickNotice = document.createElement('h2');\n// clickNotice.innerHTML = 'Click here to view the livestream';\n// viewerWindow.appendChild(clickNotice);\n\n// change server address #1\n\n// running on web virtual machine\n// const server = `wss://complicatingthecomputermouse.net:8000`\n// running locally\n// const server = `wss://localhost:8000/`\n// window.onclick = () => {\n//     if (!hasStarted) {\n\n//         // create a video element and add it to the page\n//         const video = document.createElement('video');\n//         video.autoplay = true;\n//         video.width = window.innerWidth;\n//         video.height = window.innerHeight;\n//         video.id = \"broadCastVideo\";\n//         // video.controls = true\n//         viewerWindow.innerHTML = '';\n//         viewerWindow.appendChild(video);\n//         // document.body.appendChild(mainDiv);\n\n//         // turn the video element into a viewer for server location `const server = wss://localhost:8000`\n//         const viewer = createViewer({\n//             videoEl: video,\n//             server: server\n//         })\n//         hasStarted = true\n//     }\n// }\n\n// DADA OF ALL DEMOS COLLECTIVE SCROLLING CODE\n// socket.on(\"check active scrollers\", function (data) {\n//     data.map((scroller) => addScrollersToPage(scroller));\n// });\n\n// const addScrollersToPage = (scrollerId) => {\n//     if (!!document.querySelector(`#${scrollerId}-scroller-page`)) {\n//         return;\n//     }\n//     let iframe = document.createElement('iframe');\n//     iframe.src = \"scroller-page/index.html\";\n//     iframe.setAttribute(\"scrolling\", \"no\");\n//     iframe.classList.add(\"scroller-frame\");\n//     iframe.id = `${scrollerId}-scroller-page`;\n//     document.getElementById(\"scrollers\").appendChild(iframe);\n\n//     const xy = getRandomPosition(iframe, '#scrollers');\n//     iframe.style.top = xy[0] + 'px';\n//     iframe.style.left = xy[1] + 'px';\n// };\n\n// socket.on(\"new scroller\", function (data) {\n//     if (data.length > 0) {\n//         scrollerId = data[data.length - 1];\n//     } else {\n//         scrollerId = data[0];\n//     }\n\n//     let iframe = document.createElement('iframe');\n//     iframe.src = \"scroller-page/index.html\";\n//     iframe.setAttribute(\"scrolling\", \"no\");\n//     iframe.classList.add(\"scroller-frame\");\n//     iframe.id = `${scrollerId}-scroller-page`;\n//     document.getElementById(\"scrollers\").appendChild(iframe);\n\n//     const xy = getRandomPosition(iframe, '#scrollers');\n//     iframe.style.top = xy[0] + 'px';\n//     iframe.style.left = xy[1] + 'px';\n// });\n\n// socket.on(\"is scrolling\", function (data) {\n//     let scrollersPosition;\n//     if (data[0]) scrollerId = data[0];\n//     if (data[1]) scrollersPosition = data[1];\n//     let scrollingFrame = document.getElementById(`${scrollerId}-scroller-page`);\n\n//     if (scrollingFrame) {\n//         let docHeight = scrollingFrame.contentWindow.document.body.offsetHeight;\n//         let dupedPosition = docHeight * scrollersPosition * 0.01;\n//         let scrollPercentRounded = Math.round(dupedPosition);\n//         scrollingFrame.contentWindow.scrollTo(0, scrollPercentRounded - 40);\n//     }\n// });\n\n// socket.on(\"scroller disconnected\", function (scrollerId) {\n//     let scroller = document.getElementById(`${scrollerId}-scroller-page`);\n//     if (scroller) {\n//         scroller.remove();\n//     }\n// });\n\n//# sourceURL=webpack:///./src/js/client.js?");

/***/ })

/******/ });

}
/*
     FILE ARCHIVED ON 15:48:40 May 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:41:23 Oct 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 105.189
  exclusion.robots: 0.088
  exclusion.robots.policy: 0.082
  RedisCDXSource: 0.764
  esindex: 0.009
  LoadShardBlock: 86.065 (3)
  PetaboxLoader3.datanode: 89.964 (4)
  CDXLines.iter: 16.293 (3)
  load_resource: 69.908
  PetaboxLoader3.resolve: 60.232
*/