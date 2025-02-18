// src/pages/Editor.tsx
import React, { useState } from 'react';
import { useResume } from '../context/resumeContext';
import { generatePDF } from '../utils/pdfGenerator';

const Editor: React.FC = () => {
  const { name, setName, contact, setContact } = useResume();
  const [localName, setLocalName] = useState(name);
  const [localContact, setLocalContact] = useState(contact);

  const handleGeneratePDF = () => {
    generatePDF(localName, localContact);
  };

  return (
    <div className="editor">
      <h1>Resume Editor</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
      </div>
      <div>
        <label>Contact:</label>
        <input
          type="text"
          value={localContact}
          onChange={(e) => setLocalContact(e.target.value)}
        />
      </div>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
};

export default Editor;
