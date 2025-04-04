// src/App.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function App() {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleAssessmentChoice = (type) => {
    navigate(`/assessment?type=${type}`);
  };

  return (
    <div style={{ backgroundColor: '#0c0c0e', height: '100vh', color: 'white', textAlign: 'center', position: 'relative' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: '#0c0c0e' },
          fpsLimit: 60,
          particles: {
            color: { value: '#ffffff' },
            links: { enable: true, color: '#ffffff' },
            move: { enable: true, speed: 0.5 },
            number: { value: 50 },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 3 } }
          }
        }}
        style={{ position: 'absolute', top: 0 }}
      />

      <div style={{ position: 'relative', zIndex: 1, paddingTop: '100px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Silex Strategic Group</h1>
        <p style={{ color: 'gray', marginBottom: '2rem' }}>Strategic Security. Real-World Results.</p>

        {!showOptions ? (
          <button
            onClick={() => setShowOptions(true)}
            style={{ background: 'white', color: '#000', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: 'bold' }}
          >
            Start SBSS Assessment
          </button>
        ) : (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: 'lightgray' }}>Choose Assessment Type</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleAssessmentChoice('physical')} style={choiceBtnStyle}>Physical Security</button>
              <button onClick={() => handleAssessmentChoice('infosec')} style={choiceBtnStyle}>Information Security</button>
            </div>
          </div>
        )}

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <Link to="/about" style={navBtnStyle}>About SBSS</Link>
          <a href="#services" style={navBtnStyle}>Services</a>
          <a href="mailto:silexstrategicgroup@gmail.com" style={navBtnStyle}>Contact</a>
        </div>
      </div>
    </div>
  );
}

const navBtnStyle = {
  color: 'lightblue',
  textDecoration: 'underline',
  fontSize: '1rem'
};

const choiceBtnStyle = {
  background: '#ffffff',
  color: '#000',
  padding: '0.75rem 1.25rem',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer'
};
