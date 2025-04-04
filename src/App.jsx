import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleAssessmentChoice = (type) => {
    navigate(`/assessment?type=${type}`);
  };

  return (
    <div style={{ backgroundColor: '#0c0c0e', height: '100vh', color: 'white', position: 'relative', overflow: 'hidden', fontFamily: "'Orbitron', sans-serif" }}>
      {/* Load Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet" />

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: '#0c0c0e' },
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            color: { value: '#ffffff' },
            links: { enable: true, color: '#ffffff', distance: 130 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 2 } },
          },
        }}
        style={{ position: 'absolute', zIndex: 0, width: '100%', height: '100%' }}
      />

      {/* Top Nav */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1.5rem 1rem', flexWrap: 'wrap' }}>
        <button onClick={() => setShowOptions(true)} style={navButtonStyle}>Start Assessment</button>
        <Link to="/about" style={navButtonStyle}>About SBSS</Link>
        <button onClick={() => { setShowServices(!showServices); setShowContact(false); }} style={navButtonStyle}>Services</button>
        <button onClick={() => { setShowContact(!showContact); setShowServices(false); }} style={navButtonStyle}>Contact</button>
      </div>

      {/* Centered Branding */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '900',
          letterSpacing: '0.05em',
          textShadow: '0 0 15px rgba(255,255,255,0.25)',
          marginBottom: '1rem'
        }}>
          Silex Strategic Group
        </h1>
        <p style={{ color: '#aaa', fontSize: '1.2rem' }}>
          Strategic Security. Real-World Results.
        </p>

        {/* Assessment Choice */}
        {showOptions && (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: 'lightgray' }}>Choose Assessment Type</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleAssessmentChoice('physical')} style={choiceBtnStyle}>Physical Security</button>
              <button onClick={() => handleAssessmentChoice('infosec')} style={choiceBtnStyle}>Information Security</button>
            </div>
          </div>
        )}
      </div>

      {/* Conditional Services */}
      {showServices && (
        <div style={sectionStyle}>
          <h2>Our Services</h2>
          <p>Physical and Information Security Consulting</p>
        </div>
      )}

      {/* Conditional Contact */}
      {showContact && (
        <div style={sectionStyle}>
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:silexstrategicgroup@gmail.com" style={{ color: 'lightblue' }}>silexstrategicgroup@gmail.com</a></p>
          <p>Phone: <a href="tel:5019527172" style={{ color: 'lightblue' }}>501-952-7172</a></p>
        </div>
      )}
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

const sectionStyle = {
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: '4rem 1rem 2rem',
  backgroundColor: '#111',
  marginTop: '4rem',
  color: 'white'
};
