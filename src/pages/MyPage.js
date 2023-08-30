import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";

import { CiCoins1 } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { IoCartOutline, IoTicketOutline } from "react-icons/io5";

import "../css/MyPage.css";

export default function MyPage() {
  return (
    <section className="myPage">
      <h3>마이페이지 <span>My Page</span></h3>

      <div className="userInfo">
        <p>
          <span>환영합니다!</span>
          <b>홍길동</b>님은 <i>일반 회원</i>입니다.
        </p>

        <ul>
          <li><p><i><IoTicketOutline /></i></p>쿠폰 0장</li>
          <li><p><i><CiCoins1 /></i></p>포인트 0점</li>
          <li>
            <Link to="../wishlist">
              <p><i><IoCartOutline /></i></p>장바구니 0개
            </Link>
          </li>
        </ul>
      </div>

      <div className="userOrder">
        <h4>주문 내역<span>최근 30일 내 진행 중인 주문 정보입니다.</span></h4>

        <ul>
          <li>주문접수<span>0건</span></li>
          <li className="progressBar"></li>
          <li>결제완료<span>0건</span></li>
          <li className="progressBar"></li>
          <li>발송준비<span>0건</span></li>
          <li className="progressBar"></li>
          <li>배송중<span>0건</span></li>
          <li className="progressBar"></li>
          <li>배송완료<span>0건</span></li>
          <li className="progressBar"></li>
          <li>구매확정<span>0건</span></li>
        </ul>
      </div>

        <div className="userLiked">
          <h4>
            최근 관심상품 <Link to="../liked">관심상품 전체 보기<i><FaChevronRight /></i></Link>
          </h4>
          
          <div>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
    </section>
  );
}