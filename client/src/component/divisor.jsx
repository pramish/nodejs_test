import React, { useState, useEffect } from "react";

export const Divisor = () => {
  const [divisorValue, setDivisorValue] = useState();
  const [dataReady, setDataReady] = useState(false);
  const getDivisor = async () => {
    const response = await fetch("http://localhost:9999");
    const data = await response.json();
    if (data.success) {
      setDivisorValue(data);
      setDataReady(true);
      console.log(divisorValue);
      console.log(data.success);
    }
  };
  return (
    <div>
      <h1>Get the Divisor</h1>
      <button onClick={getDivisor}>Get the Divisor Value</button>
      {dataReady ? "Success" : "Fail"}
    </div>
  );
};
