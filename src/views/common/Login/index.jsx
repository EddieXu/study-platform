import React, { useEffect, useState } from "react";
import { Input, Form, Button, Select } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Container, Title, FormStyle } from "../index.styles";
const { Option } = Select;
function Login() {
  const history = useHistory();
  const [value, setValue] = useState(1);

  const onChange = value => {
    setValue(value);
  };
  const registerClick = () => {
    history.push("/register");
  };
  const resetClick = () => {
    history.push("/reset-password");
  };
  return (
    <>
      <Container>
        <Title>认证运营平台</Title>
        <FormStyle
          name="normal_login"
          onFinish={values => {
            console.log(values);
            history.push("/");
          }}
        >
          <Form.Item
            name="role"
            label=""
            rules={[
              {
                required: true,
                message: "请选择你的角色!"
              }
            ]}
          >
            <Select
              placeholder="选择登录角色"
              onChange={onChange}
              defaultValue={1}
              value={value}
            >
              <Option value={1}>学员登录</Option>
              <Option value={2}>企业登录</Option>
              <Option value={3}>管理员登录</Option>
              <Option value={4}>老师登录</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入你的账号!"
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="账号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入你的密码!"
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "50%" }}
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <div style={{ marginBottom: "24px" }}>
              <a
                className="login-form-forgot"
                style={{ color: "#AAA", "margin-right": "24px" }}
                onClick={resetClick}
              >
                忘记密码
              </a>
              <span style={{ color: "#AAA" }}>还没有账号？</span>
              <a onClick={registerClick} style={{ color: "#02A7F0" }}>
                注册
              </a>
            </div>
          </Form.Item>
        </FormStyle>
      </Container>
    </>
  );
}

export default Login;
