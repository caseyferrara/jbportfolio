import './CSS/Style.css';
import { Element } from 'react-scroll';
import homepage from '../Images/homepage.png';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HomePage() {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
  }, []);

  const options = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
        },
    },
    particles: {
        color: {
            value: "#fff",
        },
        stars: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 5,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "out",
            },
            random: true,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 600,
            },
            value: 80,
        },
        opacity: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
            value: { min: 0, max: 1}
        },
        shape: {
            type: "star",
        },
        size: {
            value: { min: 1, max: 6 },
        },
    },
    detectRetina: true,
  }
  
  return (
    <Element id="homepage">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        style={{
          zIndex: 0
        }}
      />
      <div align="center" className="homeContainer">
        <img
          src={homepage}
          alt='homepage'
          className='homeImg swing-in-top-bck'
        >
        </img>
      </div>
    </Element>
  );
}

export default HomePage;