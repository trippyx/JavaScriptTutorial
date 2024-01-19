let score = "33b"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN cause score contain int and string so javascipt trying to convet into number but fails
 
/*
String to Integer Conversion
"33" => 33
"33abc" => NaN
"true" => 1
"fasle" => 1

String to Bool

"" => false
"dasdas" => True

*/

// ************ Operations **********

let value = 3
let negValue = -value

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.1og(2%3)

let str1 = "Kuldeep"
let str2 = " Singh"
let str3 = str1 + str2
console.log(str3);

console.log(3 + "4");
console.log("3" + 4);
console.log("3" + "4");
console.log(3 + "4" + "4");
console.log(3 + 2 +"4");
console.log(+true);
console.log(+"");

//Comparison

//Equlity check and comparision work differently in js so >= convet null to 0 and other will not

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

//Strict type checking

console.log(undefined === 0);