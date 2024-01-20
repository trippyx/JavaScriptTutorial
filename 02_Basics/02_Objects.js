//Singleton

//Object.create

const symb = Symbol("key1")

const JSUser = {
    name:"Kuldeep",
    [symb]:"Vals",
    loves:"Nav",
    "baby Love":"YAYAYAY" //We cannot use this value as .dot Syntax
}

JSUser.name = "KS"
// Object.freeze(JSUser) //Use to make object as immutable

JSUser.name = "dasdasdasda"

JSUser.greetings = function(){
    console.log("Inside func");
}

JSUser.greetings2 = function(){
    console.log(`Hello Guys ${this.name}`);
}

console.log(JSUser.greetings())
console.log(JSUser.greetings2());