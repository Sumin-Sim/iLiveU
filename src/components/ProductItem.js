import { Link } from "react-router-dom";

import { LiaHeart, LiaHeartSolid, LiaShoppingCartSolid } from "react-icons/lia";
import { PiStarFill } from "react-icons/pi";
import { HiMiniBars3 } from "react-icons/hi2";

import "../css/ProductItem.css";

export default function ProductItem({ course }) {
  return (
    <Link to={course.slug}>
      <figure className="productItem">
        <img src={course.imgSrc} alt={course.title} />

        <figcaption>
          <dl>
            <dt>{course.title}</dt>

            <dd>
              <PriceShow
                course={course}
              />
            </dd>

            <dd>
              <ReviewShow
                course={course}
              />
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


function PriceShow({ course }) {
  const price = course.price;
  const discountedPrice = course.discountedPrice;


  // del
  function priceCompare() {
    if(price !== discountedPrice) {
      return <del>{Number(price).toLocaleString()}원</del>
    }
  }

  
  // discountRate
  function discountRate() {
    const result = ((price - discountedPrice) / price) * 100;

    if(price !== discountedPrice) {
      return <span>{Math.round(Number(result))}&#37;</span>;
    }
  }

  
  return (
    <>
    <ins>{Number(discountedPrice).toLocaleString()}원</ins>
    {priceCompare()}
    {discountRate()}
    </>
  );
}


function ReviewShow({ course }) {
  let allRate = 0;

  function averageRate() {
    for(let i in course.review) {
      allRate = allRate + course.review[i].rating;
    }

    const resultRate = allRate / course.review.length;

    return resultRate.toFixed(1);
  }

  return (
    <>
    <dfn><i><PiStarFill /></i>{averageRate()}</dfn>
    &#40;{course.review.length}&#41;
    </>
  );
}