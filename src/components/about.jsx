import React from "react";

function About() {
  return (
    <section className="about">
      <div className="container flex justify-center gap-20 p-20">
        <div className="about-us">
          <h2 className="text-7xl font-medium text-gray-950 mt-3">About <br />Me</h2>
        </div>
        <div className="about-details text-lg text-gray-800">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
            tristique elit nec malesuada tincidunt. Pellentesque lobortis <br />
            metus quis ipsum mattis, vitae laoreet est posuere. Mauris <br />
            bibendum eros massa, sit amet tempor sem lobortis non. <br />
          </p>
          <div className="about-btn mt-2">
            <input type="submit" value="Hire Me" className="hire bg-gray-950 text-white pt-1 pb-1 pl-3 pr-3 mt-2 rounded" />
            <input type="submit" value="View CV" className="view bg-white outline outline-2 ml-3 rounded pt-1 pb-1 pl-3 pr-3 " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
