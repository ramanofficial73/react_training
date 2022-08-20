import React from "react";
import { City } from "./City";

export const Depeartment = () => {
  const cars = ["Bareilly", "Chennai", "Pune"];

  return (
    <>
      <h1>This is Departement component</h1>

      <h3>This is list method : ---</h3>
      <ul>
        {cars.map((car) => (
          <li>{car}</li>
        ))}
      </ul>

      <City dprt="It" />
      <City dprt="CSE" />
      <City dprt="ME" />
    </>
  );
};
