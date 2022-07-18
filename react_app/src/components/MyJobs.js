import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TutorList from "./TutorList";

const MyJobs = () => {
  const [joblist, setJoblist] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async (input) => {
    if (input) {
      const jobList = `http://localhost:5001/parent/`;
      const res = await fetch(jobList);
      const jobs = await res.json();
      setJoblist(jobs);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [joblist]);

  const fetchTutors = async () => {
    const tutorlist = `http://localhost:5001/parent/`;
    const res = await fetch(tutorlist);
    const tutors = await res.json();
    navigate("/tutors")
    return (
      <TutorList tutors={tutors}/>
    );
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

  return <>{myJobs}</>;
};

export default MyJobs;
