import { Icon, Layout, Menu } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import React from "react";

const { Header, Sider, Content } = Layout;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  #root {
    height: 100%;
  }
`;

const LayoutHeight = styled(Layout)`
  height: 100%;
`;

const LayoutHeader = styled(Header)`
  background: #fff;
  padding: 0;
`;

const LayoutContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
`;

class App extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <LayoutHeight>
        <GlobalStyle />
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">JUNK BROS</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>用户首页</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="file-word" />
              <span>数据概览</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <LayoutHeader>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </LayoutHeader>
          <LayoutContent>Content</LayoutContent>
        </Layout>
      </LayoutHeight>
    );
  }
}

export default App;
