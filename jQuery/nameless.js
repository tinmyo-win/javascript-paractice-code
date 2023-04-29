var i;
function add(a, b, fn) {
  i = a + b;
  fn();
}
add(24, 13, function () {
  console.log("done adding 24 and 13 into i");
});
