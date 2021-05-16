let str = "A JavaScript string stores a series of characters like 'John Doe'"

let str2 = "This method does not change the existing strings, but returns a new string containing the text of the joined strings."

let str3 = "  The trim() method is not supported in Internet Explorer 8 and earlier versions.   "

console.log(str.replace(/John Doe|''/ , "Mohammad Fayaj"));
console.log(str.match(/ing/g));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(15));
console.log(str.split(' , '));
console.log(str.concat(str2));
console.log(str3.trim());

// console.log(str.valueOf());
// console.log(str);
