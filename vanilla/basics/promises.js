// Resolved - Promise has been completed.
// Rejected - Unable to completed promise.

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Success!');
  } else {
    reject('Failed!');
  }
});

// as a is equal to 2 this promise above will always resolve meaning the result of this promise (p) === Success

// Anything inside of a .then function call is going to run in the event of a resolve.
// Catch is going to be called if the promise is rejected.
p.then((message) => {
  console.log(`This is what happens when the promise resolves: ${message}`);
}).catch((message) => {
  console.log(`This is caught when the promise is rejected: ${message}`);
});

// All 3 of the below promises are only programmed to resolve.

const recordVideoOne = newPromise((resolve, reject) => {
  resolve('Video 1 recorded')
});

const recordVideoTwo = newPromise((resolve, reject) => {
  resolve('Video 2 recorded')
});

const recordVideoThree = newPromise((resolve, reject) => {
  resolve('Video 3 recorded')
});

// Promise.all runs all promises in parallel without having to wait for each one to resolve.
// Promise.all takes an array or promises and returns an array of all resolved values.

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {
  console.log(messages)
});