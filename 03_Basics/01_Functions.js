
function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

const result = addTwoNumber(3,"4")

console.log(result); //Undefined becuase func has not returned anything


function mulTwoNumbers(number1 = 20,number2){
    return number1*number2
}

const result1 = mulTwoNumbers(20)
console.log(result1);


function varidicParameter(...vals){
    return vals
}


console.log(varidicParameter(10,20,"eesadas"))