import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zdpscz9",
        "template_41w4rcd",
        form.current,
        "o71sguqZ8l0TEx650"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current[3]);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <label>Phone</label>
      <input type="text" name="user_phone" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Mail;
