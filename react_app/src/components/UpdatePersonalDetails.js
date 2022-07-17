import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePersonalDetails = () => {
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const params = useParams();
  const navigate = useNavigate;

  useEffect(() => {
    getPersonalDetails();
  }, []);

  const getPersonalDetails = async () => {
    let result = await fetch(`http://localhost:5001/parent/${params.id}`);
    result = await result.json();
    setEmail(result.email);
    setParentName(result.parentName);
    setPhone(result.phone);
    setAddress(result.address);
    setPassword(result.password);
  };

  //Handling changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleParentName = (e) => {
    setParentName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling form update
  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5001/parent/${params.id}`, {
      headers: {
        "Content-Type": "Application/json",
      },
      method: "Put",
      body: JSON.stringify({ email, parentName, phone, address, password }),
    });
    result = await result.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
      <form action="" method="post" target="_blank" onSubmit={updateProduct}>
        <div>
          <div>
            <label>Parent's email </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div>
            <label>Parent's name </label>
            <input
              type="text"
              placeholder="Name of parent"
              name="parentName"
              value={parentName}
              onChange={handleParentName}
              required
            />
          </div>
          <div>
            <label>Parent's phone number </label>
            <input
              type="text"
              placeholder="Phone number"
              name="phone"
              value={phone}
              onChange={handlePhone}
              required
            />
          </div>
          <div>
            <label>Address </label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleAddress}
              required
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" class="btn" onClick={updateProduct}>
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdatePersonalDetails;
