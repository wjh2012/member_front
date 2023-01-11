import InputForm from "./InputForm";
import "./css/LoginWrap.css";

function LoginWrap() {

  const LoginFunc = (e) =>{
    
  }

  return (
    <div className="LoginWrap">
      <form onSubmit={LoginFunc}>
      <h1>통합로그인</h1>
      <InputForm />
      </form>
    </div>
  );
}

export default LoginWrap;
