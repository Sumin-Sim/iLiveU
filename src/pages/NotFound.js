import { TiCancelOutline } from "react-icons/ti";

import "../css/NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notFound">
      <div>
        <i><TiCancelOutline /></i>
        <h3>죄송합니다. 찾을 수 없는 페이지를 요청하셨습니다.</h3>
        <p>
          존재하지 않는 주소를 입력하셨거나<br />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </p>
        <Link to ="/">홈으로 돌아가기</Link>
      </div>
    </section>
  );
}