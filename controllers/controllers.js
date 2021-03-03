const fetch = require("node-fetch");
exports.getDivisor = async (request, response) => {
  let divisor = [];
  let success = false;
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
    for (var i = rangeData.lower + 1; i <= rangeData.upper; i++) {
      if (i % 3 === 0) {
        divisor.push({
          [i]: fiveDivisor,
        });
      }
      if (i % 5 === 0) {
        divisor = [
          ...divisor,
          {
            [i]: fiveDivisor,
          },
        ];
      }
      if (i % 3 === 0 && i % 5 === 0) {
        divisor = [
          ...divisor,
          {
            [i]: threeDivisor + fiveDivisor,
          },
        ];
      }
    }
    success = true;
    return response.json({ divisor, success });
    // return divisor;
  } catch (error) {
    throw new Error(error);
  }
};
