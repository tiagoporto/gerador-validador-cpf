if (navigator.serviceWorker.controller) {
  console.info('Active service worker found, no need to register')
} else {
  // Register ServiceWorker
  navigator.serviceWorker
    .register('service-worker.js', { scope: './' })
    .then(function (reg) {
      console.info('Service worker has been registered for scope: ' + reg.scope)
    })
}
