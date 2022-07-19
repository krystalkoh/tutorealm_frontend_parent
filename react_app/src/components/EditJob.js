import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditJob = () => {
  const [childName, setChildName] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [frequency, setFrequency] = useState("");
  const [days, setDays] = useState("");
  const [rate, setRate] = useState("");
  const navigate = useNavigate();

  const getJobDetails = async () => {
    let result = await fetch(`http://localhost:5001/parent/created`);
    result = await result.json();
    setChildName(result.childName);
    setLevel(result.level);
    setSubject(result.subject);
    setDuration(result.duration);
    setFrequency(result.frequency);
    setDays(result.days);
    setRate(result.rate);
  };

  useEffect(() => {
    getJobDetails();
  }, []);

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

  // Handling job update
  const updateJob = async () => {
    let result = await fetch(`http://localhost:5001/parent/registration`, {
      headers: {
        "Content-Type": "Application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        childName: childName,
        level: level,
        subject: subject,
        duration: duration,
        frequency: frequency,
        days: days,
        rate: rate,
      }),
    });
    result = await result.json();
    if (result) {
      navigate("/parent/jobs");
    }
  };

  return (
    <>
      <div>
        <h1>Update Assignment</h1>
      </div>
      <form onSubmit={updateJob}>
        <div>
          <div>
            <label>Child's name </label>
            <input
              type="text"
              placeholder="Name of child"
              value={childName}
              onChange={handleChildName}
              required
            />
          </div>
          <div>
            <label>Select a level: </label>
            <select name="level" value={level} onChange={handleLevel} required>
              <option value="null"> </option>
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
              required
            />
          </div>
          <div>
            <label>Duration </label>
            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={handleDuration}
              required
            />
          </div>
          <div>
            <label>Frequency </label>
            <input
              type="text"
              placeholder="Frequency"
              value={frequency}
              onChange={handleFrequency}
              required
            />
          </div>
          <div>
            <label>Days </label>
            <input
              type="text"
              placeholder="Which days will tuition be conducted?"
              value={days}
              onChange={handleDays}
              required
            />
          </div>
          <div>
            <label>Rate per hour</label>
            <input
              type="text"
              placeholder="Which days will tuition be conducted?"
              value={rate}
              onChange={handleRate}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" class="btn" onClick={updateJob}>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditJob;
