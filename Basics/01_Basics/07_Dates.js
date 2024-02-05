const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


const specificDate = new Date(2034,4,23,12,45,30)

console.log(specificDate.toDateString());


const timeStamp = Date.now()
console.log(timeStamp);
console.log(specificDate.getTime());
console.log(timeStamp == specificDate.getTime());