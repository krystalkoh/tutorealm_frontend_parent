import React, { useState } from "react";
import ConfirmHireModal from "./ConfirmHireModal";
import TutorPreviewModal from "./TutorPreviewModal";

const TutorList = (props) => {
  const [showPreview, setShowPreview] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);


  const tutors = props.tutors.map((tutor) => {
    return (
      <>
        <div id={tutor.id} key={tutor.id} onClick={setShowPreview(true)}>
          <p>{tutor.name}</p>
          <p>{tutor.gender}</p>
          <div>
            <button onClick={() => setShowConfirmation(true)}>
              Hire
            </button>
          </div>
        </div>
        {showPreview && (
          <TutorPreviewModal
            title="Tutor's profile preview"
            name={tutor.name}
            gender={tutor.gender}
            edulevel={tutor.edulevel}
            show={showPreview}
            onClose={() => setShowPreview(false)}
          />
        )}
        {showConfirmation && (
        <ConfirmHireModal id={tutor.id}
          title="Hire confirmation"
          message="Are you sure you want to hire this tutor?"
          //onClick={} change assignment availbility to false, close the modal
        />
        )}
      </>
    );
  });
  return <>{tutors}</>;
};

export default TutorList;
