function InputForm() {
  return (
    <div>
      <div>
        <label htmlFor="id"/>
        <input type="text" id="id" placeholder="아이디"/>
      </div>
      <div>
        <label htmlFor="password"/>
        <input type="password" id="password" placeholder="비밀번호"/>
      </div>
      <div>
        <button type="submit">로그인</button>
      </div>
    </div>
  );

}

export default InputForm;
