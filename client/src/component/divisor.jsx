import React, { useState, useEffect } from "react";
import GraphQlClient from "../graphql/api";
import { getDivisor } from "../graphql/divisor";
import "./divisor.css";
import { SearchText } from "./searchText";
export const Divisor = () => {
  const [divisorValue, setDivisorValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    async function fetchDivisor() {
      GraphQlClient.request(getDivisor)
        .then((data) => {
          setDivisorValue(data.divisor);
          setLoading(false);
          setError(false);
          setErr("");
        })
        .catch((err) => {
          setDivisorValue([]);
          setLoading(true);
          setError(true);
          setErr("Failed to load the data");
        });
    }
    fetchDivisor();
    setInterval(() => {
      fetchDivisor();
    }, 3000);
  }, []);

  const displayData = () => (
    <table>
      <tbody>
        <tr>
          <th>Number</th>
          <th>String</th>
        </tr>
        {divisorValue.map((eachDivisor, index) => (
          <tr key={`Divisor- ${index}`}>
            <td>{index}</td>
            <td>{eachDivisor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <SearchText />
      {error ? (
        <p>{err}</p>
      ) : (
        <div>
          <h1>Divisor And the String</h1>
          {loading ? "Loading..." : displayData()}
        </div>
      )}
    </div>
  );
};
