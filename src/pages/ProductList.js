import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";

import "../css/ProductList.css";

import { BiSolidDownArrow } from "react-icons/bi";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ProductList() {
  return (
    <section className="productList">
      <div>
        <h3>카테고리명<span>영문명</span><b>서브메뉴</b></h3>

        <div className="listTopText">
          <p>총 <b>0개</b>의 제품이 있습니다.</p>

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
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        
          <div className="pageCount">
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