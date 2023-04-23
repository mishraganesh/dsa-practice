//anagram

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let counter = {};

  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for (let items of str2) {
    if (!counter[items]) {
      return false
    } 
      counter[items] -= 1;
    
  }
  return true
}
let str1 = "anagram";
let str2 = "gssromana";

let result = anagram(str1, str2);
console.log(result);

//time cm linear o(n)