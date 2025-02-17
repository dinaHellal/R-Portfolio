import React from "react";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-us">
          <h2>
            About <br />
            Me
          </h2>
        </div>
        <div className="about-details">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
            tristique elit nec malesuada tincidunt. Pellentesque lobortis <br />
            metus quis ipsum mattis, vitae laoreet est posuere. Mauris <br />
            bibendum eros massa, sit amet tempor sem lobortis non. <br />
          </p>
          <div className="about-btn">
            <input type="submit" value="Hire Me" className="hire" />
            <input type="submit" value="View CV" className="view" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
