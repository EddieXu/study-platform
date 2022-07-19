import React, { useEffect, useState } from "react";
import { Input, Form, Button } from "antd";
import { useHistory } from "react-router-dom";
import { Container, Title, FormStyle } from "../index.styles";
function ResetPassword() {
  const history = useHistory();
  const [form] = Form.useForm();
  const [number, setNumber] = useState(60);
  const [codeName, setCodeName] = useState("发送验证码");

  const sendCodeClick = () => {
    let second = 60;
    const countDown = () => {
      if (second > 0) {
        second--;
        setNumber(second);
      }
      if (second === 0) {
        second = 60;
        setNumber(second);
        setCodeName("发送验证码");
        return;
      }
      setTimeout(countDown, 1000);
    };
    setTimeout(countDown, 1000);
  };
  const loginClick = () => {
    history.push("/login");
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 }
    }
  };
  return (
    <>
      <Container>
        <Title>认证运营平台</Title>
        <FormStyle
          name="register"
          {...formItemLayout}
          form={form}
          onFinish={values => {
            console.log(values);
            history.push("/login");
          }}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="账号"
            rules={[
              {
                required: true,
                message: "请输入你的账号!"
              }
            ]}
          >
            <Input placeholder="账号" />
          </Form.Item>
          <Form.Item
            name="password"
            label="新密码"
            rules={[
              {
                required: true,
                message: "请输入你的新密码!"
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm-password"
            label="确认密码"
            rules={[
              {
                required: true,
                message: "请输入你的新密码!"
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("您输入的两个密码不匹配!"));
                }
              })
            ]}
            dependencies={["password"]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="phone"
            label="手机号码"
            rules={[
              {
                required: true,
                message: "请输入你的手机号码!"
              }
            ]}
          >
            <Input placeholder="手机号码" />
          </Form.Item>
          <Form.Item
            name="code"
            label="验证码"
            rules={[
              {
                required: true,
                message: "请输入你的验证码!"
              }
            ]}
          >
            <div style={{ display: "flex" }}>
              <Input
                type="code"
                placeholder="验证码"
                style={{ marginRight: "15px" }}
              />
              <Button
                type="primary"
                onClick={sendCodeClick}
                style={{ width: "28%" }}
              >
                {number !== 60 ? number : codeName}
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "50%" }}>
              重置密码
            </Button>
          </Form.Item>
          <Form.Item>
            <div style={{ marginBottom: "24px" }}>
              <span style={{ color: "#AAA" }}>已有账号？</span>
              <a onClick={loginClick} style={{ color: "#02A7F0" }}>
                登录
              </a>
            </div>
          </Form.Item>
        </FormStyle>
      </Container>
    </>
  );
}

export default ResetPassword;
