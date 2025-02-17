import React from "react";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-section">
          <div className="form">
            <h3>Send Me Message</h3>
            <form method="post">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Name" /> <br />
              <textarea id="message" placeholder="Message"></textarea> <br />
              <input type="submit" value="Send" className="submit-btn" />
            </form>
          </div>
          <div className="contact-info">
            <h3>Social Media</h3>
            <div className="icons">
              <div className="icon">
                <img src="/whatsapp.webp" alt="whatsapp" />
                <p>01004466279</p>
              </div>
              <div className="icon">
                <img src="/instagram.webp" alt="instagram" />
                <p>Ridho.Satriawan</p>
              </div>
              <div className="icon">
                <img src="/facebook.webp" alt="facebook" />
                <p>Ridho Satriawan</p>
              </div>
              <div className="icon">
                <img src="/linkedin.webp" alt="linkedin" />
                <p>Ridho Satriawan</p>
              </div>
              <div className="icon">
                <img src="/github.webp" alt="github" />
                <p>RidhoSatriawan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
