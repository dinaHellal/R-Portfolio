import React from "react";

function Contact() {
  return (
    <section className="contact text-center p-10">
      <div className="container">
        <h2 className="text-6xl p-10 font-bold text-gray-900  ">Contact</h2>
        <div className="contact-section flex justify-center flex-wrap gap-20">
          <div className="form">
            <h3 className="text-2xl text-gray-800 mr-44 pb-3">Send Me Message</h3>
            <form method="post">
              <input type="email" placeholder="Email" className="bg-gray-950 mr-2 rounded-lg p-1" />
              <input type="text" placeholder="Name" className="bg-gray-950 rounded-lg p-1"/> <br />
              <textarea id="message" placeholder="Message"  className="bg-gray-950 rounded-lg p-1 h-24 pr-56  m-2"></textarea> <br />
              <input type="submit" value="Send" className="submit-btn  bg-white outline outline-1 mr-80 rounded pt-1 pb-1 pl-3 pr-3" />
            </form>
          </div>
          <div className="contact-info">
            <h3 className="text-2xl font-bold text-gray-900 mr-5 pb-2">Social Media</h3>
            <div className="icons ">
              <div className="icon flex pb-3  ">
                <img src="/whatsapp.webp" alt="whatsapp" className="mr-3 "/>
                <p  className="text-lg"  >01004466279</p>
              </div>
              <div className="icon flex pb-3 ">
                <img src="/instagram.webp" alt="instagram" className="mr-3 " />
                <p  className="text-lg" >Ridho.Satriawan</p>
              </div>
              <div className="icon flex pb-3 ">
                <img src="/facebook.webp" alt="facebook" className="mr-3 "/>
                <p  className="text-lg">Ridho Satriawan</p>
              </div>
              <div className="icon flex pb-3 ">
                <img src="/linkedin.webp" alt="linkedin" className="mr-3 "/>
                <p  className="text-lg">Ridho Satriawan</p>
              </div>
              <div className="icon flex pb-3 ">
                <img src="/github.webp" alt="github" className="mr-3 "/>
                <p className="text-lg ">RidhoSatriawan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
