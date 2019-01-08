import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginForm: any = styled(Form)`
  max-width: 300px;
  flex: 1;
  margin-top: 150px !important;

  .ant-form-item {
    margin-bottom: 16px;
  }
`;

const FormButton: any = styled(Button)`
  width: 100%;
`;

interface LoginProps {
  doLogin: (data: LoginData) => void;
  form: any;
}

class NormalLoginForm extends React.Component<LoginProps, any> {
  handleSubmit = (e: any): void => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.props.doLogin(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <FormButton type="primary" htmlType="submit">
            Log in
          </FormButton>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </LoginForm>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
