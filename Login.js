import styled from "styled-components";
import "../App.css";

const Login = () => {
  return (
    <div className="login_container">
      <h1 className="login_title">로그인</h1>
      <div className="login_main_container">
        <div className="id_input_container">
          <label className="login_label" htmlFor="id_input">
            이메일 주소 또는 전화번호
          </label>
          <input className="login_input" id="id_input"></input>
        </div>
        <div className="password_input_container">
          <label className="login_label" htmlFor="password_input">
            비밀번호
          </label>
          <input className="login_input" id="password_input"></input>
        </div>
        <div className="button_container">
          <button className="login_button" type="submit">
            로그인
          </button>
        </div>
        <div className="login_checkbox">
          <input type="checkbox"></input> 로그인 정보 저장
        </div>
        <div className="caution">
          Netflix 회원이 아닌가요? 수강 종료까지 가입하지 마세요.
        </div>
      </div>
    </div>
  );
};
export default Login;
