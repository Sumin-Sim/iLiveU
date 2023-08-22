import { Link } from "react-router-dom";

import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <div className="headerBottom">
        <h1><Link to="/">I Live U</Link></h1>

        <form>
          <label htmlFor="search"><Link to="search">검색</Link></label>
          <input type="text" name="search" id="search" />
        </form>
      </div>

      <div className="headerTop">
        <ul>
          <li><Link to="aboutUs">About Us</Link></li>
          <li><Link to="login">로그인</Link></li>
          <li><Link to="mypage">마이페이지</Link></li>
          <li><Link to="wishList">장바구니</Link></li>
          <li><Link to="liked">관심상품</Link></li>
        </ul>
      </div>

      <nav>
        <h2>메인 내비게이션</h2>

        <ul>
          <li>
            <Link to="">Tableware</Link>
            <ul>
              <li>식기<span>Tableware</span></li>
              <li><Link to="">공기&amp;접시</Link></li>
              <li><Link to="">다용도볼</Link></li>
              <li><Link to="">수저</Link></li>
              <li><Link to="">컵&amp;잔</Link></li>
              <li><Link to="">물병</Link></li>
            </ul>
          </li>

          <li>
            <Link to="">Kitchen</Link>
            <ul>
              <li>주방<span>Kitchen</span></li>
              <li><Link to="">조리도구</Link></li>
              <li><Link to="">주방용품&amp;소품</Link></li>
            </ul>
          </li>

          <li>
            <Link to="">Table Deco</Link>
            <ul>
              <li>테이블 장식<span>Table Deco</span></li>
              <li><Link to="">쟁반&amp;트레이</Link></li>
              <li><Link to="">식탁보&amp;매트</Link></li>
              <li><Link to="">코스터</Link></li>
            </ul>
          </li>

          <li>
            <Link to="">ETC</Link>
            <ul>
              <li>기타 상품<span>ETC</span></li>
              <li><Link to="">도시락통</Link></li>
              <li><Link to="">식판</Link></li>
            </ul>
          </li>

          <li><Link to="">On Sale</Link></li>
        </ul>  
      </nav>
    </header>
  );
}