import React, { useState } from "react";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit} method="post" target="_blank">
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
          <button type="submit" onCLick={handleSubmit}>
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
