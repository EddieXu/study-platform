import styled from "styled-components";
import { Form } from "antd";
import Login from "./login.png";

export const Container = styled.div`
  background-image: url(${Login});
  height: 100vh;
  background-size: cover;
  padding: 40px;
`;
export const Title = styled.h1`
  font-size: 36px;
  padding: 40px 60px;
`;
export const FormStyle = styled(Form)`
  max-width: 500px;
  text-align: center;
  padding: 0 25px;
  &.ant-form-item-explain.ant-form-item-explain-connected
    .ant-form-item-explain-error {
    text-align: left;
  }
`;
