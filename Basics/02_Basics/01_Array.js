
const arr = [0,1,2,3,3,4,-2]
const newArr = new Array(0,1234,1,3,100,20,40,2,5)

// console.log(arr);
// console.log(newArr);

// console.log(arr.sort());

// console.log(arr.reverse());

// console.log(arr.push(8));

arr.unshift(20) //To add New Element at start

// console.log(arr);

arr.shift() // To shift elements to left

// console.log(arr);


// console.log(arr.includes(10));
// console.log(arr.indexOf(2));


const newArrs = arr.join()

// console.log(typeof newArrs);

//Slice Splice

//Slice -> Does not manipulate orignal array just return slice excluding the (1,4) means 4th element is not including
//Splice -> Does maipulate orignal array and return the slice including the (1,4) means 4th element is included



console.log("A",newArr);

const myArrNewSlice = newArr.slice(1,4)

console.log(myArrNewSlice);

console.log("B",newArr);


const myArrNewSplice = newArr.splice(1,4)
console.log("C",newArr);
console.log("D",myArrNewSplice);



const newA2 = ["Test","ARR"]
const newA3 = ["Test","ARR"]

const newA4 = newA2.concat(newA3)

console.log(newA4)

const newA5 = [...newA2 , ...newA3]
console.log(newA5);


const newA6 = [1,2,3,4,[9,3,1,3,[10,11]]]

console.log(newA6.flat(Infinity));
console.log(Array.isArray("khjg"));
console.log(Array.from("kullll"));


const vals = 120
const valss = 120
const valsss = 120

console.log(Array.of(vals,valss,valsss));