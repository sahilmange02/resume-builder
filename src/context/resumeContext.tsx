import React, { createContext, useContext, useState } from 'react';

interface ResumeContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  contact: string;
  setContact: React.Dispatch<React.SetStateAction<string>>;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export const ResumeProvider: React.FC = ({ children }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  return (
    <ResumeContext.Provider value={{ name, setName, contact, setContact }}>
      {children}
    </ResumeContext.Provider>
  );
};
