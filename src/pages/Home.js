import { Link } from "react-router-dom";

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
        <li><Link to=""><img src="./img/visual_1.png" alt="visual_1" /></Link></li>
        <li><Link to=""><img src="./img/visual_2.png" alt="visual_2" /></Link></li>
        <li><Link to=""><img src="./img/visual_3.png" alt="visual_3" /></Link></li>
        <li><Link to=""><img src="./img/visual_4.png" alt="visual_4" /></Link></li>
        <li><Link to=""><img src="./img/visual_5.png" alt="visual_5" /></Link></li>
        <li><Link to=""><img src="./img/visual_6.png" alt="visual_6" /></Link></li>
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
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_1.png" alt="category_1" />
            
              <figcaption>공기&amp;접시</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_2.png" alt="category_2" />
            
              <figcaption>다용도볼</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_3.png" alt="category_3" />
            
              <figcaption>수저</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_4.png" alt="category_4" />
            
              <figcaption>컵&amp;잔</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_5.png" alt="category_5" />
            
              <figcaption>물병</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_6.png" alt="category_6" />
            
              <figcaption>조리도구</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_7.png" alt="category_7" />
            
              <figcaption>주방용품&amp;소품</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_8.png" alt="category_8" />
            
              <figcaption>쟁반&amp;트레이</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_9.png" alt="category_9" />
            
              <figcaption>식탁보&amp;매트</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_10.png" alt="category_10" />
            
              <figcaption>코스터</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_11.png" alt="category_11" />
            
              <figcaption>도시락통</figcaption>
            </figure>       
          </Link>
        </li>
        <li>
          <Link to="">
            <figure>
              <img src="./img/category_12.png" alt="category_12" />
            
              <figcaption>식판</figcaption>
            </figure>       
          </Link>
        </li>
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
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
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
        <img src="./img/ex.png" alt="이벤트 배너 이미지01" />

        <div className="eventText">
          <h3>이벤트 런칭! <b>상품명</b></h3>
          <p>이벤트 상세 내용 이벤트 상세 내용 이벤트 상세 내용 이벤트 상세 내용 이벤트 상세 내용</p>
          <p><Link to="">More<i><FaPlus /></i></Link></p>
        </div>

        <img src="./img/ex.png" alt="이벤트 배너 이미지02" />
      </div>
    </section>

    <section id="themeProduct">
      <div>
        <h3 className="mainTitle"><b>I Live U</b>'s Recommendation<br /> <span>아이리브유가 추천합니다.</span></h3>
        <p>테마 설명 텍스트 입력. 테마 설명 텍스트 입력. 테마 설명 텍스트 입력. 테마 설명 텍스트 입력.</p>

        <img src="./img/ex.png" alt="테마 상품 이미지" />
        <img src="./img/ex.png" alt="테마 상품 이미지" />
        <img src="./img/ex.png" alt="테마 상품 이미지" />
      </div>

      <img src="./img/ex.png" alt="테마 상품 이미지" />
    </section>

    <section id="bestReview">
      <h3 className="mainTitle"><b>Best Review</b><br /> <span>베스트 리뷰</span></h3>

      <div>
        <MainReview />
        <MainReview />
        <MainReview />
        <MainReview />
      </div>
    </section>
    </>
  );
}