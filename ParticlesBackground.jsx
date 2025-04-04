// src/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: '#0c0c0e'
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        particles: {
          number: {
            value: 60
          },
          size: {
            value: 3
          },
          move: {
            enable: true,
            speed: 1
          },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 150
          }
        }
      }}
    />
  );
}
