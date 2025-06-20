/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ./src/scripts/components/product-recommendations.js ***!
  \***********************************************************/
class ProductRecommendations extends HTMLElement {
  constructor() {
    super();
    fetch(this.dataset.url).then(response => response.text()).then(responseText => {
      const html = document.createElement('div');
      html.innerHTML = responseText;
      this.innerHTML = '';
      this.appendChild(html);
    });
  }
}
if (!customElements.get('product-recommendations')) customElements.define('product-recommendations', ProductRecommendations);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXByb2R1Y3QtcmVjb21tZW5kYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsc0JBQXNCLFNBQVNDLFdBQVcsQ0FBQztFQUMvQ0MsV0FBV0EsQ0FBQSxFQUFHO0lBQ1osS0FBSyxDQUFDLENBQUM7SUFFUEMsS0FBSyxDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FDcEJDLElBQUksQ0FBRUMsUUFBUSxJQUFLQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDbkNGLElBQUksQ0FBRUcsWUFBWSxJQUFLO01BQ3RCLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDRixJQUFJLENBQUNHLFNBQVMsR0FBR0osWUFBWTtNQUM3QixJQUFJLENBQUNJLFNBQVMsR0FBRyxFQUFFO01BQ25CLElBQUksQ0FBQ0MsV0FBVyxDQUFDSixJQUFJLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDRjtBQUVBLElBQUksQ0FBQ0ssY0FBYyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUMsRUFDaERELGNBQWMsQ0FBQ0UsTUFBTSxDQUFDLHlCQUF5QixFQUFFakIsc0JBQXNCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JmLXNob3BpZnktb3MyLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0LXJlY29tbWVuZGF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9kdWN0UmVjb21tZW5kYXRpb25zIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICBmZXRjaCh0aGlzLmRhdGFzZXQudXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAudGhlbigocmVzcG9uc2VUZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBodG1sLmlubmVySFRNTCA9IHJlc3BvbnNlVGV4dFxuICAgICAgICB0aGlzLmlubmVySFRNTCA9ICcnXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoaHRtbClcbiAgICAgIH0pXG4gIH1cbn1cblxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ3Byb2R1Y3QtcmVjb21tZW5kYXRpb25zJykpXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvZHVjdC1yZWNvbW1lbmRhdGlvbnMnLCBQcm9kdWN0UmVjb21tZW5kYXRpb25zKVxuIl0sIm5hbWVzIjpbIlByb2R1Y3RSZWNvbW1lbmRhdGlvbnMiLCJIVE1MRWxlbWVudCIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJkYXRhc2V0IiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsImh0bWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImN1c3RvbUVsZW1lbnRzIiwiZ2V0IiwiZGVmaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==