const { response } = require("express");
const fetch = require("node-fetch");
const SearchAndMatchString = require("../rabin-karp/rabin-karp");
module.exports = resolvers = {
  divisor: async () => {
    let divisor = [];
    let threeDivisor;
    let fiveDivisor;
    try {
      const rangeRes = await fetch(process.env.RANGE_ENDPOINT);
      const rangeData = await rangeRes.json();
      const divisorRes = await fetch(process.env.DIVISOR_ENDPOINT);
      const divisorData = await divisorRes.json();
      divisorData.outputDetails.forEach((eachDivisor) => {
        if (eachDivisor.divisor === 3) threeDivisor = eachDivisor.output;
        if (eachDivisor.divisor === 5) fiveDivisor = eachDivisor.output;
      });
      if (
        typeof rangeData.lower !== "number" ||
        typeof rangeData.upper !== "number"
      ) {
        throw new Error("Couldn't get the Upper and Lower range of the number");
      }
      for (let i = rangeData.lower; i <= rangeData.upper; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          divisor.push(threeDivisor + fiveDivisor);
        } else if (i % 3 === 0) {
          divisor.push(threeDivisor);
        } else if (i % 5 === 0) {
          divisor.push(fiveDivisor);
        } else {
          divisor.push("");
        }
      }
      return divisor;
    } catch (error) {
      throw new Error(error);
    }
  },
  searchText: async () => {
    let result = [];
    let success = false;
    let message;
    let finalResult;
    try {
      const searchText = await fetch(process.env.TEXT_TO_SEARCH);
      const text = await searchText.json();
      const subText = await fetch(process.env.SUB_TEXTS);
      const subTexts = await subText.json();
      if (
        text.text === "Internal server error" ||
        subTexts.message === "Internal server error"
      ) {
        success = false;
        message = "Server Error";
      } else {
        success = true;
        message = "Data Found";
        result = await SearchAndMatchString(text.text, subTexts.subTexts);
        let dataToSend = {
          candidate: "Pramish Luitel",
          text: text.text,
          results: result,
        };
        const dataSentJSON = await fetch(process.env.SUBMIT_RESULT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });
        finalResult = await dataSentJSON.json();
      }
      console.log(finalResult);
      return finalResult;
    } catch (error) {
      throw new Error(error);
    }
  },
};
