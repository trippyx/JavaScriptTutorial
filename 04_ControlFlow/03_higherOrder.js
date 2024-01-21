
//For of == forEach

const vals = ["dasda","dsdsad","1dasd"]

for (const num of vals) {
    console.log(num);
}


//Maps

const maps = new Map() //Order will be preserved

maps.set("IND","India")
maps.set("US","USA")
maps.set("JP","Japan")

for (const iterator of maps.entries()) {
    console.log(iterator[0],iterator[1]);
}

//or

for(const [key,value] of maps){
    console.log(key,value);
}


//For in loop return keys and for of return values

const obj = {

    vals:"dasda",
    salary:"dsadsdsa"

}
for (const key in obj) {
    console.log(`${key} and values is ${obj[key]}`);
}