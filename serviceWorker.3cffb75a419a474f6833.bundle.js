"use strict";
(self["webpackChunkgerador_validador_cpf"] = self["webpackChunkgerador_validador_cpf"] || []).push([[49],{

/***/ 6946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerServiceWorker": () => (/* binding */ registerServiceWorker)
/* harmony export */ });
const registerServiceWorker = () => {
  if (navigator.serviceWorker.controller) {
    console.info('Active service worker found, no need to register');
  } else {
    // Register ServiceWorker
    navigator.serviceWorker.register('service-worker.js', {
      scope: './'
    }).then(function (reg) {
      return console.info('Service worker has been registered for scope: ' + reg.scope);
    }).catch(() => {
      console.error("Service worker hasn't been registered");
    });
  }
};

/***/ })

}]);
//# sourceMappingURL=serviceWorker.3cffb75a419a474f6833.bundle.js.map