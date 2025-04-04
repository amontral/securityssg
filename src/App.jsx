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
    <div style={{ backgroundColor: '#0c0c0e', color: 'white', position: 'relative', overflowX: 'hidden' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: '#0c0c0e' },
          fpsLimit: 60,
          fullScreen: { enable: false },
          particles: {
            number: { value: 60 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
            links: { enable: true, color: '#ffffff', distance: 100 },
            move: { enable: true, speed: 1 }
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          height: '100%',
          width: '100%',
        }}
      />

      {/* Navigation Buttons */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1.5rem 1rem',
        flexWrap: 'wrap'
      }}>
        <button onClick={() => setShowOptions(true)} style={navButtonStyle}>Start Assessment</button>
        <Link to="/about" style={navButtonStyle}>About SBSS</Link>
        <a href="#services" style={navButtonStyle}>Services</a>
        <a href="#contact" style={navButtonStyle}>Contact</a>
      </div>

      {/* Title and Assessment Selector */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '100px' }}>
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

      {/* Services Section */}
      <div id="services" style={sectionStyle}>
        <h2>Our Services</h2>
        <p>Physical and Information Security Consulting</p>
      </div>

      {/* Contact Section */}
      <div id="contact" style={sectionStyle}>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:silexstrategicgroup@gmail.com" style={{ color: 'lightblue' }}>silexstrategicgroup@gmail.com</a></p>
        <p>Phone: <a href="tel:5019527172" style={{ color: 'lightblue' }}>501-952-7172</a></p>
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

const sectionStyle = {
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: '4rem 1rem 2rem',
  backgroundColor: '#111',
  marginTop: '4rem',
  color: 'white'
};
