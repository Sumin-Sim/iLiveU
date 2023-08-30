import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./components/App";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import WishList from "./pages/WishList";
import Liked from "./pages/Liked";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

export default function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path=":courseSlug" element={<ProductView />} />
          </Route>
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="myPage" element={<MyPage />} />
          <Route path="wishList" element={<WishList />} />
          <Route path="liked" element={<Liked/>} />
          <Route path="search" element={<Search/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}