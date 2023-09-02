import courses from "./data.json";

import { PiStarFill } from "react-icons/pi";

// course
export function getCourse() {
  return courses;
}

export function getCourseBySlug(courseSlug) {
  return courses.find((course) => course.slug === courseSlug)
}




// item Info
export function priceShow(course) {
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


export function reviewShow(course) {
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
    <span><i><PiStarFill /></i>{averageRate()}</span>
    &#40;{course.review.length}&#41;
    </>
  );
}