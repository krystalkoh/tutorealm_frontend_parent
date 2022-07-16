import React, { useState } from "react";

const CreateJob = () => {
  //States for job creation
  const [childName, setChildName] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");
  const [days, setDays] = useState("");
  const [rate, setRate] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  //Handling changes
  const handleChildName = (e) => {
    setChildName(e.target.value);
  };
  const handleLevel = (e) => {
    setLevel(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleFrequency = (e) => {
    setFrequency(e.target.value);
  };
  const handleDays = (e) => {
    setDays(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      childName === "" ||
      level === "" ||
      subject === "" ||
      duration === "" ||
      frequency === "" ||
      days === "" ||
      rate === ""
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
        <h1>You've successfully created an assignment!</h1>
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
            <label>Child's name </label>
            <input
              type="text"
              placeholder="Name of child"
              value={childName}
              onChange={handleChildName}
            />
          </div>
          <div>
            <label>Select a level: </label>
            <select name="level" value={level} onChange={handleLevel}>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
              <option value="P4">P4</option>
              <option value="P5">P5</option>
              <option value="P6">P6</option>
              <option value="Sec 1">Sec 1</option>
              <option value="Sec 2">Sec 2</option>
              <option value="Sec 3">Sec 3</option>
              <option value="Sec 4">Sec 4</option>
              <option value="Sec 5">Sec 5</option>
              <option value="JC1">JC 1</option>
              <option value="JC2">JC 2</option>
            </select>
          </div>
          <div>
            <label>Subject </label>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={handleSubject}
            />
          </div>
          <div>
            <label>Duration </label>
            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={handleDuration}
            />
          </div>
          <div>
            <label>Frequency </label>
            <input
              type="text"
              placeholder="Frequency"
              value={frequency}
              onChange={handleFrequency}
            />
          </div>
          <div>
            <label>Days </label>
            <input
              type="text"
              placeholder="Which days will tuition be conducted?"
              value={days}
              onChange={handleDays}
            />
          </div>
          <div>
            <label>Rate per hour</label>
            <input
              type="text"
              placeholder="Which days will tuition be conducted?"
              value={rate}
              onChange={handleRate}
            />
          </div>
        </div>
        <div>
          <button type="submit" class="btn">
            Create assignment
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateJob;
