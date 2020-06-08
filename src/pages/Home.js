import React, { useEffect, useState } from "react";
import { qlPhimService } from "../services/quanlyPhimService";

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
      return(
        <div className="col-4" key={index}>
        <div className="card text-left">
          <img className="card-img-top" src={phim.hinhAnh} width={250} height={300} alt />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <p className="card-text">{phim.moTa.length > 100 ? phim.moTa.substr(0,100) + '...' : phim.moTa}</p>
          </div>
        </div>
      </div>
      )
    });
  };
  return(
        <div className="container">
            <div className="row">
            {renderPhim()}
            </div>
        </div>  
    );
}
