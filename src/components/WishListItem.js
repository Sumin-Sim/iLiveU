import { Link } from "react-router-dom";

import { FaCheck } from "react-icons/fa";

export default function WishListItem() {
  return (
    <li>
      <ul>
        <li>
          <label className="hide">상품 선택</label>
          <span><i><FaCheck /></i></span>
          <input type="checkbox" />
        </li>

        <li>
          <figure className="wishListItem">
            <img src="./img/productItem.png" alt="상품 이미지" />

            <figcaption>
              <dl>
                <dt><Link to="">상품명 상품 이름</Link></dt>

                <dd><dfn>옵션명</dfn>옵션 내용</dd>
                <dd><dfn>옵션명</dfn>옵션 내용</dd>
                <dd><dfn>옵션명</dfn>옵션 내용</dd>
              </dl>
            </figcaption>
          </figure>
        </li>

        <li>
          <ins>99,000원</ins>
          <del>999,000원</del>
          <span>456%</span>
        </li>

        <li>
          <input type="number" min={1} />
        </li>

        <li>990,000원</li>

        <li>
          <button type="button" className="buyEach">주문하기</button>
          <button type="button" className="buyEach">삭제하기</button>
          <button type="button" className="buyEach">관심상품</button>
        </li>
      </ul>
    </li>
  );
}





