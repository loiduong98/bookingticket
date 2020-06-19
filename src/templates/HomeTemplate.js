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
const { Content, Sider, Footer } = Layout;

const AdminLayout = (props) => {
  return (
    <Fragment>
      <Layout>
        <header className="header">
          <nav className="navbar navbar-expand-sm navbar-light bg-white p-0">
            <a className="navbar-brand pl-3" href="#">
              <img src="/logo.png" width="50" height="50" />
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Lịch chiếu
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Cụm rạp
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Ứng dụng
                  </a>
                </li>
              </ul>
              <a href className="btn">
                <i className="fa fa-user" /> Đăng nhập
              </a>
              <a href className="btn">
                <i className="fa fa-user" /> Đăng ký
              </a>
              <div className="form-group pt-3">
                <select className="form-control" name id>
                  <option>Thành phố Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                </select>
              </div>
            </div>
          </nav>
        </header>
        <section className="slide">
          <div className="bd-example">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                <li data-target="#carouselExampleCaptions" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/05/bay-linh-hon-15901233860907.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <i className="fa fa-play-circle" />
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/05/ac-mong-15901322091610.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <i className="fa fa-play-circle" />
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/05/ban-am-15901323497094.png"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <i className="fa fa-play-circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="select-ticket">
          <div className="blockSelect rounded container">
            <div className="row selectContent text-dark d-flex">
              <div className="selectItem col-4">
                <select name id className="form-control">
                  <option value>Phim</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                </select>
              </div>
              <div className="selectItem col-2">
                <select name id className="form-control">
                  <option value>Rạp</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                </select>
              </div>
              <div className="selectItem col-2">
                <select name id className="form-control">
                  <option value>Ngày xem</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                </select>
              </div>
              <div className="selectItem col-2">
                <select name id className="form-control">
                  <option value>Xuất chiếu</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                  <option value>Baba Yaga: Ác Quỷ Rừng Sâu (C18)</option>
                </select>
              </div>
              <div className="selectItem btn-buy col-2 text-center">
                <button className="btn btn-success">Mua vé</button>
              </div>
            </div>
          </div>
        </section>
        <Layout>
          <Sider></Sider>
          <Content>{props.children}</Content>
          <Sider></Sider>
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
