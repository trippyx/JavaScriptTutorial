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


