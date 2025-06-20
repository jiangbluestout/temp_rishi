/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/utils/forEachNode.js":
/*!******************************************!*\
  !*** ./src/scripts/utils/forEachNode.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((domNodeList, callback) => {
  let mappedReturns = [];
  for (let i = 0; i < domNodeList.length; i++) {
    mappedReturns.push(callback(domNodeList[i], i));
  }
  return mappedReturns;
});

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
/*!***************************************!*\
  !*** ./src/scripts/components/faq.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_forEachNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/forEachNode */ "./src/scripts/utils/forEachNode.js");

const sideBarLinks = document.querySelectorAll('.faq-category-sidebar-title');
const faqQuestions = document.querySelectorAll('.faq-question');

// reveal / hide answer on click
(0,_utils_forEachNode__WEBPACK_IMPORTED_MODULE_0__["default"])(faqQuestions, question => {
  question.addEventListener('click', () => {
    let answer = question.querySelector('.faq-answer');
    let questionClosed = question.querySelector('.faq-question-closed');
    let questionOpened = question.querySelector('.faq-question-opened');
    answer.classList.toggle('active');
    questionClosed.classList.toggle('hidden');
    questionOpened.classList.toggle('hidden');
  });
});

// show active sidebar link
(0,_utils_forEachNode__WEBPACK_IMPORTED_MODULE_0__["default"])(sideBarLinks, sideBarLink => {
  sideBarLink.addEventListener('click', () => {
    let activeLinkIndex = sideBarLink.dataset.index;
    (0,_utils_forEachNode__WEBPACK_IMPORTED_MODULE_0__["default"])(sideBarLinks, link => {
      if (link.dataset.index === activeLinkIndex) {
        if (!link.classList.contains('active')) {
          link.classList.add('active');
        }
      } else {
        if (link.classList.contains('active')) {
          link.classList.remove('active');
        }
      }
    });
  });
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWZhcS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUFlLENBQUNBLFdBQVcsRUFBRUMsUUFBUSxLQUFLO0VBQ3hDLElBQUlDLGFBQWEsR0FBRyxFQUFFO0VBRXRCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxXQUFXLENBQUNJLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDM0NELGFBQWEsQ0FBQ0csSUFBSSxDQUFDSixRQUFRLENBQUNELFdBQVcsQ0FBQ0csQ0FBQyxDQUFDLEVBQUVBLENBQUMsQ0FBQyxDQUFDO0VBQ2pEO0VBRUEsT0FBT0QsYUFBYTtBQUN0QixDQUFDOzs7Ozs7VUNSRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QztBQUU5QyxNQUFNSyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsNkJBQTZCLENBQUM7QUFDN0UsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQzs7QUFFL0Q7QUFDQUgsOERBQVcsQ0FBQ0ksWUFBWSxFQUFHQyxRQUFRLElBQUs7RUFDdENBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDdkMsSUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDbEQsSUFBSUMsY0FBYyxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztJQUNuRSxJQUFJRSxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHNCQUFzQixDQUFDO0lBRW5FRCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNqQ0gsY0FBYyxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekNGLGNBQWMsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0VBQzNDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBWiw4REFBVyxDQUFDQyxZQUFZLEVBQUdZLFdBQVcsSUFBSztFQUN6Q0EsV0FBVyxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUMxQyxJQUFJUSxlQUFlLEdBQUdELFdBQVcsQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLO0lBQy9DaEIsOERBQVcsQ0FBQ0MsWUFBWSxFQUFHZ0IsSUFBSSxJQUFLO01BQ2xDLElBQUlBLElBQUksQ0FBQ0YsT0FBTyxDQUFDQyxLQUFLLEtBQUtGLGVBQWUsRUFBRTtRQUMxQyxJQUFJLENBQUNHLElBQUksQ0FBQ04sU0FBUyxDQUFDTyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDdENELElBQUksQ0FBQ04sU0FBUyxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzlCO01BQ0YsQ0FBQyxNQUFNO1FBQ0wsSUFBSUYsSUFBSSxDQUFDTixTQUFTLENBQUNPLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtVQUNyQ0QsSUFBSSxDQUFDTixTQUFTLENBQUNTLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakM7TUFDRjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmYtc2hvcGlmeS1vczIvLi9zcmMvc2NyaXB0cy91dGlscy9mb3JFYWNoTm9kZS5qcyIsIndlYnBhY2s6Ly9iZi1zaG9waWZ5LW9zMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iZi1zaG9waWZ5LW9zMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JmLXNob3BpZnktb3MyLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9mYXEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGRvbU5vZGVMaXN0LCBjYWxsYmFjaykgPT4ge1xuICBsZXQgbWFwcGVkUmV0dXJucyA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21Ob2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIG1hcHBlZFJldHVybnMucHVzaChjYWxsYmFjayhkb21Ob2RlTGlzdFtpXSwgaSkpXG4gIH1cblxuICByZXR1cm4gbWFwcGVkUmV0dXJuc1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZvckVhY2hOb2RlIGZyb20gJy4uL3V0aWxzL2ZvckVhY2hOb2RlJ1xuXG5jb25zdCBzaWRlQmFyTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFxLWNhdGVnb3J5LXNpZGViYXItdGl0bGUnKVxuY29uc3QgZmFxUXVlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcS1xdWVzdGlvbicpXG5cbi8vIHJldmVhbCAvIGhpZGUgYW5zd2VyIG9uIGNsaWNrXG5mb3JFYWNoTm9kZShmYXFRdWVzdGlvbnMsIChxdWVzdGlvbikgPT4ge1xuICBxdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgYW5zd2VyID0gcXVlc3Rpb24ucXVlcnlTZWxlY3RvcignLmZhcS1hbnN3ZXInKVxuICAgIGxldCBxdWVzdGlvbkNsb3NlZCA9IHF1ZXN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5mYXEtcXVlc3Rpb24tY2xvc2VkJylcbiAgICBsZXQgcXVlc3Rpb25PcGVuZWQgPSBxdWVzdGlvbi5xdWVyeVNlbGVjdG9yKCcuZmFxLXF1ZXN0aW9uLW9wZW5lZCcpXG5cbiAgICBhbnN3ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICBxdWVzdGlvbkNsb3NlZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgIHF1ZXN0aW9uT3BlbmVkLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gIH0pXG59KVxuXG4vLyBzaG93IGFjdGl2ZSBzaWRlYmFyIGxpbmtcbmZvckVhY2hOb2RlKHNpZGVCYXJMaW5rcywgKHNpZGVCYXJMaW5rKSA9PiB7XG4gIHNpZGVCYXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBhY3RpdmVMaW5rSW5kZXggPSBzaWRlQmFyTGluay5kYXRhc2V0LmluZGV4XG4gICAgZm9yRWFjaE5vZGUoc2lkZUJhckxpbmtzLCAobGluaykgPT4ge1xuICAgICAgaWYgKGxpbmsuZGF0YXNldC5pbmRleCA9PT0gYWN0aXZlTGlua0luZGV4KSB7XG4gICAgICAgIGlmICghbGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG4iXSwibmFtZXMiOlsiZG9tTm9kZUxpc3QiLCJjYWxsYmFjayIsIm1hcHBlZFJldHVybnMiLCJpIiwibGVuZ3RoIiwicHVzaCIsImZvckVhY2hOb2RlIiwic2lkZUJhckxpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmFxUXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiYW5zd2VyIiwicXVlcnlTZWxlY3RvciIsInF1ZXN0aW9uQ2xvc2VkIiwicXVlc3Rpb25PcGVuZWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzaWRlQmFyTGluayIsImFjdGl2ZUxpbmtJbmRleCIsImRhdGFzZXQiLCJpbmRleCIsImxpbmsiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=