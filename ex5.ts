function reverseStringFor(string: string): string {
  let reverseString = "";
  for (let char of string) {
    reverseString = char + reverseString;
  }

  return reverseString;
}
console.log(reverseStringFor('valeu natalina'));


function reverseStringWhile(string: string): string {
  let reverseString = "";
  let i = string.length - 1;
  while (i >= 0) {
    reverseString += string[i];
    i--;
  }

  return reverseString;
}
console.log(reverseStringWhile('valeu natalina'));


// Método próprio para reverter strings
function reveseStringArray(string: string): string {
  return string.split('').reverse().join('');
}
console.log(reveseStringArray('valeu natalina'));
