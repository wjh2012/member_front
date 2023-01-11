import { useNavigate } from "react-router-dom";

import './LoginButton.css';


function LoginButton() {

  const movePage = useNavigate();
  const btnClick = () =>{
    movePage('/login')
  }

  return (
    <div className="LoginButton">
      <button className="loginBtn" onClick={btnClick}>
        로그인
      </button>
    </div>
  );
}

export default LoginButton;