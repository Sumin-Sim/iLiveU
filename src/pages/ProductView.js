import { Link, useParams } from "react-router-dom";
import { getCourseBySlug } from "../api/api";

import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { PiStarFill } from "react-icons/pi";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaRegClock, FaMinus, FaPlus } from "react-icons/fa";

import "../css/ProductView.css";

export default function ProductView() {
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  return (
    <section className="productView">
      <h3 className="hide">상세페이지</h3>

      <figure className="productDetail">
        <div>
          <span><img src={"." + course.imgSrc[0]} alt="상품 이미지" /></span>

          <ul>
            {/* {map} */}
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
            <li><img src={"." + course.imgSrc} alt="상품 이미지" /></li>
          </ul>

          <div className="btn">
            <p className="prev"><i><FaChevronLeft /></i></p>
            <p className="next"><i><FaChevronRight /></i></p>
          </div>
        </div>

        <figcaption>
          <p><Link to="">카테고리</Link><span><Link to="">소분류</Link></span></p>
          <h4>{course.title}</h4>
          <span>{course.summary}</span>

          <ul>
            <li>
              <span><i><PiStarFill /></i>5.0</span>
              &#40;9,999&#41;
            </li>

            <li>
              <ins>99,000원</ins>
              <del>999,000원</del>
              <span>456%</span>
            </li>
          </ul>

          <div className="productOption">
            <dl>
              <dt>옵션명</dt>
              <dd>
                <p>옵션내용<i><FaChevronDown /></i></p>

                <ul>
                  <li>옵션1</li>
                  <li>옵션2</li>
                  <li>옵션3</li>
                  <li>옵션4</li>
                </ul>
              </dd>
            </dl>
            
            <dl className="productCount">
              <dt>수량</dt>
              <dd>
                <button type="button"><i><FaMinus /></i></button>
                <input type="text" placeholder="1"/>
                <button type="button"><i><FaPlus /></i></button>
              </dd>
            </dl>
          </div>

          <div className="buy">
            <dl>
              <dt>총 주문 금액</dt>
              <dd>99,999원</dd>
            </dl>

            <div className="buyIcon">
              <p className="liked"><i><LiaHeart /></i></p>
              <p className="liked likedOpposite"><i><LiaHeartSolid /></i></p>
              <button type="button">장바구니</button>
              <button type="button">바로구매</button>
            </div>
          </div>
        </figcaption>
      </figure>

      <div className="reviewList">
        <h4>구매후기</h4>

        <ul className="sortBtn">
          <li><i><FaRegClock /></i><b>최신 리뷰순</b></li>
          <li><span></span></li>
          <li><i><PiStarFill /></i><b>높은 별점순</b></li>
        </ul>

        <ReviewList />
        <ReviewList />
        <ReviewList />
      </div>
    </section>
  );
}


function ReviewList() {
  return (
    <figure className="productReview">
      <img src="../img/productItem.png" alt="상품 이미지" />

      <figcaption>
        <dl>
          <dt>review title</dt>

          <dd>
            <p>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
            </p>
            <p>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
            </p>
            5.0
          </dd>
          <dd>review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text. review text.</dd>
          <dd>2000.01.01</dd>
          <dd>userId</dd>
        </dl>
      </figcaption>
    </figure>
  );
}