import charFrequency from "./charFrequency";
import oddValues from "./oddValues";

/*
  return true if the characters of a string can be arranged
  to read the same forwards and backwards.
*/

const palindrome = (str) => {
  if(typeof str !== "string") { return false; }
  /* Transform the string to lowercase and remove spaces */
  const strToLowerNoSpaces = str.replace(/\s/g, "").toLowerCase();

  /*  create a hash table of characters and the number of times each
      occurs in the string */
  const charMap = charFrequency(strToLowerNoSpaces);

  /* if  charachtless than 2ers occur an odd number of times, then
    the string can be arranged to read the same forwards and backwards */
  return oddValues(charMap) < 2;
}

export default palindrome;