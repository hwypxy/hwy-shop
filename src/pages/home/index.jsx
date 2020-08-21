import React, { Component } from "react"
import { Card } from "antd"

import "./index.less"

export default class index extends Component {
  componentWillMount() {
    // console.log(this.props.history.location);
  }

  render() {
    return (
      <div className="home">
        <Card style={{ width: "100%", height: "500px", color: "skyblue" }}>
          12313
        </Card>
      </div>
    )
  }
}
