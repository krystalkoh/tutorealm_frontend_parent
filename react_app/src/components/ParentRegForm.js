import React, { useState } from "react";

const ParentRegForm = () => {
  //States for registration
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      parentName === "" ||
      phone === "" ||
      address === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>You've successfully registered!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all fields</h1>
      </div>
    );
  };

  return (
    <>
      <div>
        <h1>Registration Form</h1>
      </div>
      <div>
        {errorMessage()}
        {successMessage()}
      </div>
      <form action="" method="post" target="_blank" onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Parent's email </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label>Parent's name </label>
            <input
              type="text"
              placeholder="Name of parent"
              value={parentName}
              onChange={handleParentName}
            />
          </div>
          <div>
            <label>Parent's phone number </label>
            <input
              type="text"
              placeholder="Phone number"
              value={phone}
              onChange={handlePhone}
            />
          </div>
          <div>
            <label>Address </label>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddress}
            />
          </div>
          <div>
            <label>Password </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div>
            <label>Confirm Password </label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </div>
        </div>
        <div>
          <button type="submit" class="btn">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default ParentRegForm;
