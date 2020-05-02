import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

if (process.env.NODE_ENV === 'production') {
  import('react-ga').then((ReactGA) => {
    ReactGA.initialize('UA-32351360-4')
    ReactGA.pageview(window.location.pathname + window.location.search)
  })
  // @ts-expect-error
  import('./serviceWorker')
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
