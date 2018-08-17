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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mapStyle = __webpack_require__(4);

window.initMap = function () {
  var pos = {
    lat: 48.770711,
    lng: -122.446827
  };
  var offset = {
    lat: 48.771,
    lng: -122.446827
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: offset,
    disableDefaultUI: true,
    styles: _mapStyle.mapStyle
  });
  map.mapTypes.set();
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: "/dist/images/map-marker.png",
    animation: google.maps.Animation.DROP
  });
}; // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters


function getUrlParams() {
  var vars = window.location.search.substring(1).split("&");
  var result = {};

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");

    if (typeof result[pair[0]] === "undefined") {
      result[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof result[pair[0]] === "string") {
      var arr = [result[pair[0]], decodeURIComponent(pair[1])];
      result[pair[0]] = arr;
    } else {
      result[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }

  return result;
}

window.initPopup = function () {
  var params = getUrlParams();

  if (params.type) {
    var popup = document.getElementById("popup");
    var content = document.getElementById("popup__content");
    var close = document.getElementById("popup__close");
    var heading = document.getElementById("popup__heading");
    var text = document.getElementById("popup__text");
    var reflink = document.getElementById("popup__reflink");

    switch (params.type) {
      case "signup":
        heading.innerText = "Thanks for signing up, ".concat(params.name, "!");
        text.innerText = "Please check your email for a 25% off coupon \uD83D\uDE09";
        reflink.href = "/pages/signup";
        break;

      case "contact":
        heading.innerText = "Thanks for the message, ".concat(params.name, "!");
        text.innerText = "You should get an email soon confirming that we got the message. We'll try to respond as soon as possible.";
        reflink.href = "pages/contact";
        break;
    }

    popup.className = "shown";

    close.onclick = function () {
      popup.className = "";
    };
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStyle = void 0;
var mapStyle = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#ebe3cd"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#523735"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#f5f1e6"
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#c9b2a6"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#dcd2be"
  }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#ae9e90"
  }]
}, {
  "featureType": "landscape.natural",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dfd2ae"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dfd2ae"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#93817c"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#c4e5aa"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#a5b076"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#447530"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f1e6"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [{
    "color": "#fdfcf8"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#f8c967"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#e9bc62"
  }]
}, {
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry",
  "stylers": [{
    "color": "#e98d58"
  }]
}, {
  "featureType": "road.highway.controlled_access",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#db8555"
  }]
}, {
  "featureType": "road.local",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#806b63"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dfd2ae"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#8f7d77"
  }]
}, {
  "featureType": "transit.line",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#ebe3cd"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dfd2ae"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#73cdff"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#b9d3c2"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#92998d"
  }]
}];
exports.mapStyle = mapStyle;

/***/ })
/******/ ]);