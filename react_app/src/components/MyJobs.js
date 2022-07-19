import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TutorList from "./TutorList";
import authService from "../services/AuthService";

const MyJobs = () => {
  const [joblist, setJoblist] = useState([]);
  const navigate = useNavigate();

  const fetchMyJobs = async (input) => {
    if (input) {
      const jobList = `http://localhost:5001/api/parent/created`; //to verify with backend
      const res = await fetch(jobList, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + authService.getCurrentUser().access,
        },
      });
      const jobs = await res.json();
      setJoblist(jobs);
    }
  };

  useEffect(() => {
    fetchMyJobs();
  }, [joblist]);

  const fetchTutors = async () => {
    const tutorlist = `http://localhost:5001/api/parent/tutorApplied`; //to verify with backend
    const res = await fetch(tutorlist, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + authService.getCurrentUser().access,
      },
    });
    const tutors = await res.json();
    navigate("/parent/applied");
    return <TutorList tutors={tutors} />;
  };

  const myJobs = joblist.map((job) => {
    return (
      <div id={job.id} key={job.id} onClick={fetchTutors}>
        <p>{job.childName}</p>
        <p>{job.level}</p>
        <p>{job.subject}</p>
      </div>
    );
  });

  return (
    <>
      <h1>My Assignments</h1>
      {myJobs}
    </>
  );
};

export default MyJobs;
