import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSbss() {
  return (
    <div style={{ backgroundColor: '#0c0c0e', minHeight: '100vh', padding: '2rem', color: 'white' }}>
      <h1 style={{ textAlign: 'center' }}>What is SBSS?</h1>
      <p style={{ maxWidth: '800px', margin: '2rem auto', lineHeight: '1.6', fontSize: '1.1rem' }}>
        The Small Business Security Standard (SBSS) is a proprietary framework developed by Silex Strategic Group
        to help small businesses evaluate and improve their physical and information security. SBSS simplifies
        complex industry best practices and regulatory expectations into actionable questions, enabling
        self-assessments and strategic planning.
      </p>
      <p style={{ maxWidth: '800px', margin: '1rem auto', lineHeight: '1.6', fontSize: '1.1rem' }}>
        SBSS is composed of 6 core principles and 50 security controls. Users can assess their posture,
        receive categorized scores (At-Risk, Needs Improvement, Secure), and use that insight to pursue
        consultations or further improvements.
      </p>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/" style={{ color: 'lightblue', textDecoration: 'underline' }}>← Back to Home</Link>
      </div>
    </div>
  );
}
