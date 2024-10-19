import React, { useState } from 'react';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Footer from './components/Footer';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  return (
    <div className="min-h-screen flex flex-col text-center">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-4">
          <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
