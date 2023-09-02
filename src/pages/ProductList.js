import { Link, useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";

import { getCourse } from "../api/api";

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
        <li><Link to="">전체보기</Link></li>
        <li><Link to="">서브메뉴</Link></li>
        <li><Link to="">서브메뉴</Link></li>
        <li><Link to="">서브메뉴</Link></li>
        <li><Link to="">서브메뉴</Link></li>
        <li><Link to="">서브메뉴</Link></li>
      </ul>
    </section>
  );
}


function ProductListTitle({ courseSlug }) {
  function titleKo() {
    switch(courseSlug) {
      case "tableware":
      case "dish":
      case "bowl":
      case "spoon":
      case "cup":
      case "bottle":
        return "식기";
      case "kitchen":
      case "tool":
      case "item":
        return "주방";
      case "tabledeco":
      case "tray":
      case "cloth":
      case "coaster":
        return "테이블 장식";
      case "etc":
      case "lunchbox":
      case "foodtray":
        return "기타 상품";
      case "new":
        return "신상품";
      case "onsale":
        return "할인상품";
    }
  }


  function titleEng() {
    switch(courseSlug) {
      case "tableware":
      case "dish":
      case "bowl":
      case "spoon":
      case "cup":
      case "bottle":
        return "Tableware";
      case "kitchen":
      case "tool":
      case "item":
        return "Kitchen";
      case "tabledeco":
      case "tray":
      case "cloth":
      case "coaster":
        return "Table Deco";
      case "etc":
      case "lunchbox":
      case "foodtray":
        return "ETC";
      case "new":
        return "New";
      case "onsale":
        return "On Sale";
    }
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
      case "bottle": return <b>물병</b>;
      case "tool": return <b>조리도구</b>;
      case "item": return <b>주방용품&소품</b>;
      case "tray": return <b>쟁반&트레이</b>;
      case "cloth": return <b>식탁보&매트</b>;
      case "coaster": return <b>코스터</b>;
      case "lunchbox": return <b>도시락통</b>;
      case "foodtray": return <b>식판</b>;
    }
  }
  

  return (
    <h3>{titleKo()} <span>{titleEng()}</span> <SubMenuTitle /></h3>
  );
}