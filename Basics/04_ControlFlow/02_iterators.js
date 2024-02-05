const arr = ["dasdasda","dasdasd1weew","dwewdasd"]

for(i = 0 ; i < arr.length ; i++){
    if (i != 0){
        console.log(arr[i]);
    }else{
        continue
    }
    
}

let idx = 0
while(idx < arr.length){
    console.log(arr[idx++]);
}
idx = 0
do{
    console.log(arr[idx]);

}while(++idx < arr.length)