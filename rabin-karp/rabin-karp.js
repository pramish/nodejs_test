// Check if the two strings are equal or not
const areStringsEqual = (string1, string2) => {
  if (string1.toLowerCase() !== string2.toLowerCase()) {
    return false;
  }
  for (let i = 0; i < string1.length; i++) {
    if (string1[i].toLowerCase() !== string2[i].toLowerCase()) {
      return false;
    }
  }
  return true;
};
// Searched Texts is a array
const SearchAndMatchString = async (text, searchedText) => {
  let finalResult = [];
  let ourText;

  for (let j = 0; j < searchedText.length; j++) {
    for (let k = 0; k <= text.length - searchedText[j].length; k++) {
      ourText = text.slice(k, k + searchedText[j].length);
      if (areStringsEqual(ourText, searchedText[j])) {
        finalResult.push({
          subtext: searchedText[j],
          result: k + 1,
        });
      }
    }
  }
  return finalResult;
};

module.exports = SearchAndMatchString;
