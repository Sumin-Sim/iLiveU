import { Link } from "react-router-dom";

import { BiSupport } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>I Live U</p>

        <dl>
          <dt><i><BiSupport /></i>고객센터<span>Customer Support</span></dt>

          <dd><Link to="tel:012-345-6789">012-345-6789</Link></dd>
          <dd>
            <dfn>운영시간</dfn>
            오전 09:00 ~ 오후 06:00
          </dd>
          <dd>
            <dfn>점심시간</dfn>
            오후 12:00 ~ 오후 01:00
          </dd>
          <dd>주말 및 공휴일 휴무</dd>
          <dd><Link to="support">온라인 고객센터<i><FaArrowRight /></i></Link></dd>
        </dl>

        <div>
          <address>
            <p>회사정보<span>Company Information</span></p>
            <span></span>

            <div>
              <dl>
                <dt>회사명</dt>
                <dd>아이리브유&#40;I Live U&#41;</dd>
              </dl>
              
              <dl>
                <dt>대표자</dt>
                <dd>홍길동</dd>
              </dl>

              <dl>
                <dt>주소</dt>
                <dd>서울특별시 서울구 서울대로 123&#40;서울로 1가&#41; 4층</dd>
              </dl>
            </div>

            <div>
              <dl>
                <dt>사업자 등록번호</dt>
                <dd>012-34-56789</dd>
              </dl>

              <dl>
                <dt>통신판매신고번호</dt>
                <dd>2023-서울서울-6789</dd>
              </dl>

              <dl>
                <dt>제품문의</dt>
                <dd><Link to="tel:012-345-6789">012-345-6789</Link></dd>
              </dl>

              <dl>
                <dt>FAX</dt>
                <dd>012-345-6780</dd>
              </dl>
            </div>

            <div>
              <dl>
                <dt>이메일 주소</dt>
                <dd><Link to="mailto:iliveu@iliveu.com">iliveu@iliveu.com</Link></dd>
              </dl>

              <dl>
                <dt>제휴문의</dt>
                <dd><Link to="mailto:iliveu@iliveu.com">iliveu@iliveu.com</Link></dd>
              </dl>
              
              <dl>
                <dt>개인정보관리책임자</dt>
                <dd>홍길서&#40;<Link to="mailto:ilivev@iliveu.com">ilivev@iliveu.com</Link>&#41;</dd>
              </dl>
            </div>
          </address>

          <small>Copyright &copy; 2023 아이리브유 All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}