import React from 'react';
import './ResumePreview.css';

const ResumePreview = ({ resumeData }) => {
  return (
    <div className="resume-preview-container">
      <div className="resume-preview">

      <div className="mt-4">
      <h3 className="text-xl font-semibold">name:</h3>
        <h2 className="text-2xl font-bold">{resumeData.name}</h2>
        </div>

        <div className="mt-4">
        <h3 className="text-xl font-semibold">email:</h3>
        <p>{resumeData.email}</p>
        </div>

        <div className="mt-4">
        <h3 className="text-xl font-semibold">phone no:</h3>
        <p>{resumeData.phone}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Education:</h3>
          <p>{resumeData.education}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Experience:</h3>
          <p>{resumeData.experience}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Skills:</h3>
          <p>{resumeData.skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
