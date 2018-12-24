import { Icon, Layout, Menu } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import React from "react";

import { TABS } from "../constants/index";

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

const CollapsedIcon = styled(Icon)`
  &:hover {
    color: #1890ff;
  }

  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
`;

const Logo = styled.div`
  color: #eee;
  font-size: 20px;
  text-align: center;
  height: 64px;
  line-height: 64px;
`;

interface AppProps {
  collapsed: boolean;
  nowTab: number;
  toggleCollapsed: () => void;
  changeTab: (tabID: number) => void;
}

const App = ({ collapsed, nowTab, toggleCollapsed, changeTab }: AppProps) => {
  return (
    <LayoutHeight>
      <GlobalStyle />
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo>{collapsed ? "J B" : "Junk Bros"}</Logo>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          {TABS.map(item => (
            <Menu.Item key={item.index} onClick={() => changeTab(item.index)}>
              <Icon type={item.tabIcon} />
              <span>{item.tabName}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <LayoutHeader>
          <CollapsedIcon
            className="trigger"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggleCollapsed}
          />
        </LayoutHeader>
        <LayoutContent>{nowTab}</LayoutContent>
      </Layout>
    </LayoutHeight>
  );
};

export default App;
