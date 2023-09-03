import { Link, useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";

import { getCourse } from "../api/api";

import menuData from "../api/menu.json";

import "../css/ProductList.css";

import { BiSolidDownArrow } from "react-icons/bi";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ProductList() {
  const { courseSlug } = useParams();
  const courses = getCourse(courseSlug);

  return (
    <section className="productList">
      <div>
        <ProductListTitle
          courseSlug={courseSlug}
        />

        <div className="listTopText">
          <p>총 <b>{courses.length}개</b>의 제품이 있습니다.</p>

          <div className="sortBtn">
            <p>추천순<i><BiSolidDownArrow /></i></p>

            <ul>
              <li>추천순</li>
              <li>신제품순</li>
              <li>낮은 가격순</li>
              <li>높은 가격순</li>
            </ul>
          </div>
        </div>

        <div className="productList_content">
          {
            courses.map((item) => (
              <ProductItem
                key={item.id}
                course={item}
              />
            ))
          }
        
          <div className="pageCount">
            <div>
              <p><i><HiChevronDoubleLeft /></i></p>
              <p><i><HiChevronLeft /></i></p>

              <span>1</span>
              <span>2</span>
              <span>3</span>

              <p><i><HiChevronRight /></i></p>
              <p><i><HiChevronDoubleRight /></i></p>
            </div>
          </div>
        </div>
      </div>

      <ul>
        <AsideCategory
          courseSlug={courseSlug}
        />
      </ul>
    </section>
  );
}


function ProductListTitle({ courseSlug }) {
  function titleKo() {
    let findCategory = menuData.find((menu) => menu.slug === courseSlug);

    console.log(findCategory)
  }


  function titleEng() {
    /* const findCategory = menuData.find((item) => item.slug == courseSlug || item.subMenu.slug == courseSlug);
    return findCategory.title; */
  }


  function SubMenuTitle() {
    switch(courseSlug) {
      case "tableware":
      case "kitchen":
      case "tabledeco":
      case "etc":
      case "new":
      case "onsale":
        return false;
      case "dish": return <b>공기&접시</b>;
      case "bowl": return <b>다용도볼</b>;
      case "spoon": return <b>수저</b>;
      case "cup": return <b>컵&잔</b>;
      case "tool": return <b>조리도구</b>;
      case "item": return <b>주방용품&소품</b>;
      case "tray": return <b>쟁반&트레이</b>;
      case "cloth": return <b>식탁보&매트</b>;
      case "cross": return <b>키친크로스</b>;
      case "lunchbox": return <b>도시락통</b>;
      case "foodtray": return <b>식판</b>;
      case "bottle": return <b>물병&텀블러</b>;
      case "homeset": return <b>홈세트</b>;
    }
  }
  

  return (
    <h3>{titleKo()} <span>{titleEng()}</span> <SubMenuTitle /></h3>
  );
}


function AsideCategory({ courseSlug }) {
  switch(courseSlug) {
    case "tableware":
    case "dish":
    case "bowl":
    case "spoon":
    case "cup":
      return (
        <>
        <li><Link to="../tableware">전체보기</Link></li>
        <li><Link to="../dish">공기&접시</Link></li>
        <li><Link to="../bowl">다용도볼</Link></li>
        <li><Link to="../spoon">수저</Link></li>
        <li><Link to="../cup">컵&잔</Link></li>
        </>
      );
    case "kitchen":
    case "tool":
    case "item":
      return (
        <>
        <li><Link to="../kitchen">전체보기</Link></li>
        <li><Link to="../tool">조리도구</Link></li>
        <li><Link to="../item">주방용품&소품</Link></li>
        </>
      );;
    case "tabledeco":
    case "tray":
    case "cloth":
    case "cross":
      return (
        <>
        <li><Link to="../tabledeco">전체보기</Link></li>
        <li><Link to="../tray">쟁반&트레이</Link></li>
        <li><Link to="../cloth">식탁보&매트</Link></li>
        <li><Link to="../cross">키친크로스</Link></li>
        </>
      );
    case "etc":
    case "lunchbox":
    case "foodtray":
    case "bottle":
    case "homeset":
      return (
        <>
        <li><Link to="../etc">전체보기</Link></li>
        <li><Link to="../lunchbox">도시락통</Link></li>
        <li><Link to="../foodtray">식판</Link></li>
        <li><Link to="../bottle">물병&텀블러</Link></li>
        <li><Link to="../homeset">홈세트</Link></li>
        </>
      );
    case "new":
      return (
        <li><Link to="../new">전체보기</Link></li>
      );
    case "onsale":
      return (
        <li><Link to="../onsale">전체보기</Link></li>
      );
  }
}