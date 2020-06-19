import React, { useState, useEffect, Fragment } from "react";
import { qlPhimService } from "./services/quanlyPhimService";

export default function ShowTime(props) {
  let [danhSachGhe, setDanhSachGhe] = useState([]);
  let [thongTinPhim, setThongTinPhim] = useState({
    thongTinPhim: {},
    danhSachGhe: [],
  });
  let [thongTinLichChieu, setThongTinLichChieu] = useState({
    thongTinPhim: {},
    danhSachGhe: [],
  });
  let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
  useEffect(() => {
    //Lấy maLichChieu từ params
    let { maLichChieu } = props.match.params;
    qlPhimService
      .layThongTinPhongVe(maLichChieu)
      .then((res) => {
        console.log(res.data);
        // setThongTinPhim(res.data.thongTinPhim)
        // setDanhSachGhe(res.data.danhSachGhe);
        setThongTinLichChieu({
          danhSachGhe: res.data.danhSachGhe,
          thongTinPhim: res.data.thongTinPhim,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderThongTinPhim = () => {
    let { thongTinPhim, danhSachGhe } = thongTinLichChieu;
    return (
      <div className="container">
        <h3 style={{ color: "green", fontSize: "20px" }}>
          Tổng tiền:{" "}
          {danhSachGheDangDat
            ?.reduce((tongTien, gheDangDat, index) => {
              return (tongTien += gheDangDat.giaVe);
            }, 0)
            .toLocaleString()}
        </h3>
        <hr />
        <h3 className="display-4">{thongTinPhim?.tenPhim}</h3>
        <p>{thongTinPhim?.cumRapChieu}</p>
        <p>
          {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
        </p>
        <hr />
        <div>
          <h3>
            Ghế đang chọn:{" "}
            {danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <button
                  style={{ fontSize: "17px", color: "green" }}
                  key={index}
                >
                  G-{gheDangDat.tenGhe}
                </button>
              );
            })}
          </h3>
        </div>
        <hr />
        <button className="btn btn-success w-100" onClick={() => datVe()}>
          Đặt vé
        </button>
      </div>
    );
  };
  const datVe = () => {
    // let taiKhoanNguoiDung = JSON.parse(localStorage.getItem(userLogin)).taiKhoan;
    //Làm chức năng đăng nhập
    let taiKhoanNguoiDung = "123@admin"
    let thongTinDatVe = {
      "maLichChieu": props.match.params.maLichChieu,
      "danhSachVe": danhSachGheDangDat,
      "taiKhoanNguoiDung": taiKhoanNguoiDung,
    };
    qlPhimService
      .datVe(thongTinDatVe)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const renderDanhSachGhe = () => {
    return thongTinLichChieu.danhSachGhe.map((ghe, index) => {
      return (
        <Fragment key={index}>
          {renderGhe(ghe)}
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  const renderGhe = (ghe) => {
    let classGheVip = "";
    if (ghe.loaiGhe === "Vip") {
      classGheVip = "gheVip";
    }
    if (ghe.daDat) {
      return (
        <button className={`ghe gheDaDat ${classGheVip}`} disabled>
          X
        </button>
      );
    }
    //Thay vì render ghế htuong72 => ghế đó có được đặt hay không ?
    let classGheDangDat = "";
    let index = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.stt === ghe.stt
    );
    if (index !== -1) {
      classGheDangDat = "gheDangDat";
    }
    return (
      <button
        onClick={() => {
          chonGhe(ghe);
        }}
        className={`ghe ${classGheVip} ${classGheDangDat}`}
      >
        {ghe.stt}
      </button>
    );
  };

  const chonGhe = (ghe) => {
    //Tìm trong mảng danhSachGheDangDat có ghế đó thì remove nếu ngược lại thì thêm vào
    let index = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.stt === ghe.stt
    );
    if (index !== -1) {
      danhSachGheDangDat.splice(index, 1);
    } else {
      danhSachGheDangDat.push(ghe);
    }
    //setDanhSachGheDangDat => giao diện render lại
    setDanhSachGheDangDat([...danhSachGheDangDat]);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          style={{ fontSize: "30px", fontWeight: "bold" }}
          className="trapezoid mt-5 text-white text-center"
        >
          Màn hình
        </div>
        <div className="col-10">
          {/* Danh sách ghế */}
          {renderDanhSachGhe()}
        </div>
        <div className="col-2" style={{ padding: "0" }}>
          {/* Thông tin phim */}
          {renderThongTinPhim()}
        </div>
      </div>
    </div>
  );
}
