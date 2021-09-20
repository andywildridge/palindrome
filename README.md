cd palindrome, npm install, npm run test

Iterating through all permutations of a string has a time complexity of O(n!) which would be innefficient for long strings. I considered ways to reduce the complexity by grouping repeating characters and realised that characters which occur an even number of times in the string could be split to 'bookend' the string and therefore be discarded from the calculation. If more than one character occurs an odd number of times in the string it would be impossible to arrange the characters to read the same forwards and backwards.

By creating a hash table of unique characters with the value being a count of the number of times each occurs in the string we can therefore deduce whether the string can be arranged to read the same forwards and backwards. 

