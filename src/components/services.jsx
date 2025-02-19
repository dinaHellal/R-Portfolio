import React from "react";

function Services() {
  return (
    <section className="services text-center bg-gray-300 p-10">
      <div className="container">
        <h2 className="text-6xl font-bold mb-3 text-gray-950">Services</h2>
        <p className="p-3 text-base mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br />
          tristique elit nec malesuada tincidunt. Pellentesque lobortis.
        </p>
        <div className="services-cards flex flex-wrap gap-40 text-center ml-16">
          <div className="services-card bg-gray-950 text-white pt-10 pb-10 pl-14 pr-14  rounded-md  ">
            <img src="/web-development.webp" alt="Web Development" className=" pl-14 pb-3" />
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipiscing elit. Proin <br />
              tristique elit nec
            </p>
          </div>
          <div className="services-card  bg-gray-950 text-white pt-10 pb-10 pl-14 pr-14 rounded-md ">
            <img src="/web-design.webp" alt="Web Design" className=" pl-14 pb-3" />
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit <br />
              amet, consectetur <br />
              adipiscing elit. Proin <br />
              tristique elit nec
            </p>
          </div>
          <div className="services-card  bg-gray-950 text-white pt-10 pb-10 pl-14 pr-14 rounded-md ">
            <img src="/mobile.webp" alt="Mobile Development" className=" pl-14 pb-3" />
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
