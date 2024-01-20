// const obj = new Object() // Singleton Object

const tinderUser = {} // Non Singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

console.log(tinderUser);


const regularUser = {
    email:"basican.kuldeep@gmail.com",
    fullName:{
        userFullName:{
            firstName:"kULDEEP",
            lastName:"Singh",
        }
    }
}

// console.log(regularUser);


const obj1 = {
    1:"a",
    3:"b",
}

const obj2 = {
    2:"c",
    4:"d"
}


// const obj3 = Object.assign({},obj1,obj2)  //First one is target and other are source so thats why empty json is given

const obj3 = {...obj1 , ...obj2}

console.log(obj3);

console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))

console.log(regularUser.hasOwnProperty('fullName'))


const course = {
    courseName:"KLLL",
    coursePrice:999,
    courseInstructor:"Nav"
}

 
const {courseInstructor : instuct} = course //We are extracting courseInstructor from course object and renaming it into instruct

console.log(instuct);
