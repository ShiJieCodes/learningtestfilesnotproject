// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve("hey value is true");
  } else {
    reject(`there was an error, value is false`);
  }
});
promise
  .then((lolz) => {
    console.log(lolz);
  })
  .catch((err) => {
    err;
  });

console.log(promise);
