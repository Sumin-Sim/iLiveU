import { Link, useParams } from "react-router-dom";
import { getCourseBySlug } from "../api/api";

import { priceShow, reviewShow } from "../api/api";

import { LiaHeart, LiaHeartSolid } from "react-icons/lia";
import { PiStarFill } from "react-icons/pi";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaRegClock, FaMinus, FaPlus } from "react-icons/fa";

import "../css/ProductView.css";
import { useEffect, useState } from "react";

export default function ProductView() {
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  // price
  const [itemPrice, setItemPrice] = useState(course.discountedPrice);

  return (
    <section className="productView">
      <h3 className="hide">상세페이지</h3>

      <figure className="productDetail">
        <div>
          <span><img src={"." + course.imgSrc[0]} alt={course.title} /></span>

          <ul>
            {
            course.imgSrc.map((item, index) => (
              <li key={index}><img src={"." + item} alt={course.title + " " + [index] + "번 이미지"} /></li>
            ))}
          </ul>

          <div className="btn">
            <p className="prev"><i><FaChevronLeft /></i></p>
            <p className="next"><i><FaChevronRight /></i></p>
          </div>
        </div>

        <figcaption>
          <p><Link to={"../../" + course.category.majorClass.slug}>{course.category.majorClass.title}</Link><span><Link to={"../../" + course.category.minorClass.slug}>{course.category.minorClass.title}</Link></span></p>
          <h4>{course.title}</h4>
          <span>{course.summary}</span>

          <ul>
            <li>
              {reviewShow(course)}
            </li>

            <li>
              {priceShow(course)}
            </li>
          </ul>

          <div className="productOption">
            {
            course.option.map((option) => (
              <dl key={option.id}>
                <dt>{option.title}</dt>
                <dd>
                  <p><b>옵션 내용</b><i><FaChevronDown /></i></p>

                  <ul>
                    {
                    option.choice.map((choice) => (
                      <li key={choice.id}>{choice.content}</li>
                    ))
                    }
                  </ul>
                </dd>
              </dl>
            ))
            }
            
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
              <dd>{itemPrice.toLocaleString()}원</dd>
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

        {
        course.review.map((review) => (
          <ReviewList
            key={review.id}
            review={review}
          />
        ))
        }
      </div>
    </section>
  );
}


function ReviewList({ review }) {
  // review star width
  useEffect(() => {
    const star = document.getElementsByClassName(review.id);
    if(star) {star[0].style.width=`${review.rating * 24}px`}
  })

  return (
    <figure className="productReview"><figcaption>
        <dl>
          <dt>{review.title}</dt>

          <dd>
            {review.rating.toFixed(1)}
            
            <p>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
            </p> 
            <p className={review.id}>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
              <i><PiStarFill /></i>
            </p>
          </dd>
          <dd>{review.content}</dd>
          <dd>{review.reportingDate}</dd>
          <dd>{userIdHide(review.userId)}</dd>
        </dl>
      </figcaption>
      
      {imgShow(review)}
    </figure>
  );
}


function userIdHide(userId) {
  return userId
}


function imgShow(review) {
  if(review.imgSrc !== "") {
    return <img src={"." + review.imgSrc} alt={review.id + " 이미지"} />
  }
}