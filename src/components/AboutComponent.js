import ThreeBackground2 from "@components/ThreeBackground2"; // Ensure this path is correct
import Link from "next/link";
import React, { useState } from 'react';


const AboutComponent = () => {
  const initialText = "Greetings! My name is Jason: Digital Alchemist and Architect of Virtual Realms. As an ascendant of the mystical arts of  C++, Lua, SQL, JavaScript, and Python, I engineer the essence of immersive, interactive digital experiences. Each venture embarked upon is led with a collaborative, innovative gameplay, and user experience-first ethos. Thank you, brave traveller, for embarking upon this thrilling quest through my practiced conjurings.";
  const wizardText = "Welcome! I'm Jason: Software Engineer, game developer, and full-stack web designer. My technical expertise includes C++, Lua, SQL, JavaScript, Python, Unity VR, Unreal. I excel in blending immersive gameplay with interactive web experiences  led with a collaborative, innovative, and user-experience first ethos. With a solid foundation in computer science and business information systems, I bring a collaborative spirit and a passion for innovative game design to every project. Explore my journey from web to game development and view my projects.";

  const [text, setText] = useState(initialText);

  const [isWizardMode, setIsWizardMode] = useState(false);

  const handleClick = () => {
    setText(text === initialText ? wizardText : initialText);
    setIsWizardMode(!isWizardMode);
  }

  const wizardStyle = {
    background: 'linear-gradient(270deg, #ff0000, #ff7a00, #acff00, #00ff40, #00ffff, #0040ff, #7a00ff, #ff00c1, #ff0000)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientChange 5s ease-infinite, glow 2s ease-infinite',
  };
  

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '20px', paddingBottom: '20px' }}>
        
        <div className="neoh_fn_about_item">
          <div className="img_item4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Lgd1APuWPyI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left"> 
              <h3 className="fn_title">Crafting Worlds: About Me</h3>
           <div className="line"> 
                <span /> 
              </div>
            </div>
            <div className="desc">
        <p>  {text}
</p>
        <div className="wizard">
  <span className="wizardcolor" onClick={handleClick}>
    [{isWizardMode ? '🔮wizard mode 🧙‍♂️' : '⭐/Translate'}]
  </span>  
</div>
      </div>{/*
      <div className="buttons">
      <a
    href="http://jasongodfrey.dev"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    Web Development
  </a>
  <a
    href="https://github.com/jasonygodfrey"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/jasong7"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    LinkedIn
  </a>
  <a
    href="https://samuraistudios.vercel.app"
    target="_blank"
    rel="noreferrer"
    className="neoh_fn_button"
  >
    Samurai Studios
  </a>
</div>*/}
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;