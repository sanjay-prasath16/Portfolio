import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_syad7ce', 'template_m3zsinr', form.current, {
        publicKey: 's-1MhU0EF4h4hy1ke',
      })
      e.target.reset();
  };
  return (
    <div className="section" id='contactme'>
      <h2 className="contactTitle">Contact Me</h2>
      <section className="sectionSubtitle">Get In Touch</section>
      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <MdOutlineEmail className="contactOptionIcon" />
            <h4>Email</h4>
            <h5>sanjayprasath165@gmail.com</h5>
            <a href="mailto:sanjayprasath165@gmail.com">Send a Message</a>
          </article>
          <article className="contactOption">
            <FaWhatsapp className="contactOptionIcon" />
            <h4>Whatsapp</h4>
            <h5>6381364449</h5>
            <a href="https://api.whatsapp.com/send?phone?6381364449" target="_blank">Send a Message</a>
          </article>
          <article className="contactOption">
            <FaPhoneVolume className="contactOptionIcon" />
            <h4>phone</h4>
            <h5>6381364449</h5>
            <a href="tel:6381364449" target="_blank">Make a Call</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
          <button type="submit" className="button">Send a Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contactme