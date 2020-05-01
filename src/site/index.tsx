import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
// import './js/demo'
// import './js/settings/plugins'
// import './js/settings/google_analytics'

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
