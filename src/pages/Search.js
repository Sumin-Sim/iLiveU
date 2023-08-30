
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";

import menuData from "../api/menu.json";

import { BiSolidDownArrow } from "react-icons/bi";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "../css/Search.css";

export default function Search() {
  return (
    <section className="search">
      <div>
        <h3>검색어 <span>검색 결과</span></h3>

        <div className="listTopText">
          <p>총 <b>0개</b>의 제품이 검색되었습니다.</p>

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
      
        <div className="search_content">
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
      </div>

      <ul>
        <li><Link to="">전체보기</Link></li>
        {
        menuData.map((menu) => (
          <li key={menu.id}>
            <Link to="">{menu.title}</Link>
            <SearchCategorySubMenu
              menu = {menu}
              subMenu = {menu.subMenu}
            />
          </li>
        ))
        }
      </ul>
    </section>
  );
}


function SearchCategorySubMenu({ menu, subMenu }) {
  if(subMenu.length > 1) {
    return (
      <ul>
        {
        subMenu.map((subMenu) => (
          <li key={subMenu.id}>
            <Link to="">{subMenu.title}</Link>
          </li>
        ))
        }
      </ul>
    );
  }
}