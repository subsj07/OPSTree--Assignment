import React, { useState } from "react";
import CarTable from "./CarTable";

export default function App() {
  const [carName, setCarName] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carType, setCarType] = useState("");
  return (
    <>
      <div>
        <label>Car Name:</label>
        <input
          type="text"
          name="FN"
          size="5"
          onChange={(e) => {
            setCarName(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <label>Car Brand:</label>
        <input
          type="text"
          name="FN"
          size="5"
          onChange={(e) => {
            setCarBrand(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <label>Car Type:</label>
        <input
          type="text"
          name="FN"
          size="5"
          onChange={(e) => {
            setCarType(e.target.value);
          }}
        />
      </div>
      <br />
      <br />
      <CarTable carName={carName} carBrand={carBrand} carType={carType} />
    </>
  );
}
