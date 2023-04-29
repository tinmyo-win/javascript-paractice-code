async function get3D() {
  while (true) {
    await sleep(1);
    let result = "";
    for (let i = 0; i < 100; i++) {
      let num = parseInt(Math.random() * 1000);
      let secret1 = parseInt(Math.random() * 1000);
      let secret2 = parseInt(Math.random() * 1000);
      let secret3 = parseInt(Math.random() * 1000);
      let secret4 = parseInt(Math.random() * 1000);

      if (num === secret1 && num === secret2 ) {
        num = num > 99 ? num : num > 9 ? "0" + num : "00" + num;
        console.log("This week lucky number is ", num);
        return;
      }
      result += num > 99 ? num : num > 9 ? "0" + num : "00" + num;
    }
    console.log(result);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// setInterval(get3D, 100)
get3D();
