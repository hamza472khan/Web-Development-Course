// javascript promises

let falg = true;
let mypromise = new Promise((resolve,reject)=>{
    if (falg){
        resolve("Data Fetched Successfully");
    }
    else{
        reject("Error: promise rejected");
    }
});

mypromise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise is settled");
});