import React, { useState, useCallback } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ADMIN_MENU } from "constants/menu";
import "./layout.css";

const { Header, Sider, Content, Footer } = Layout;

function GlobalLayout({ children }) {
  const history = useHistory();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const CollapsedElement = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  const menuClickHandle = useCallback(item => {
    history.push(item.key);
  }, []);
  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          multiple={false}
          selectedKeys={pathname}
          items={ADMIN_MENU}
          onClick={menuClickHandle}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <CollapsedElement
            className="trigger"
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default GlobalLayout;
