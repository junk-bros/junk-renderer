import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginForm: any = styled(Form)`
  max-width: 300px;
  flex: 1;
  margin-top: 150px;

  .ant-form-item {
    margin-bottom: 16px;
  }
`;

const FormButton: any = styled(Button)`
  width: 100%;
`;

class NormalLoginForm extends React.Component<any, any> {
  handleSubmit = (e: any): void => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("userName", {
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
            rules: [{ required: true, message: "Please input your Password!" }]
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
