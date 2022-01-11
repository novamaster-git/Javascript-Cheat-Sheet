// The purpose of this code is to demonstrate the promise handling using async await 
function promiseRunner(data){
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

async function startResolve(){
  try{
  console.log("Starting....");
  const data = await promiseRunner(true);
  return {"error" : false, result: data};
  }
  catch(e){
    return {"error" : true, result: e};
  }
}
startResolve().then(result => console.log(result)).catch(err => console.log(err));

// "Starting...."
// "Promise Solved"
// [object Object] {
//   error: false,
//   result: "solved"
// }
// Here only then is working the catch will not work

async function startReject(){
  try{
  console.log("Starting....");
  const data = await promiseRunner(false);
  return {"error" : false, result: data};
  }
  catch(e){
    return {"error" : true, result: e};
  }
}

startReject().then(result => console.log(result)).catch(err => console.log("Error : " + err));
// "Starting...."
// "Promise reject"
// [object Object] {
//   error: true,
//   result: "rejected"
// }
// Here the "then" is only working the catch is not working

async function startRejectionWithoutTryCatch(){
  console.log("Starting.....");
  const data = await promiseRunner(false);
  return data;
}
startRejectionWithoutTryCatch().then().catch(err => console.log("Error : " + err));
// This way you can use then catch on async function
// "Starting....."
// "Promise reject"
// "Error : rejected"

// NOTE: if you use try catch inside a async function then the then catch will not work on that function
