import { Link } from "react-router-dom";

import { LiaHeart, LiaShoppingCartSolid } from "react-icons/lia";
import { PiStarFill } from "react-icons/pi";
import { RxOpenInNewWindow } from "react-icons/rx";

import "../css/ProductItem.css";

export default function ProductItem() {
  return (
    <Link to="">
      <figure className="productItem">
        <img src="./img/productItem.png" alt="상품 이미지" />

        <figcaption>
          <dl>
            <dt>상품명 상품 이름</dt>

            <dd>
              <ins>99,000원</ins>
              <del>999,000원</del>
              <span>456%</span>
            </dd>

            <dd>
              <dfn><i><PiStarFill /></i>5.0</dfn>
              &#40;9,999&#41;
            </dd>

            <dd>
              <ul>
                <li><i><RxOpenInNewWindow /></i><span>상세페이지</span></li>
                <li><i><LiaHeart /></i><span>관심상품</span></li>
                <li><i><LiaShoppingCartSolid /></i><span>장바구니</span></li>
              </ul>
            </dd>
          </dl>
        </figcaption>
      </figure>
    </Link>
  );
}