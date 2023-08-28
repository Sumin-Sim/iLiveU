import WishListItem from "../components/WishListItem";

import { FaCheck, FaEquals, FaPlus } from "react-icons/fa";

import "../css/WishList.css";

export default function WishList() {
  return (
    <section className="wishList">
      <h3>장바구니 <span>Wish List</span></h3>

      <form>
        <div>
          <label htmlFor="selectAll">전체 선택</label>
          <span><i><FaCheck /></i></span>
          <input type="checkbox" id="selectAll" name="selectAll" />
        </div>

        <div>
          <p>선택한 상품</p>
          <button className="orderBtn" type="button">주문하기</button>
          <button className="deleteBtn" type="button">삭제하기</button>
          <button className="deleteBtn" type="button">관심상품</button>
        </div>
      </form>

      <div className="wishList_content">
        <ul className="contentHead">
          <li><input type="checkbox" id="selectAll" name="selectAll" /></li>
          <li>상품 정보/옵션</li>
          <li>제품 금액</li>
          <li>수량</li>
          <li>주문 금액</li>
          <li>개별 선택</li>
        </ul>

        <ul className="contentBody">
          <WishListItem />
          <WishListItem />
        </ul>
      </div>

      <div className="totalPrice">
        <dl>
          <dt>주문금액</dt>
          <dd>999,000원</dd>
        </dl>
        <p><i><FaPlus /></i></p>
        <dl>
          <dt>할인금액</dt>
          <dd>99,000원</dd>
        </dl>
        <p><i><FaPlus /></i></p>
        <dl>
          <dt>배송비</dt>
          <dd>2,500원</dd>
        </dl>
        <p><i><FaEquals /></i></p>
        <dl>
          <dt>총 결제 예정 금액</dt>
          <dd>999,000원</dd>
          <dd><dfn>적립 예정 포인트</dfn> 9,000점</dd>
        </dl>
      </div>
    </section>
  );
}