import React from 'react';
import { Button } from 'antd';
import {BrowserRouter, Switch} from 'react-router-dom';
import { AdminTemplate } from './templates/AdminTemplate';
import { HomeTemplate } from './templates/HomeTemplate';
import Admin from './pages/Admin';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import ShowTime from './ShowTime';
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <AdminTemplate path="/admin" component={Admin} />
      <HomeTemplate path="/phim/:maPhim" component={MovieDetail}/>
      <HomeTemplate path="/showtime/:maLichChieu" component={ShowTime}/>
      <HomeTemplate path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
