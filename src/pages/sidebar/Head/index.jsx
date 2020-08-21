import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { PageHeader, Button } from "antd"

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
          <Button key="3">
            <Link to="/login">登录</Link>
          </Button>,
          <Button key="2">
            <Link to="/reg">注册</Link>
          </Button>,
          <Button key="1" type="primary">
            <Link to="/personal">个人中心</Link>
          </Button>,
        ]}
      ></PageHeader>
    )
  }
}

export default Head
