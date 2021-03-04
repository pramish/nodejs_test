import React, { useState } from "react";
import "./searchText.css";
import GraphQlClient from "../graphql/api";
import { getMatchedText } from "../graphql/searchTexr";

export const SearchText = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  const [err, setErr] = useState("");
  const handleClick = () => {
    GraphQlClient.request(getMatchedText)
      .then((data) => {
        setResult(data.searchText.result);
        setError(false);
        setErr("");
        setTimeout(() => {
          setResult("");
        }, 3000);
      })
      .catch((err) => {
        setError(true);
        setErr("Failed to search the Text");
      });
  };
  return (
    <div>
      <button className="searchText" onClick={handleClick}>
        Hit Search the Text API
      </button>
      {error ? <p>{err}</p> : result}
    </div>
  );
};
