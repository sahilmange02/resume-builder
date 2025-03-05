import React from 'react';

const templates = [
  {
    id: 1,
    name: 'Classic Resume',
    image: 'https://free-cv-templates.com/wp-content/uploads/2017/04/Classic.jpg',
  },
  {
    id: 2,
    name: 'Modern Resume', 
    image: 'https://cdn.enhancv.com/predefined-examples/VJ3f5EAS106cG3bfwsmLV6i3GbovsflxgREfH3Gz/image.png',
  },
  {
    id: 3,
    name: 'Professional Resume',
    image: 'https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg',
  },
  {
    id: 4,
    name: 'Minimalistic Resume',
    image: 'https://cdn-blog.novoresume.com/articles/minimalistic-resume-templates/minimalistic-resume-examples-03.webp', 
  },
  {
    id: 2,
    name: 'Simple Student Resume', 
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    name: 'Elegant Resume',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSct8URxHryOF-kZ0cas1V6Ga2fWVgrWGsYxw&s',
  },
];

const Templates: React.FC = () => {
  return (
    <div style={{ padding: '20px', marginTop: '20px' }}> {/* 👈 Increased marginTop to ensure it starts below navbar */}
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
        Resume Templates
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Choose from a variety of resume templates to get started.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        justifyContent: 'center',
        padding: '10px'
      }}>
        {templates.map((template) => (
          <div key={template.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out',
            cursor: 'pointer',
            textAlign: 'center',
            backgroundColor: '#fff'
          }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={template.image} alt={template.name} style={{ width: '100%', height: 'auto' }} />
            <div style={{ padding: '10px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{template.name}</h3>
              <button style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Select Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;