import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import { BrowserRouter as Router } from "react-router-dom"
import history from "./utils/history"
import "antd/dist/antd.css"

import App from "./App"

console.log(history)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
