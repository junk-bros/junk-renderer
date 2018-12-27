import { Icon, Layout, Menu, message } from "antd";
import styled from "styled-components";
import React from "react";
import Login from "../containers/LoginContainer";
import { TABS } from "../constants/index";
import UserDropDown from "../containers/UserDropDownContainer";

const { Header, Sider, Content } = Layout;

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
  cursor: pointer;
`;

interface AppProps {
  collapsed: boolean;
  nowTab: number;
  user: User;
  toggleCollapsed: () => void;
  changeTab: (tabID: number) => void;
}

class App extends React.Component<AppProps, object> {
  render() {
    const { collapsed, nowTab, toggleCollapsed, changeTab, user } = this.props;
    return user && user.id ? (
      <LayoutHeight>
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
            <UserDropDown />
          </LayoutHeader>
          <LayoutContent>{nowTab}</LayoutContent>
        </Layout>
      </LayoutHeight>
    ) : (
      <Login />
    );
  }
}

export default App;
