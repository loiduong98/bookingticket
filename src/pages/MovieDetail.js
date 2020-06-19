import React, { useState, useEffect, Fragment } from "react";
import { qlPhimService } from "../services/quanlyPhimService";
import moment from 'moment';
import {NavLink} from 'react-router-dom';

export default function MovieDetail(props) {
  let [thongTinPhim, setThongTinPhim] = useState({});

  useEffect(() => {
    qlPhimService
      .layThongTinPhim_LichChieu(props.match.params.maPhim)
      .then((res) => {
        console.log(res.data);
        setThongTinPhim(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
          <div className="col-6 mt-5">
              <img src={thongTinPhim.hinhAnh}/>
          </div>
        <div className="col-6 mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Tên phim</th>
                <th>{thongTinPhim.tenPhim}</th>
              </tr>
              <tr>
  <th>Mô tả</th>
                <th>{thongTinPhim.moTa}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <h3 className="text-center">Thông tin lịch chiếu</h3>
      <div className="container">
        <div className="row">
          <div
            className="nav flex-column nav-pills col-4"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <a
                  key={index}
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href={`#${heThongRap.maHeThongRap}`}
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <img
                    src={heThongRap.logo}
                    width={50}
                    height={50}
                    style={{ width: 35, height: 35 }}
                  />
                  <span>{heThongRap.tenHeThongRap}</span>
                </a>
              );
            })}
          </div>
          <div className="tab-content col-8" id="v-pills-tabContent">
            {thongTinPhim.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <div
                  key={index}
                  className="tab-pane fade show"
                  id={heThongRap.maHeThongRap}
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {heThongRap.cumRapChieu.map((cumRap,index)=> {
                      return <div key={index}>
                          <p className="display-4">{cumRap.tenCumRap}</p>
                          <div className="row">
                          {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index)=> {
                              return <NavLink to={`/showtime/${lichChieu.maLichChieu}`} className="col-2" key={index}>{moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}</NavLink>
                          })}
                          </div>
                      </div>
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
