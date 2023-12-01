/**
 * This is a example of Promise.all() method.
 */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 1500);
  });
  
  // Using Promise.all to wait for all promises to resolve
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.error('At least one promise rejected:', error);
    });
  /**
   * Result:
   * All promises resolved: ['Promise 1 resolved', 'Promise 2 resolved','Promise 3 resolved']
   * When all the gived promises are resolved then Promise.all() returns a single promise.
   * ! The promises will run parallelly not one by one. 
   */

  /**
   * Another Example with one promise rejection
   */
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 2 rejected');
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 1500);
  });
  
  // Using Promise.all to wait for all promises to resolve
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.error('At least one promise rejected:', error);
    });
    /**
   * Result:
   * At least one promise rejected: Promise 2 rejected
   * When one promise rejected then it will throw an error
   * ! The promises will run parallelly not one by one. 
   */