export const registerServiceWorker = () => {
  if (navigator.serviceWorker.controller) {
    console.info('Active service worker found, no need to register')
  } else {
    // Register ServiceWorker
    navigator.serviceWorker
      .register('service-worker.js', { scope: './' })
      .then(function (reg) {
        return console.info(
          'Service worker has been registered for scope: ' + reg.scope
        )
      })
      .catch(() => {
        console.error(`Service worker hasn't been registered`)
      })
  }
}
