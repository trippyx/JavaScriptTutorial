//How to inject Functions and properties in Protoypes


const nav = function(value){
    console.log(`${value.showLength()} Baby`);
}

const proton = function(value){
    
    console.log(`${value} HAHAHAHHA`);
}



Function.prototype.showLength = function(){
    console.log("HIII GYUSSS");
}

const str = "dasdadasda"

String.prototype.printSelf = () => {
    console.log("Yes i am string");
}

nav.showLength()
// nav.printSelf() //will not work because  printSelf only aval in string

str.printSelf()
// str.showLength() //will not work because  showLength only func in string

Object.prototype.InsideEveryting = () => {
    console.log("Everying");
}

nav.InsideEveryting()
str.InsideEveryting()