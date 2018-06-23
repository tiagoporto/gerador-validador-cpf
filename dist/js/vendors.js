// event listener: DOM ready
function addLoadEvent(func) {
    'use strict';
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}
addLoadEvent(
    // call plugins after DOM ready

    hljs.initHighlightingOnLoad(),

    new Clipboard('.generate-section__copy-button, .format-section__copy-button'),

    $('#validate-section__input--to-format').mask('999.999.999-99')
);

// This is the "Offline copy of pages" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
  console.log('Active service worker found, no need to register')
} else {
  // Register the ServiceWorker
  navigator.serviceWorker.register('service-worker.js', { scope: './' }).then(function (reg) {
    console.log('Service worker has been registered for scope: ' + reg.scope)
  })
}
