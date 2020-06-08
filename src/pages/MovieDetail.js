import React,{useState,useEffect} from 'react';
import {qlPhimService} from '../services/quanlyPhimService';

export default function MovieDetail(props) {

    let [thongTinPhim,setThongTinPhim] = useState({});

    useEffect(()=> {
        qlPhimService.layThongTinPhim_LichChieu(props.match.params.maPhim).then(res=> {
            console.log(res.data);
            setThongTinPhim(res.data)
        }).catch(err => {
            console.log(err.response.data);
        })
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên phim</th>
                                <th>Hình</th>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <th>mô tả ...</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
