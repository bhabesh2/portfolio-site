import React, { useState } from "react";
import img from "../Components/IMG_20211001_174615.jpg";

function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const flipStyle = {
    transform: isFlipped ? "rotateY(360deg)" : "rotateY(0deg)",
  };

  return (
    <section className="container-fluid about-section bg-dark">
      <h3 className="title-text text-white text-center position-relative">About Me</h3>
      <div className="title container text-center section-box">
        <div className="left-side">
          <img src={img} alt="about-img" />
        </div>
        <div className={`right-side ${isFlipped ? "flipped" : ""}`} style={flipStyle}>
          <div className="card-content">
            <div className={`front-face ${isFlipped ? "hidden" : ""}`}>
              <p className="text-start">
                As a full stack developer, an extensive range of skills
                encompassing HTML, CSS, JavaScript, Node.js, React.js, and
                Bootstrap has been acquired. A diverse set of technologies is
                seamlessly utilized to craft captivating and immersive web
                experiences. The ability to create visually stunning interfaces
                and engaging user interactions is facilitated by a keen eye for
                design aesthetics and an in-depth understanding of modern web
                development principles. With a solid foundation in both front-end
                and back-end development, a comprehensive approach is taken to
                ensure the smooth integration and seamless functionality of
                applications. An unwavering dedication to staying abreast of
                industry trends and advancements ensures the delivery of
                cutting-edge solutions. The ultimate goal is to create elegant,
                efficient, and user-centric digital solutions that leave a lasting
                impression on users.
              </p>
            </div>
            <div className={`back-face ${isFlipped ? "" : "hidden"}`}>
              <p className="text-start">
                <span>gmail &nbsp;</span> bhabeshbharali75@gmail.com
              </p>
              <p className="text-start">
                <span>Address &nbsp;</span> Darrang,Assam(IN)
              </p>
              <p className="text-start">
                <span>City &nbsp;</span> Mangaldai
              </p>
              <p className="text-start">
                <span>P.O &nbsp;</span> Rangamati
              </p>
              <p className="text-start">
                <span>Pin &nbsp;</span> 784529
              </p>
              <p className="text-start">
                <span>Phone &nbsp;</span> +918638099784
              </p>
            </div>
          </div>
          <div className="btn">
            <button className="right-btn" onClick={flipCard}>
              {isFlipped ? "back >>" : "more >>"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
