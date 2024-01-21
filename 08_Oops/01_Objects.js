function yesss(){
    console.log("Functionsssss");
    
}

yesss.prototype.valss = 10     
yesss.prototype.newFuncPrintMe = function(){
    console.log(this.valss);
}


const fux = yesss() 
// fux.newFuncPrintMe() //it will not work because contructor of the function doesnot have new keyword

const fuxx = new yesss() 
fuxx.newFuncPrintMe()


/*

When we use new keyboard it will be linked to Prototype propety of constuctor function it means it has access to properties and fucntion defined inside constructor protoype 


*/
