/* 
  return the number of keys in an object that have odd values. e.g
  {
    t: 2,
    o: 2,
    p: 2,
    s: 1
  }
  returns 1
*/
const oddValues = (obj) => {
  return Object.keys(obj).reduce((total, i) => {
    obj[i] % 2 === 1 && total++;
    return total;
  }, 0);
}

export default oddValues;
