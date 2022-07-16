import React, {useState} from "react";


async function loginUser(credentials) {
    return fetch('http://localhost:5001/api/parent/login', {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' //+ access_token
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const ParentLogin = (props) => {
    //States for login
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //Handling changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    props.setToken(token);
  }

  return (
    <>
      <div>
        <h1>Please Log In</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email </p>
          <input type="email" value={email} onChange={handleEmail}/>
        </label>
        <label>
          <p>Password </p>
          <input type="password" value={password} onChange={handlePassword}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ParentLogin;
