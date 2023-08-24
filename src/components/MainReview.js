import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";
import { PiStarFill } from "react-icons/pi";

export default function MainReview() {
  return (
    <figure>
      <img src="./img/productItem.png" alt="상품 이미지" />

      <figcaption>
        <dl>
          <dt>review title</dt>

          <dd>
            <dfn><i><PiStarFill /></i>5.0</dfn>
            &#40;9,999&#41;
          </dd>
          <dd>rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text. rivew text.</dd>
          <dd>userId</dd>
          <dd>2000.01.01</dd>
        </dl>

        <Link to="">
          <div>
            <img src="./img/productItem.png" alt="상품 이미지" />
            <span>상품명</span>
            <p><i><FaChevronRight /></i></p>
          </div>
        </Link>
      </figcaption>
    </figure>
  );
}