
function newFunc(userName){
    console.log("Inside New Func");
    this.userName = userName
}

function manipulateVals(name,rollNo,userName){
    newFunc.call(this,userName)
    this.name = name
    this.rollNo = rollNo
  
}

const vals =  new manipulateVals("ks","12121","xx@yui")
console.log(vals);