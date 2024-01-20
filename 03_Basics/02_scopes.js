let a = 2
const b = 3
var c = 4

if(true){
    let a = 40
    const b = 30
    var c = 90 //It directly changes the global c values irrespective of scope so avoid using var
}


console.log(a);
console.log(b);
console.log(c);


console.log(names(10))
function names(number){
    return number
}


const valse = function(nuber){
    return nuber
}

console.log(valse(10))