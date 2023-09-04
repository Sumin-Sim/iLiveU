import { Link } from "react-router-dom";

import menuData from "../api/menu.json";

import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";

import ProductItem from "../components/ProductItem";
import MainReview from "../components/MainReview";

import "../css/Home.css";

export default function Home() {
  return (
    <>
    <section id="visual">
      <h3 className="hide">추천 상품 슬라이더</h3>

      <ul>
        <li><Link to=""><img src="./img/visual_1.jpg" alt="풍성한 한가위 선물 특별전" /></Link></li>
        <li><Link to=""><img src="./img/visual_2.jpg" alt="Autumn 9월 회원 혜택" /></Link></li>
        <li><Link to=""><img src="./img/visual_3.jpg" alt="2023 NEW 자카드발매트 6종 출시" /></Link></li>
        <li><Link to=""><img src="./img/visual_4.jpg" alt="2023 신제품 데이 프라이팬 4종 출시" /></Link></li>
        <li><Link to=""><img src="./img/visual_5.jpg" alt="Good Vibes 머그&플레이트 출시" /></Link></li>
        <li><Link to=""><img src="./img/visual_6.jpg" alt="스테디 셀러 마리벨 시리즈 신제품 런칭" /></Link></li>
        <li><Link to=""><img src="./img/visual_7.jpg" alt="프렌치 무드 디너웨어 'BLANC'" /></Link></li>
      </ul>

      <div className="btn">
        <p className="prev"><i><FaChevronLeft /></i></p>
        <p className="next"><i><FaChevronRight /></i></p>
      </div>

      <div className="slideCount">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section id="category">
      <h3 className="hide">전체 카테고리</h3>
    
      <ul>
        <CategoryMenu />
      </ul>
    </section>

    <section id="bestNew">
      <h3 className="mainTitle"><b>Best&amp;New</b> Items<br /> <span>최신 인기 상품&amp;신상품</span></h3>

      <div className="changeBtn">
          <button type="button">Best</button>
          <span></span>
          <button type="button">New</button>
      </div>

      <div className="bestNew_ItemList">
        <div>
          <ul>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
          </ul>

          <ul>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
          </ul>
          
          <ul>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
            <li>{/* <ProductItem /> */}</li>
          </ul>
        </div>
      </div>

      <div className="btn">
        <p className="prev"><i><FaChevronLeft /></i></p>
        <p className="next"><i><FaChevronRight /></i></p>
      </div>

      <div className="slideCount">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section id="eventBanner">
      <div>
        <div className="eventText">
          <h3>이벤트 런칭! <b>상품명</b></h3>
          <p>이벤트 상세 내용 이벤트 상세 내용 이벤트 상세 내용 이벤트 상세 내용 이벤트 상세 내용</p>
          <p><Link to="">More<i><FaPlus /></i></Link></p>
        </div>

        <img src="./img/ex.png" alt="이벤트 배너 이미지01" />
        <img src="./img/ex.png" alt="이벤트 배너 이미지02" />
      </div>
    </section>

    <section id="recommendCategory">
      <div>
        <div>
          <h3 className="mainTitle"><b>I Live U</b>'s Recommendation<br /> <span>아이리브유 추천 카테고리</span></h3>

          <Link to="/">
            <figure>
              <img src="./img/ex.png" alt="테마 상품 이미지" />

              <span></span>

              <figcaption>
                <dl>
                  <dt>카테고리명</dt>
                  <dd>카테고리 설명</dd>
                </dl>
              </figcaption>
            </figure>
          </Link>
          <Link to="/">
            <figure>
              <img src="./img/ex.png" alt="테마 상품 이미지" />

              <span></span>

              <figcaption>
                <dl>
                  <dt>카테고리명</dt>
                  <dd>카테고리 설명</dd>
                </dl>
              </figcaption>
            </figure>
          </Link>
          <Link to="/">
            <figure>
              <img src="./img/ex.png" alt="테마 상품 이미지" />

              <span></span>

              <figcaption>
                <dl>
                  <dt>카테고리명</dt>
                  <dd>카테고리 설명</dd>
                </dl>
              </figcaption>
            </figure>
          </Link>
        </div>

        <Link to="/">
          <figure>
            <img src="./img/ex.png" alt="테마 상품 대표이미지" />

            <span></span>

            <figcaption>
              <dl>
                <dt>카테고리명</dt>
                <dd>카테고리 설명</dd>
              </dl>
            </figcaption>
          </figure>
        </Link>
      </div>
    </section>

    <section id="bestReview">
      <h3 className="mainTitle"><b>Best Review</b><br /> <span>리뷰로 말하는 아이리브유</span></h3>

      <div>
        <MainReview />
        <MainReview />
        <MainReview />
        <MainReview />
        <MainReview />
        <MainReview />
      </div>
    </section>
    </>
  );
}


function CategoryMenu() {
  let subMenuList = [];

  for(let i = 0 ; i < menuData.length ; i ++) {
    if(menuData[i].subMenu.length > 1) {
      const subMenu = menuData[i].subMenu;
      for(let i = 0 ; i < subMenu.length ; i ++) {
        const newid = subMenu[i].id;
        const newtitle = subMenu[i].title;
        const newImg = subMenu[i].imgSrc;

        const newMenu = {"id": newid, "title": newtitle, "imgSrc": newImg}

        subMenuList = [...subMenuList, newMenu];
      }
    }
  }

  return (
    subMenuList.map((item) => (
      <li key={item.id}>
        <Link to="">
          <figure>
            <img src={item.imgSrc} alt={item.title} />

            <figcaption>{item.title}</figcaption>
          </figure>
        </Link>
      </li>
    ))
  );
}