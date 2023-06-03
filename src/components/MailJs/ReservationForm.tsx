import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { de } from "date-fns/locale";
import "./ReservationForm.css";

const Mail = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
  const form = useRef(document.createElement("form"));

  const sendEmail = (e: { preventDefault: () => void }) => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="app__reservation-formular">
        <TextField
          required
          type="text"
          id="user_name"
          label="Name"
          variant="standard"
          name="user_name"
        />
        <TextField
          required
          type="email"
          id="user_email"
          label="Email"
          variant="standard"
          name="user_email"
        />
        <TextField
          required
          type="number"
          id="user_guest_number"
          label="Anzahl der Personen"
          variant="standard"
          name="user_guest_number"
        />
        <TextField
          required
          type="tel"
          id="user_phone"
          label="Telefon"
          variant="standard"
          name="user_phone"
        />

        <TextareaAutosize
          aria-label="minimum height"
          placeholder="Bemerkung"
          minRows={6}
          name="user_message"
        />

        <input type="submit" value="Send" />
      </div>
    </form>
  );
};
export default Mail;
