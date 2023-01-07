import './LoginButton.css';

function LoginButton() {

  const btnClick = () => {
    console.log('hello button');
  };

  return (
    <div className="LoginButton">
      <button className="loginBtn" onClick={btnClick}>
        버튼
      </button>
    </div>
  );
}

export default LoginButton;