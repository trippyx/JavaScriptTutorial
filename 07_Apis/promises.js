// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=> {
//         const val = Math.random() * 10
//         console.log(val);
//         if( val > 5){
//             console.log('Async task complete');
//             resolve("hdhashdas")
//         }else{
//             reject(undefined)
//         }
        
//     },2000)
// }).then((val) => {
//     console.log(`Promise full flied with ${val}`);
// }).catch((val) => {
//     console.log(`Promise not flied with ${val}`);
// })


const promise2 = new Promise((resolve,reject)=>{
    
        const val = Math.random() * 10
        console.log(val);

        if( val > 5){
            console.log('Async task complete');
            resolve("hdhashdas")
        }else{
            reject("Rejected")
        }
        
})

async function consumeFive(){
    try{
        const response = await promise2
        console.log(response);
    }catch(error){
        console.log(error);
    }
   
}

consumeFive()



async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
         const finalResponse = await response.json()
         console.log(finalResponse);
    }catch(error){

    }
}

// getAllUsers()


//Another way

fetch("https://jsonplaceholder.typicode.com/posts")
.then((value)=>{
    return value.json()
})
.then((val) => {
    console.log(val);
})
.catch((reject) => {
    console.log(reject);
})