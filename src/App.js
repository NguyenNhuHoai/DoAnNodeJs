import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Category from "./components/Category";
import DetailNews from "./components/DetailPostNews";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useEffect } from "react";
import {
  actFetchCategoriesAsync,
  actFetchNewsAsync,
  actFetchTheLoaiAsync,
} from "./store/post/action";
import { useDispatch } from "react-redux";
import { actFetchMeAsync } from "./store/auth/action";
import { ACCESS_TOKEN } from "./constants";
import IndexPage from "./components/Page";
import Admin from "./components/Admin";
import User from "./components/Admin/User";
import TinTuc from "./components/Admin/TinTuc";
import LoaiTin from "./components/Admin/LoaiTiin";
import TheLoai from "./components/Admin/TheLoai";
import AddTinTuc from "./components/Admin/TinTuc/FormAddTinTuc";
import AddTheLoai from "./components/Admin/TheLoai/FormAddTheLoai";
import AddLoaiTin from "./components/Admin/LoaiTiin/FormAddLoaiTin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchNewsAsync());
    dispatch(actFetchCategoriesAsync());
    dispatch(actFetchTheLoaiAsync());
    dispatch(actFetchMeAsync(localStorage.getItem(ACCESS_TOKEN)));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route path="/category/:id" element={<Category />}></Route>
          <Route path="/DetailNews/:id" element={<DetailNews />}></Route>

          <Route path="/" element={<Homepage />}></Route>
        </Route>
        <Route path="/doashboard" element={<Admin />}>
          <Route path="/doashboard/user" element={<User />}></Route>
          <Route path="/doashboard/tintuc" element={<TinTuc />}></Route>
          <Route path="/doashboard/loaitin" element={<LoaiTin />}></Route>
          <Route path="/doashboard/theloai" element={<TheLoai />}></Route>
          <Route path="/doashboard/themtintuc" element={<AddTinTuc />}></Route>
          <Route
            path="/doashboard/themloaitin"
            element={<AddLoaiTin />}
          ></Route>
          <Route
            path="/doashboard/themtheloai"
            element={<AddTheLoai />}
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
