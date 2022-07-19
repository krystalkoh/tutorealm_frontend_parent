import React, { useState } from "react";
import ConfirmHireModal from "./ConfirmHireModal";
import TutorPreviewModal from "./TutorPreviewModal";
import { useNavigate } from "react-router-dom";

const TutorList = (props) => {
  const [showPreview, setShowPreview] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  let navigate = useNavigate();

  const handlePreviewModal = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleConfirmHiremModal = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleHireConfirm = (e) => {
    e.preventDefault();
    //create function to push tutorid into parent's tutorsApplied key in collection
    setShowConfirmation(false);
    navigate("/parent/jobs");
  };
  const closeModal = (e) => {
    e.preventDefault();
    setShowPreview(false);
    setShowConfirmation(false);
  };

  const tutors = props.tutors.map((tutor) => {
    return (
      <>
        <div id={tutor.id} key={tutor.id} onClick={handlePreviewModal}>
          <p>{tutor.gender}</p>
          <p>{tutor.edulevel}</p>
          <div>
            <button onClick={handleConfirmHiremModal}>Hire</button>
          </div>
        </div>
        {showPreview && (
          <div onClick={closeModal}>
            <TutorPreviewModal
              title="Tutor's profile"
              name={tutor.name}
              gender={tutor.gender}
              edulevel={tutor.edulevel}
              show={showPreview}
              onClose={() => setShowPreview(false)}
            />
          </div>
        )}
        {showConfirmation && (
          <div onClick={closeModal}>
            <ConfirmHireModal
              id={tutor.id}
              title="Hire confirmation"
              message="Are you sure you want to hire this tutor?"
              onClick={handleHireConfirm}
            />
          </div>
        )}
      </>
    );
  });
  return (
    <>
      <h1>Tutors Who Are Interested In This Assignment</h1>
      {tutors}
    </>
  );
};

export default TutorList;
