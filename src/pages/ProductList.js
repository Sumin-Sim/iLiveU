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
  let findCategory = menuData.find((menu) => menu.slug === courseSlug);

  if(!findCategory) {
    let subMenuList = [];

    for(let i = 0 ; i < menuData.length ; i ++) {
      const mainMenu = menuData[i];
      const subMenu = menuData[i].subMenu;

      for(let i = 0 ; i < subMenu.length ; i ++) {
        const newtitle = subMenu[i].title;
        const newSlug = subMenu[i].slug;

        const newMenu = {"title": mainMenu.title, "titleKo": mainMenu.titleKo, "slug": mainMenu.slug, "subTitle": newtitle, "subSlug": newSlug}

        subMenuList = [...subMenuList, newMenu];
      }
    }

    findCategory = subMenuList.find((subMenu) => subMenu.subSlug === courseSlug);
  }


  function subTitle() {
    if(!findCategory.subTitle) return false;
    return <b>{findCategory.subTitle}</b>
  }
  

  return (
    <h3>{findCategory.titleKo} <span>{findCategory.title}</span> {subTitle()}</h3>
  );
}


function AsideCategory({ courseSlug }) {
  let AllMenuList = [];

  for(let i = 0 ; i < menuData.length ; i ++) {
    const mainMenu = menuData[i];
    const subMenu = menuData[i].subMenu;

    for(let i = 0 ; i < subMenu.length ; i ++) {
      const newtitle = subMenu[i].title;
      const newSlug = subMenu[i].slug;

      const newMenu = {"title": mainMenu.title, "titleKo": mainMenu.titleKo, "slug": mainMenu.slug, "subTitle": newtitle, "subSlug": newSlug}

      AllMenuList = [...AllMenuList, newMenu];
    }

    if(mainMenu.subMenu.length === 0) {
      const newMenu = {"title": mainMenu.title, "titleKo": mainMenu.titleKo, "slug": mainMenu.slug}

      AllMenuList = [...AllMenuList, newMenu];
    }
  }


  let findCategory = AllMenuList.filter((menu) => menu.slug === courseSlug);

  if(findCategory.length === 0) {
    const findMainSlug = AllMenuList.find((menu) => menu.subSlug === courseSlug).slug;

    findCategory = AllMenuList.filter((menu) => menu.slug === findMainSlug);
  }


  function subAsideList() {
    if(findCategory.length > 1) {
      return (
        findCategory.map((item) => (
          <li key={item.subSlug}><Link to={"../" + item.subSlug}>{item.subTitle}</Link></li>
        ))
      );
    }
  }
  
  return (
    <>
    <li><Link to={"../" + findCategory[0].slug}>전체보기</Link></li>
    {subAsideList()}
    </>
  );
}