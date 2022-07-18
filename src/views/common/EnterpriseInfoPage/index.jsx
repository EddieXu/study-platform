import React, { useEffect, useState } from "react";
import { Input, Form, Button, Select, Radio, Col, Row, Cascader } from "antd";
import { useHistory } from "react-router-dom";
import { options } from "constants/SearchData";
import "../ResetPassword/ResetPassword.scss";
const { Option } = Select;
function EnterpriseInfoPage() {
  const history = useHistory();
  const [value, setValue] = useState(1);
  const [valueEducation, setValueEducation] = useState(1);
  const [valueWork, setValueWork] = useState(1);

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 17 }
    }
  };
  const onChange = e => {
    setValue(e.target.value);
  };
  const onChangeEducation = value => {
    setValueEducation(value);
  };
  const onChangeWork = value => {
    setValueWork(value);
  };
  const onChangeWillAddress = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const filter = (inputValue, path) => {
    path.some(
      option =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  };
  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", fontSize: "20px", color: "#02A7F0" }}>
          欢迎使用企小微认证运营平台！
        </h1>
        <p style={{ marginBottom: "15px", textAlign: "center" }}>
          为了便于给您匹配合适的课程进行学习，请配合系统完成以下信息录入，感谢！
        </p>
        <Form
          name="normal_login"
          className="login-form"
          {...formItemLayout}
          onFinish={values => {
            console.log(values);
            history.push("/");
          }}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={6}>
              <Form.Item
                name="name"
                label="姓名"
                rules={[
                  {
                    required: true,
                    message: "请输入你的姓名!"
                  }
                ]}
              >
                <Input placeholder="姓名" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="penName" label="笔名">
                <Input placeholder="笔名" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="age" label="年龄">
                <Input placeholder="年龄" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="sex" label="性别">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>女</Radio>
                  <Radio value={2}>男</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={6}>
              <Form.Item name="education" label="学历">
                <Select
                  placeholder="选择学历"
                  onChange={onChangeEducation}
                  value={valueEducation}
                >
                  <Option value={1}>研究生及以上</Option>
                  <Option value={2}>本科</Option>
                  <Option value={3}>专科及以下</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="major" label="专业">
                <Input placeholder="专业" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="work" label="工作年限">
                <Select
                  placeholder="选择工作年限"
                  onChange={onChangeWork}
                  value={valueWork}
                >
                  <Option value={1}>5年及以上</Option>
                  <Option value={2}>3-5年</Option>
                  <Option value={3}>3年及以下</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="scale" label="人数规模">
                <Input placeholder="人数规模" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={6}>
              <Form.Item name="currentAddress" label="目前所在地">
                <Cascader
                  options={options}
                  onChange={onChangeWillAddress}
                  placeholder="目前所在地"
                  expandTrigger="hover"
                  showSearch={{
                    filter
                  }}
                  onSearch={value => console.log(value)}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="willAddress" label="期望所在地">
                <Cascader
                  options={options}
                  onChange={onChangeWillAddress}
                  placeholder="期望所在地"
                  expandTrigger="hover"
                  showSearch={{
                    filter
                  }}
                  onSearch={value => console.log(value)}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="presentSalary" label="目前薪资">
                <Input placeholder="目前薪资" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="willSalary" label="期望薪资">
                <Input placeholder="期望薪资" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={6}>
              <Form.Item name="domain" label="擅长领域">
                <Input placeholder="擅长领域" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="willDomain" label="期望领域">
                <Input placeholder="期望领域" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="module" label="擅长模块">
                <Input placeholder="擅长模块" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="mailingAddress" label="邮寄地址">
                <Input placeholder="邮寄地址" />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Row>
        </Form>
        <div style={{ "margin-top": "-50px", textAlign: "center" }}>
          <p>感谢您填写以上学员信息，开始学习前来进行一场入营检测吧！</p>
        </div>
      </div>
    </>
  );
}

export default EnterpriseInfoPage;
