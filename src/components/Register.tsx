import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

const RegForm: any = styled(Form)`
  max-width: 450px;
  flex: 1;
  margin-top: 150px;

  .ant-form-item {
    margin-bottom: 16px;
  }
`;

const FormButton: any = styled(Button)`
  width: 100%;
`;

interface RegProps {
  doReg: (data: RegData) => void;
  form: any;
}

class RegistrationForm extends React.Component<RegProps, any> {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        this.props.doReg(values);
      }
    });
  };

  handleConfirmBlur = (e: any) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule: any, value: string, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <RegForm onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="Username">
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "Please input your username!",
                whitespace: true
              },
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              },
            ]
          })(<Input type="password" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Confirm Password">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              },
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              },
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Phone Number">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" },
            ]
          })(<Input style={{ width: "100%" }} />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <FormButton type="primary" htmlType="submit">
            Register
          </FormButton>
          Or <Link to="/">login now!</Link>
        </Form.Item>
      </RegForm>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
