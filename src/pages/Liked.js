import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";

import { BiSolidDownArrow } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "../css/Liked.css";

export default function Liked() {
  return (
    <section className="likedList">
      <h3>관심상품 <span>Wish List</span></h3>

      <div className="listTopText">
        <p>총 <b>0개</b>의 제품이 관심상품에 등록되었습니다.</p>

        <form>
          <label htmlFor="search"><GoSearch /></label>
          <input type="text" name="search" id="search" />
        </form>

        <div className="sortBtn">
          <p>등록일순<i><BiSolidDownArrow /></i></p>

          <ul>
            <li>등록일순</li>
            <li>추천순</li>
            <li>신제품순</li>
            <li>낮은 가격순</li>
            <li>높은 가격순</li>
          </ul>
        </div>
      </div>

      <button className="deleteBtn" type="button">관심상품 초기화</button>

      <div className="likedList_content">
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
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        
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
    </section>
  );
}