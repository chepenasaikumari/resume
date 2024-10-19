import React from 'react';
import './ResumeForm.css';

const ResumeForm = ({ resumeData, setResumeData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  return (
    <div class="form-container">
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={resumeData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={resumeData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={resumeData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-gray-700">Education</label>
        <textarea
          name="education"
          value={resumeData.education}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300"
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-700">Experience</label>
        <textarea
          name="experience"
          value={resumeData.experience}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300"
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-700">Skills</label>
        <input
          type="text"
          name="skills"
          value={resumeData.skills}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300"
        />
      </div>
    </form>
    </div>
  );
};

export default ResumeForm;
