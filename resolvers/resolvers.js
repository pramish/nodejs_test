const fetch = require("node-fetch");
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
    let textSearched;
    let subTextsValue = [];
    try {
      //   const searchText = await fetch(process.env.TEXT_TO_SEARCH);
      //   const { text } = await searchText.json();
      //     const subText = await fetch(process.env.SUB_TEXTS);
      //     const subTexts = await subText.json();
      const letter =
        "Peter told me (actually he slurrred) that peter the pickle piper piped a pitted pickle before he petered out. Phew!";
      const subString = ["Peter", "peter", "Pick", "Pi", "Z"];
      let hello = letter.includes("");
      console.log(hello);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
};
