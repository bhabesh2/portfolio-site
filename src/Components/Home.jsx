import React, { useEffect, useState } from 'react';
import Typed from "react-typed";
function Home() {
  const [textColor, setTextColor] = useState('#000000');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setTextColor(randomColor);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <>
     <section className="home-wraper">
        <div className="info container">
            <h1 className="text">Hi, You Are Welcome!</h1>
            <h2>I am <span className='name'>BHABESH BHARALI</span></h2>
            <span className='type-text'>Skills &nbsp;
            <Typed
              strings={["A web-developer","HTML","CSS","JavaScript","React.js","Node.js","MongoDB","MySQL","DSA"]}
              typeSpeed={80}
              backSpeed={20}
              loop
              style={{ color: textColor }}
            />
            </span>
            <p>A skilled full-stack web developer specializing in JavaScript. Proficient in crafting dynamic and interactive websites using cutting-edge technologies and frameworks. Well-versed in front-end development, back-end integration, and database management. Committed to delivering exceptional user experiences through clean, efficient, and maintainable code.</p>
            <div className="bttn">
            <a href="https://drive.google.com/file/d/1eV2giWJ5JeEeU1FB5nruqd9nL5VHyCCM/view?usp=sharing" className="btn btn-success btn-lg rounded-pill" target="_blank" rel="noopener noreferrer">Check Resume</a>
            </div>
        </div>
     </section> 
    </>
  )
}

export default Home
