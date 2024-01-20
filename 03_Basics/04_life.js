//Immedialty invoked function expression (IIFE)


 //Function invoke without calling 
( //Names iife 
    function chai(){
        console.log("Connected");
    }
)();

//Unamed iffy
((name) => {
    console.log(`Connected2 ${name}`);
})("dasdasd");