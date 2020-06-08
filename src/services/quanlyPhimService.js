import { groupID } from "../settings/config"
import axios from 'axios'
import {domain} from '../settings/config'

class quanlyPhimService {
    layDanhSachPhim = () => {
        return axios({
            url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
            method:'GET'
        })
    }
    layThongTinPhim_LichChieu = (maPhim) => {
        return axios({
            url:`${domain}/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
            method:'GET'
        })
    }
}
export const qlPhimService = new quanlyPhimService();