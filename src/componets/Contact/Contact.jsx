import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_b4pw8m9",
        "template_x5p6tp5",
        form.current,
        "PixWDqYCtqOAl9BiA"
      );
      console.log(result.text);
      toast.success("Message Sent!");
    } catch (error) {
      console.log(error.text);
      toast.error("Message Not Sent!");
    }
  };

  return (
    <div className="contact-form" id="contact">
      <div className="c-left">
        <span>Get In Touch</span>
        <span>Send A Message</span>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="text_input"
            name="user_name"
            placeholder="Name"
          />
          <input
            type="email"
            className="text_input"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="text_input"
            cols="30"
            rows="10"
            placeholder="Message"
          />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
