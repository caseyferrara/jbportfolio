import './CSS/Style.css';
import { Element } from 'react-scroll';
import homepage from '../Images/homepage.png';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HomePage() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
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
          value: "#303030",
      },
      stars: {
          color: "#303030",
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
              area: 1200,
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
          value: { min: 1, max: 3 },
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