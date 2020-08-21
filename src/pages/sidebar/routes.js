import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import Home from "../home"
import Root from "../root"
import Shirt from "../shop/shirt"
import Pants from "../shop/pants"
import Shop from "../shop/shoe"

// connect()()

class Routes extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Root}></Route>
        <Route path="/shirt" component={Shirt}></Route>
        <Route path="/pants" component={Pants}></Route>
        <Route path="/shoe" component={Shop}></Route>
      </>
    )
  }
}

export default Routes
