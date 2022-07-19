import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const ParentLogin = (props) => {
  //States for login
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  //Handling changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    authService
      .login(email, password)
      .then(() => {
        navigate("/jobs");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLogin(true);
  };

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={() => handleLogin()} method="post" target="_blank">
        <label>Email </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleEmail(e)}
        />
        <label>Password </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <div>
          <button type="submit" onCLick={(e) => handleLogin(e)}>
            Submit
          </button>
        </div>
      </form>
      {login ? (
       navigate("/parent/jobs")
      ) : (
        <p>You Are Not Logged in</p>
      )}
    </>
  );
};

export default ParentLogin;
