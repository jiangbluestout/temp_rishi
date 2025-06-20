/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/api/klaviyo.js":
/*!************************************!*\
  !*** ./src/scripts/api/klaviyo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribe: function() { return /* binding */ subscribe; }
/* harmony export */ });
const {
  fetch
} = __webpack_require__.g;
const subscribe = function (listId, email) {
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const config = Object.assign({}, params, {
    g: listId,
    email
  });
  const body = Object.keys(config).reduce((str, key) => {
    str.append(key, config[key]);
    return str;
  }, new URLSearchParams());
  return fetch('https://manage.kmail-lists.com/ajax/subscriptions/subscribe', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body
  }).then(res => res.json());
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************************!*\
  !*** ./src/scripts/components/klaviyo-form.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_klaviyo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/klaviyo */ "./src/scripts/api/klaviyo.js");

class KlaviyoForm extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector("form");
    this.emailContainer = this.querySelector(".input__primary");
    this.emailInput = this.querySelector('input[name="email"]');
    this.inputWrapper = this.querySelector(".js-email-input-wrapper");
    this.successWrapper = this.querySelector(".js-email-success");
    this.errorWrapper = this.querySelector(".js-email-error");
    this.submit = this.querySelector('button[type="submit"]');
    this.form.addEventListener("submit", this.onSubmit);
  }
  destroy = () => {
    this.form.removeEventListener("submit", this.onSubmit);
  };
  onSubmit = event => {
    event.preventDefault();
    (0,_api_klaviyo__WEBPACK_IMPORTED_MODULE_0__.subscribe)(KLAVIYO_LIST_ID, this.emailInput.value).then(response => {
      if (!response.success) {
        // throw new Error(response.errors[0])
        console.error(response);
        //  this.emailContainer.classList.add("opacity-50");
        // this.submit.classList.remove('cursor-pointer')

        this.errorWrapper.classList.remove("hidden");
        this.errorWrapper.innerHTML = response.errors[0];
        this.emailContainer.classList.add("error");
        setTimeout(() => {
          this.errorWrapper.classList.add("hidden");
          this.emailContainer.classList.remove("error");
        }, 3000);
        return;
      }
      this.errorWrapper.classList.remove("error");
      this.errorWrapper.classList.add("hidden");
      this.submit.style.display = "none";
      // this.emailInput.classList.add('hidden')
      this.emailInput.value = "You're signed up!";
      this.emailInput.disabled = true;
      this.emailInput.style.pointerEvents = "none";
      this.submit.disabled = true;

      // this.successWrapper.classList.remove('hidden')
    }).catch(error => {
      console.error(error);
      this.errorWrapper.classList.remove("hidden");
      this.errorWrapper.innerHTML = response.errors[0];
      this.emailContainer.classList.add("error");
      setTimeout(() => {
        this.errorWrapper.classList.add("hidden");
        this.emailContainer.classList.remove("error");
      }, 3000);
    });
  };
}
if (!customElements.get("klaviyo-form")) customElements.define("klaviyo-form", KlaviyoForm);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN6QixVQUFVLENBQUN1QixLQUFLLENBQUNHLGFBQWEsR0FBRyxNQUFNO01BQzVDLElBQUksQ0FBQ3RCLE1BQU0sQ0FBQ3FCLFFBQVEsR0FBRyxJQUFJOztNQUUzQjtJQUNGLENBQUMsQ0FBQyxDQUNERSxLQUFLLENBQUVYLEtBQUssSUFBSztNQUNoQkQsT0FBTyxDQUFDQyxLQUFLLENBQUNBLEtBQUssQ0FBQztNQUNwQixJQUFJLENBQUNiLFlBQVksQ0FBQ2MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQzVDLElBQUksQ0FBQ2YsWUFBWSxDQUFDZ0IsU0FBUyxHQUFHTixRQUFRLENBQUNPLE1BQU0sQ0FBQyxDQUFDLENBQUM7TUFDaEQsSUFBSSxDQUFDckIsY0FBYyxDQUFDa0IsU0FBUyxDQUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDO01BQzFDQyxVQUFVLENBQUMsTUFBTTtRQUNmLElBQUksQ0FBQ25CLFlBQVksQ0FBQ2MsU0FBUyxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQUksQ0FBQ3RCLGNBQWMsQ0FBQ2tCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUMvQyxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1YsQ0FBQyxDQUFDO0VBQ04sQ0FBQztBQUNIO0FBRUEsSUFBSSxDQUFDVSxjQUFjLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDckNELGNBQWMsQ0FBQ0UsTUFBTSxDQUFDLGNBQWMsRUFBRXBDLFdBQVcsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmYtc2hvcGlmeS1vczIvLi9zcmMvc2NyaXB0cy9hcGkva2xhdml5by5qcyIsIndlYnBhY2s6Ly9iZi1zaG9waWZ5LW9zMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iZi1zaG9waWZ5LW9zMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmYtc2hvcGlmeS1vczIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iZi1zaG9waWZ5LW9zMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JmLXNob3BpZnktb3MyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmYtc2hvcGlmeS1vczIvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2tsYXZpeW8tZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGZldGNoIH0gPSBnbG9iYWxcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZSA9IChcbiAgbGlzdElkLFxuICBlbWFpbCxcbiAgcGFyYW1zID0ge31cbikgPT4ge1xuICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMsIHtcbiAgICBnOiBsaXN0SWQsXG4gICAgZW1haWwsXG4gIH0pXG5cbiAgY29uc3QgYm9keSA9IE9iamVjdC5rZXlzKGNvbmZpZykucmVkdWNlKChzdHIsIGtleSkgPT4ge1xuICAgIHN0ci5hcHBlbmQoa2V5LCBjb25maWdba2V5XSlcbiAgICByZXR1cm4gc3RyXG4gIH0sIG5ldyBVUkxTZWFyY2hQYXJhbXMoKSlcblxuICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vbWFuYWdlLmttYWlsLWxpc3RzLmNvbS9hamF4L3N1YnNjcmlwdGlvbnMvc3Vic2NyaWJlJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJyonLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxuICAgIH0sXG4gICAgYm9keSxcbiAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tIFwiLi4vYXBpL2tsYXZpeW9cIjtcblxuY2xhc3MgS2xhdml5b0Zvcm0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICB0aGlzLmVtYWlsQ29udGFpbmVyID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X19wcmltYXJ5XCIpO1xuICAgIHRoaXMuZW1haWxJbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgdGhpcy5pbnB1dFdyYXBwZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZW1haWwtaW5wdXQtd3JhcHBlclwiKTtcbiAgICB0aGlzLnN1Y2Nlc3NXcmFwcGVyID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiLmpzLWVtYWlsLXN1Y2Nlc3NcIik7XG4gICAgdGhpcy5lcnJvcldyYXBwZXIgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIuanMtZW1haWwtZXJyb3JcIik7XG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5vblN1Ym1pdCk7XG4gIH1cblxuICBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHRoaXMuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMub25TdWJtaXQpO1xuICB9O1xuXG4gIG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHN1YnNjcmliZShLTEFWSVlPX0xJU1RfSUQsIHRoaXMuZW1haWxJbnB1dC52YWx1ZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3JzWzBdKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgIC8vICB0aGlzLmVtYWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGFjaXR5LTUwXCIpO1xuICAgICAgICAgIC8vIHRoaXMuc3VibWl0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnNvci1wb2ludGVyJylcblxuICAgICAgICAgIHRoaXMuZXJyb3JXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgdGhpcy5lcnJvcldyYXBwZXIuaW5uZXJIVE1MID0gcmVzcG9uc2UuZXJyb3JzWzBdO1xuICAgICAgICAgIHRoaXMuZW1haWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICAgICAgICAgICAgdGhpcy5lbWFpbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcbiAgICAgICAgdGhpcy5lcnJvcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvLyB0aGlzLmVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgdGhpcy5lbWFpbElucHV0LnZhbHVlID0gXCJZb3UncmUgc2lnbmVkIHVwIVwiO1xuICAgICAgICB0aGlzLmVtYWlsSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtYWlsSW5wdXQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLnN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gdGhpcy5zdWNjZXNzV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMuZXJyb3JXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIHRoaXMuZXJyb3JXcmFwcGVyLmlubmVySFRNTCA9IHJlc3BvbnNlLmVycm9yc1swXTtcbiAgICAgICAgdGhpcy5lbWFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgdGhpcy5lbWFpbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgfSk7XG4gIH07XG59XG5cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KFwia2xhdml5by1mb3JtXCIpKVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJrbGF2aXlvLWZvcm1cIiwgS2xhdml5b0Zvcm0pO1xuIl0sIm5hbWVzIjpbImZldGNoIiwiZ2xvYmFsIiwic3Vic2NyaWJlIiwibGlzdElkIiwiZW1haWwiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJnIiwiYm9keSIsImtleXMiLCJyZWR1Y2UiLCJzdHIiLCJrZXkiLCJhcHBlbmQiLCJVUkxTZWFyY2hQYXJhbXMiLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJLbGF2aXlvRm9ybSIsIkhUTUxFbGVtZW50IiwiY29uc3RydWN0b3IiLCJmb3JtIiwicXVlcnlTZWxlY3RvciIsImVtYWlsQ29udGFpbmVyIiwiZW1haWxJbnB1dCIsImlucHV0V3JhcHBlciIsInN1Y2Nlc3NXcmFwcGVyIiwiZXJyb3JXcmFwcGVyIiwic3VibWl0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU3VibWl0IiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiS0xBVklZT19MSVNUX0lEIiwidmFsdWUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJlcnJvcnMiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiLCJwb2ludGVyRXZlbnRzIiwiY2F0Y2giLCJjdXN0b21FbGVtZW50cyIsImdldCIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=