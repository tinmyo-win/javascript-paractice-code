function add1000() {
  let result = 0;
  for (let i = 1; i <= 1000; i++) {
    result += i;
  }
  return result;
}

function add1000later() {
  return new Promise((resolve, reject) => {
    let result = add1000()
    if(result) {
      resolve(result)
    } else reject()
  })
}


console.log("first process");
add1000later()
  .then(result => {
    return "the result is finally " + result
  })
  .then(result => console.log(result))
  .catch(() => console.log("error"))
console.log("third");
console.log("third");

