import React, { useState, useEffect } from "react";

export const Divisor = () => {
  const [divisorValue, setDivisorValue] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const getDivisor = async () => {
    const response = await fetch("http://localhost:9999");
    const data = await response.json();
    if (data.success) {
      setDivisorValue(data.divisor);
      setDataReady(true);
      console.log(divisorValue);
    } else {
      setDivisorValue([]);
      setDataReady(false);
    }
  };
  return (
    <div>
      <h1>Get the Divisor</h1>
      <button onClick={getDivisor}>Get the Divisor Value</button>
      {dataReady
        ? divisorValue.map((eac) => (
            <p key={Object.keys(eac)}>
              {Object.keys(eac)}:{Object.values(eac)}
            </p>
          ))
        : "Failed to load data"}
    </div>
  );
};
