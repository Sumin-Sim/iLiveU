import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";
import { PiStarFill } from "react-icons/pi";

import "../css/MainReview.css";

export default function MainReview() {
  return (
    <figure className="mainReview">
      <img src="./img/productItem.png" alt="상품 이미지" />

      <figcaption>
        <dl>
          <dt>review title</dt>

          <dd>review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text.</dd>
          <dd>2000.01.01</dd>
          <dd>userId</dd>
        </dl>

        <Link to="">
          <div>
            <img src="./img/productItem.png" alt="상품 이미지" />

            <dl>
              <dt>상품명</dt>
              <dd><dfn><i><PiStarFill /></i>5.0</dfn>
              &#40;9,999&#41;</dd>
            </dl>
            
            <p><i><FaChevronRight /></i></p>
          </div>
        </Link>
      </figcaption>
    </figure>
  );
}