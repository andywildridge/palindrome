/* 
  return an object containing key/value pairs of the letters in a string
  equal to the number of times they occur in the string. e.g "topspot" returns
  {
    t: 2,
    o: 2,
    p: 2,
    s: 1
  }
*/
const charFrequency = (str) => {
  return str.split("").reduce((obj, letter) => {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
    return obj;
  }, {});
};

export default charFrequency;