import React, { createContext, useContext, useState } from 'react';

interface ResumeContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  contact: string;
  setContact: React.Dispatch<React.SetStateAction<string>>;
  linkedIn: string;
  setLinkedIn: React.Dispatch<React.SetStateAction<string>>;
  summary: string;
  setSummary: React.Dispatch<React.SetStateAction<string>>;
  jobTitle: string;
  setJobTitle: React.Dispatch<React.SetStateAction<string>>;
  company: string;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  jobDate: string;
  setJobDate: React.Dispatch<React.SetStateAction<string>>;
  jobLocation: string;
  setJobLocation: React.Dispatch<React.SetStateAction<string>>;
  experience: string;
  setExperience: React.Dispatch<React.SetStateAction<string>>;
  education: string;
  setEducation: React.Dispatch<React.SetStateAction<string>>;
  skills: string;
  setSkills: React.Dispatch<React.SetStateAction<string>>;
  strengths: string;
  setStrengths: React.Dispatch<React.SetStateAction<string>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [summary, setSummary] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDate, setJobDate] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [strengths, setStrengths] = useState('');

  return (
    <ResumeContext.Provider
      value={{
        name, setName,
        contact, setContact,
        linkedIn, setLinkedIn,
        summary, setSummary,
        jobTitle, setJobTitle,
        company, setCompany,
        jobDate, setJobDate,
        jobLocation, setJobLocation,
        experience, setExperience,
        education, setEducation,
        skills, setSkills,
        strengths, setStrengths
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
