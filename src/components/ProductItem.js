import { Link } from "react-router-dom";

import { priceShow, reviewShow } from "../api/api";

import { LiaHeart, LiaHeartSolid, LiaShoppingCartSolid } from "react-icons/lia";
import { HiMiniBars3 } from "react-icons/hi2";

import "../css/ProductItem.css";

export default function ProductItem({ course }) {
  return (
    <Link to={course.slug}>
      <figure className="productItem">
        <img src={course.imgSrc[0]} alt={course.title} />

        <figcaption>
          <dl>
            <dt>{course.title}</dt>

            <dd>
              {priceShow(course)}
            </dd>

            <dd>
              {reviewShow(course)}
            </dd>

            <dd>
              <ul>
                <li><i><HiMiniBars3 /></i><span>옵션 미리보기</span></li>
                <li><i><LiaHeart /></i><span>관심상품 등록</span></li>
                <li className="likedOpposite"><i><LiaHeartSolid /></i><span>관심상품 삭제</span></li>
                <li><i><LiaShoppingCartSolid /></i><span>장바구니</span></li>
              </ul>
            </dd>
          </dl>
        </figcaption>
      </figure>
    </Link>
  );
}