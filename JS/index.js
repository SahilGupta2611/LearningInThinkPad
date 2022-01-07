const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("roti le aao");
  }, 5000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("nasta le aao");
  }, 1000);
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("aata le aao");
  }, 10000);
});

myPromise
  .then((value) => {
    console.log(value);
    return myPromise2;
  })
  .then((value) => {
    console.log(value);
    return myPromise3;
  })
  .then((value) => {
    console.log(value);
  });

// const fetch = new Promise(function (resolve, reject) {
//   //kachu kaam krta
//   // data mangwa lao

//   resolve(response);
// });

function json() {
  //kachu kaaam kru yha pe

  const promise2 = new Promise(function (resolve, reject) {});

  return promise2;
}

const pr = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data));

  // console.log(pr);
//   .then(json => console.log(json))
