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
    <div style={{ backgroundColor: '#0c0c0e', height: '100vh', color: 'white', position: 'relative', overflow: 'hidden' }}>
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
        style={{ position: 'absolute', zIndex: 0 }}
      />

      {/* Navigation Buttons */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        paddingTop: '1.5rem',
        flexWrap: 'wrap'
      }}>
        <button onClick={() => setShowOptions(true)} style={navButtonStyle}>Start Assessment</button>
        <Link to="/about" style={navButtonStyle}>About SBSS</Link>
        <a href="#services" style={navButtonStyle}>Services</a>
        <a href="mailto:silexstrategicgroup@gmail.com" style={navButtonStyle}>Contact</a>
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '120px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Silex Strategic Group</h1>
        <p style={{ color: 'gray', marginBottom: '2rem' }}>Strategic Security. Real-World Results.</p>

        {showOptions && (
          <div>
            <h3 style={{ color: 'lightgray' }}>Choose Assessment Type</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleAssessmentChoice('physical')} style={choiceBtnStyle}>Physical Security</button>
              <button onClick={() => handleAssessmentChoice('infosec')} style={choiceBtnStyle}>Information Security</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const navButtonStyle = {
  background: 'transparent',
  color: 'lightblue',
  border: '1px solid lightblue',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  textDecoration: 'none',
  cursor: 'pointer',
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
