import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./HomeTemplate.scss";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const AdminLayout = (props) => {
  return (
    <Fragment>
      <Layout>
        <Header>header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>{props.children}</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </Fragment>
  );
};

export const HomeTemplate = (props) => {
  return (
    <Route
      path={props.path}
      {...props.exact}
      render={(propsComponent) => {
        return (
          <AdminLayout>
            <props.component {...propsComponent}></props.component>
          </AdminLayout>
        );
      }}
    />
  );
};
