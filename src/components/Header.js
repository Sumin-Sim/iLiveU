import { Link } from "react-router-dom";

import menuData from "../api/menu.json";

import { PiInstagramLogoFill } from "react-icons/pi";
import { SiFacebook, SiNaver, SiYoutube } from "react-icons/si";
import { GoSearch } from "react-icons/go";

import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <h1><Link to="/">I Live U</Link></h1>

      <div className="headerTop">
        <ul>
          <li><Link to="https://www.instagram.com" target="_blank"><PiInstagramLogoFill /></Link></li>
          <li><Link to="https://ko-kr.facebook.com" target="_blank"><SiFacebook /></Link></li>
          <li><Link to="https://www.youtube.com" target="_blank"><SiYoutube /></Link></li>
          <li><Link to="https://www.naver.com" target="_blank"><SiNaver /></Link></li>
        </ul>

        <form>
          <label htmlFor="search"><Link to="search"><GoSearch /></Link></label>
          <input type="text" name="search" id="search" />
        </form>

        <ul>
          <li><Link to="aboutUs">About Us</Link></li>
          <li><span></span></li>
          <li><Link to="login">로그인</Link></li>
          <li><Link to="mypage">마이페이지</Link></li>
          <li><Link to="wishList">장바구니<span>0</span></Link></li>
          <li><Link to="liked">관심상품</Link></li>
        </ul>
      </div>

      <nav>
        <h2 className="hide">메인 내비게이션</h2>

        <ul>
          {
          menuData.map((menu) => (
            <li key={menu.id}>
              <Link to={menu.slug}>{menu.title}</Link>
              <SubMenu
                menu = {menu}
                subMenu = {menu.subMenu}
              />
            </li>
          ))
          }
        </ul>
      </nav>
    </header>
  );
}


function SubMenu({ menu, subMenu }) {
  if(subMenu.length > 1) {
    return (
      <ul>
        <li>{menu.titleKo}<span>{menu.title}</span></li>
        {
        subMenu.map((subMenu) => (
          <li key={subMenu.id}>
            <Link to={subMenu.slug}>{subMenu.title}</Link>
          </li>
        ))
        }
      </ul>
    );
  }
}