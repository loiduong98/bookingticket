import { groupID, accessToken } from "../settings/config";
import axios from "axios";
import { domain } from "../settings/config";

class quanlyPhimService {
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
  };
  layThongTinPhim_LichChieu = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  };
  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
  datVe = (thongTinDatVe) => {
    return axios({
      url: `${domain}/quanlydatve/datve`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzQGFkbWluIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiS2hhY2hIYW5nIiwibmJmIjoxNTkxOTcxMDEzLCJleHAiOjE1OTE5NzQ2MTN9.i8rYkpSLdrKyvM1qfkN9VyX5OqZpP_ozFeJxpnmmaDE`,
      },
    });
  };
  dangKy = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: thongTinNguoiDung
    })
  }

}
export const qlPhimService = new quanlyPhimService();
