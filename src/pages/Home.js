import React, { useEffect, useState } from "react";
import { qlPhimService } from "../services/quanlyPhimService";
import { NavLink } from "react-router-dom";

export default function Home(props) {
  let [danhSachPhim, setDanhSachPhim] = useState([]);

  //Ứng với component
  useEffect(() => {
    //Gọi service api set lại state danhSachPhim
    qlPhimService
      .layDanhSachPhim()
      .then((res) => {
        setDanhSachPhim(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderPhim = () => {
    return danhSachPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <div className="imgModal">
              <div className="modalBlack">
                <i class="fa fa-play-circle play"></i>
              </div>
              <img
                className="card-img-top"
                src={phim.hinhAnh}
                width={250}
                height={300}
                alt
              />
            </div>
            <div className="card-body">
              <div className="cardDesctiption">
                <h6 className="card-title">{phim.tenPhim}</h6>
                <p className="card-text">{phim.maNhom}</p>
              </div>
              <div className="cardButton">
                <NavLink
                  className="btn btn-success"
                  style={{ width: "100%" }}
                  to={`/phim/${phim.maPhim}`}
                >
                  ĐẶT VÉ
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
