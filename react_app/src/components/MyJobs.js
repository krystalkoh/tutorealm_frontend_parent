import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyJobs = () => {
  const [joblist, setJoblist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async (input) => {
    if (input) {
      const jobList = `http://localhost:5001/parent/`;
      const res = await fetch(jobList);
      const jobs = await res.json();
      setJoblist(jobs);
    }
  };

  const fetchTutors = async () => {
    const tutorList = `http://localhost:5001/parent/`;
    const res = await fetch(tutorList);
    const tutors = await res.json();
    return tutors;
  };

  const viewTutors = () => {
    fetchTutors();
    navigate("/tutors");
  };

  const myJobs = joblist.map((job) => {
    return (
      <div id={job.id} key={job.id} onClick={viewTutors}>
        <p>{job.childName}</p>
        <p>{job.level}</p>
        <p>{job.subject}</p>
      </div>
    );
  });

  return <>{myJobs}</>;
};

export default MyJobs;
