import React from "react";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
          tristique elit nec malesuada tincidunt. Pellentesque lobortis.
        </p>
        <div className="services-cards">
          <div className="services-card">
            <img src="/web-development.webp" alt="Web Development" />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipiscing elit. Proin <br />
              tristique elit nec
            </p>
          </div>
          <div className="services-card">
            <img src="/web-design.webp" alt="Web Design" />
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipiscing elit. Proin <br />
              tristique elit nec
            </p>
          </div>
          <div className="services-card">
            <img src="/mobile.webp" alt="Mobile Development" />
            <h3>Mobile Development</h3>
            <p>
              Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipiscing elit. Proin <br />
              tristique elit nec
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
