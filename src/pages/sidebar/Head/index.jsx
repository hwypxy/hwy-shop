import React, { Component } from "react"
import { connect } from "react-redux"
import {  PageHeader, Button } from "antd"

// @connect(()=>{},{})
class Head extends Component {
  constructor(props) {
    super()
    this.state = {
      pathUrl: "/",
    }
  }
  componentWillMount() {
    console.log(window.history.pathUrl)
  }
  render() {
    return (
        <PageHeader
          className="header"
          ghost={false}
          onBack={() => window.history.back()}
          title={this.state.pathUrl}
          extra={[
            <Button key="3">登录</Button>,
            <Button key="2">注册</Button>,
            <Button key="1" type="primary">
              个人中心
            </Button>,
          ]}
        ></PageHeader>
    )
  }
}

export default Head
