import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker } from "@material-ui/pickers";
import { de } from "date-fns/locale";
import appetizerItems from "../../constants/appetizer.json";
import { StoredItem } from "../StoredItem/storedItem";

const Appetizer = () => {
  return (
    <>
      {appetizerItems.map((item, index) => (
        <div key={index}></div>
      ))}
    </>
  );
};

export default Appetizer;
