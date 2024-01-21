const arr = ["ddsadas","dasdasassadasd"]


arr.forEach((vals) =>  {
    console.log(vals);
})


arr.forEach(vals => {
    console.log(vals);
})


arr.forEach((nums,idx,arr) => {
    console.log(`${idx} with vals ${nums}`);
})



const vals = [1,2,3,4,5,5,5,646,5,65,7567,56,7,58,678,678]

const finalArr = vals.filter((num) => {
    return num > 5
})

console.log(finalArr);


const newArr = [1,2,3,4]

const mapsOp = newArr.map( (num) =>{
    return num + 10
})

//We can also chain

const chainMap = newArr.map((num) => {
    return num * 10
}).map((vals) => {
    return vals + 2
})
.filter((newVal) => {
    return newVal > 40
})


const sums = newArr.reduce((prev,currVal) => {
    return prev + currVal
},0)

console.log(sums);
console.log(chainMap);