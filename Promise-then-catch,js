function promiseRunner(data)P{
  return new Promise((resolve, reject) => {
    if(data){
    console.log("Promise Solved");
    resolve("solved");
    }else{
    console.log("Promise reject");
    reject("rejected");
    }
  })
}
promiseRunner(true).then(res => console.log(res)).catch(err => console.log(err));
// The Output will be 
// Promise Solved
// solved

promiseRunner(false).then(res => console.log(res)).catch(err => console.log(err));
// The Output will be
// Promise reject
// rejected

promiseRunner(true).then(res => console.log(res)).then(ress => console.log(ress)).catch(err => console.log(err));
// The Output will be
// Promise Solved
// solved
// undefined

promiseRunner(true).then(res => res).then(ress => console.log(ress)).catch(err => console.log(err));
// The Output will be
// Promise Solved
// solved

var x = promiseRunner(true).then(res => {return res;}).catch(err => console.log(err));
console.log(x);
// The output will be
// solved
// [object Promise] {...}
