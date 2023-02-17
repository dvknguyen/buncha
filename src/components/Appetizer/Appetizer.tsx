import React, { useRef, useState } from "react";
import appetizerItems from "../../constants/appetizer.json";
import { StoredItem } from "../StoredItem/StoredItem";

export function Appetizer() {
  return (
    <>
      {appetizerItems.map((item, index) => (
        <div key={index}>
          <StoredItem {...item} />
        </div>
      ))}
    </>
  );
}
