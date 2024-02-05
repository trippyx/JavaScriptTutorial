
const user = {
    userName:"Kuldeep",
    price:"1991",
    welcomeFuncion:function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

user.welcomeFuncion()
user.userName = "Test"
user.welcomeFuncion()

console.log(this);



function chai(){
    let userName = "DASDADAS"
    console.log(this);
    console.log(this.userName); // We cannot use this inside the function when we are in node env 
}

chai()




const firsArr = (number) => {
    return number
}

console.log("sasadasd");


const implicitReturn = (num,num2) => num*num2

console.log(implicitReturn(1,2));


const retObj = () => ({vals:"Hey"})

console.log(retObj());