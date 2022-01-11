// The purpose of this code is to demonstrate the promise handling using async await 
function promiseRunner(data) {
	return new Promise((resolve, reject) => {
		if (data) {
			console.log("Promise Solved");
			resolve("solved");
		} else {
			console.log("Promise reject");
			reject("rejected");
		}
	})
}

async function startResolve() {
	try {
		console.log("Starting....");
		const data = await promiseRunner(true);
		console.log(data);
	} catch (e) {
		console.log(e);
	}
}
startResolve();
// Starting....
// Promise Solved
// solved

async function startReject() {
	try {
		console.log("Starting....");
		const data = await promiseRunner(false);
		console.log("fd" + data);
	} catch (e) {
		console.log("Error : " + e);
	}
}

startReject();
// Starting....
// Promise reject
// Error : rejected
