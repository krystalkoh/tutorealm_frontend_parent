import React, { useState } from "react";

const ParentLogin = (props) => {
  //States for login
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);

  //Handling changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5001/api/parent/", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => response.json());
    setLogin(true);
  };

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleLogin} method="post" target="_blank">
        <label>Email </label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <div>
          <button type="submit" onCLick={handleLogin}>
            Submit
          </button>
        </div>
      </form>
      {login ? (
        <p>You Have Logged in Successfully</p>
      ) : (
        <p>You Are Not Logged in</p>
      )}
    </>
  );
};

export default ParentLogin;
