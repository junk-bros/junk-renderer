import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface UserDropDownProps {
  username: string;
  doLogout: () => void;
}

const menu = (doLogout: () => void) => (
  <Menu>
    <Menu.Item key="0">
      <Link to="/">完善个人信息</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" onClick={() => doLogout()}>
      注销
    </Menu.Item>
  </Menu>
);

const UserDropDown = ({ username, doLogout }: UserDropDownProps) => (
  <Dropdown overlay={menu(doLogout)}>
    <StyledUsername className="ant-dropdown-link" href="javascript:void(0)">
      {username} <Icon type="down" />
    </StyledUsername>
  </Dropdown>
);

const StyledUsername = styled.a`
  float: right;
  margin-right: 16px;

  &:focus {
    text-decoration: none;
  }
`;

export default UserDropDown;
