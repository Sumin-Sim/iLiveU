import { FaCheck } from "react-icons/fa";

import "../css/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <h3>로그인 <span>Login</span></h3>

      <form>
        <ul>
          <li className="loginText">
            <label htmlFor="userId">아이디</label>
            <input type="text" id="userId" name="userId" autoComplete="off" />
          </li>

          <li className="loginText">
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" id="userPw" name="userPw" autoComplete="off" />
          </li>

          <li className="checkBoxInput">
            <label htmlFor="remember">아이디 저장</label>
            <span><i><FaCheck /></i></span>
            <input type="checkbox" id="remember" name="remember" />
          </li>
        </ul>

        <button type="button" className="loginImpossible">로그인</button>
      </form>

      <ul>
        <li><Link to="">아이디 찾기</Link></li>
        <li><Link to="">비밀번호 찾기</Link></li>
        <li><Link to="">회원가입</Link></li>
      </ul>
    </section>
  );
}