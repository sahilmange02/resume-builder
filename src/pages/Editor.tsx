import React from 'react';
import { useResume } from '../context/resumeContext';
import { generatePDF } from '../utils/pdfGenerator';

const Editor: React.FC = () => {
  const {
    name, setName,
    contact, setContact,
    linkedIn, setLinkedIn,
    summary, setSummary,
    experience, setExperience,
    jobTitle, setJobTitle,
    company, setCompany,
    jobDate, setJobDate,
    jobLocation, setJobLocation,
    education, setEducation,
    skills, setSkills,
    strengths, setStrengths
  } = useResume();

  // Function to clear all fields
  const handleClearAll = () => {
    setName('');
    setContact('');
    setLinkedIn('');
    setSummary('');
    setJobTitle('');
    setCompany('');
    setJobDate('');
    setJobLocation('');
    setExperience('');
    setEducation('');
    setSkills('');
    setStrengths('');
  };

  const handleGeneratePDF = () => {
    generatePDF(name, contact, linkedIn, summary, jobTitle, company, jobDate, jobLocation, experience, education, skills, strengths);
  };

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#f3f3f3', padding: '20px' }}>
      
      {/* Left Side - Editing Form */}
      <div style={{ width: '40%', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#444', marginBottom: '16px' }}>Enter Your Details</h2>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Enter your name" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Contact:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Enter your contact details" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>LinkedIn/Portfolio:</label>
          <input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Enter LinkedIn or portfolio link" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Summary:</label>
          <textarea value={summary} onChange={(e) => setSummary(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', height: '60px' }}
            placeholder="Briefly explain why you're a great fit for the role." />
        </div>

        {/* Experience Section */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Job Title:</label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Enter job title" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Company Name:</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Enter company name" />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          <input type="text" value={jobDate} onChange={(e) => setJobDate(e.target.value)}
            style={{ width: '50%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Date Period" />
          <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)}
            style={{ width: '50%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Location" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Experience:</label>
          <textarea value={experience} onChange={(e) => setExperience(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', height: '80px' }} placeholder="Highlight your accomplishments" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Education:</label>
          <textarea value={education} onChange={(e) => setEducation(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', height: '80px' }} placeholder="Enter your educational background" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Skills:</label>
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} placeholder="Enter your skills (comma-separated)" />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#444' }}>Strengths:</label>
          <textarea value={strengths} onChange={(e) => setStrengths(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', height: '60px' }}
            placeholder="Explain how it benefits your work." />
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleGeneratePDF} style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Download PDF
          </button>

          <button onClick={handleClearAll} style={{ backgroundColor: '#dc3545', color: 'white', padding: '10px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Clear All
          </button>
        </div>
      </div>

      {/* Right Side - Resume Preview */}
      <div style={{ width: '55%', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginLeft: '20px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>{name || 'YOUR NAME'}</h1>
        
        <p>📞 {contact || 'Phone'} | ✉️ Email | 🔗 LinkedIn/Portfolio</p>
        <hr style={{ borderTop: '2px solid black', margin: '15px 0' }} />

        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>SUMMARY</h2>
        <p>Briefly explain why you're a great fit for the role.</p>
        <hr style={{ borderTop: '2px solid black', margin: '15px 0' }} />

        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>EXPERIENCE</h2>
        <p style={{ fontWeight: 'bold' }}>{experience || 'Title'}</p>
        <p style={{ color: '#3b82f6' }}>Company Name</p>
        <p>📅 Date period 📍 Location</p>
        <p>Highlight your accomplishments using numbers if possible.</p>
        <hr style={{ borderTop: '2px solid black', margin: '15px 0' }} />

        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>EDUCATION</h2>
        <p>Degree and Field of Study</p>
        <p style={{ color: '#3b82f6' }}>School or University</p>
        <p>📅 Date period</p>
        <hr style={{ borderTop: '2px solid black', margin: '15px 0' }} />

        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>SKILLS</h2>
        <p>{skills || 'Your Skill'}</p>
        <hr style={{ borderTop: '2px solid black', margin: '15px 0' }} />

        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>STRENGTHS</h2>
        <p style={{ fontWeight: 'bold' }}>Your Strength</p>
        <p>Explain how it benefits your work.</p>
      </div>
    </div>
  );
};

export default Editor;
