import React, { Component } from "react"
import "./index.less"
import { Link } from "react-router-dom"
import { Layout, Menu } from "antd"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  AppstoreOutlined,
  SkinOutlined
} from "@ant-design/icons"

import Head from "./Head"
import Routes from "./routes"

const { Content, Footer, Sider, Header } = Layout
const { SubMenu } = Menu

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    pathUrl: "/",
  }

  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/root">权限管理</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<SkinOutlined />} title="服饰管理">
              <Menu.Item key="3">
                <Link to="/shirt">上衣</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/pants">裤子</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/shoe">鞋子</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="沐浴用品">
              <Menu.Item key="6">
                <Link to="/">洗头水</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/">沐浴露</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ color: "white", padding: 0 }}
          >
            <Head></Head>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default SiderDemo
