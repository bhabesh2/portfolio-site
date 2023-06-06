import React from "react";

function Skill() {

  return (
    <>
      <section className="skill-sec bg-dark container-fluid">
        <div className="skill-title">
          <h2 className="text-center text-white py-5">My Skills</h2>
        </div>
        <div class="container parent py-5">
          <div class="card" data-card="HTML">
            card1
          </div>
          <div class="card" data-card="CSS">
            card2
          </div>
          <div class="card" data-card="JavaScript">
            card3
          </div>
          <div class="card" data-card="BootStrap">
            card4
          </div>
          <div class="card" data-card="React.js">
            card5
          </div>
          <div class="card" data-card="Node.js">
            card6
          </div>
          <div class="card" data-card="mySQL">
            card7
          </div>
          <div class="card" data-card="MongoDB">
            card7
          </div>
          <div class="card" data-card="ExtraCurriculum">
            card7
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
