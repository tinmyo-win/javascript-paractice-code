const { encryptCaesar, decryptCaesar } = require("./CipherCeaser");

function testEncryptCeaser() {
  plainText = "Hello It is important keep it secret";

  const encryptText = encryptCaesar(plainText, 15);
  if (encryptText !== plainText) {
    console.log(encryptText);
    console.log("\x1b[32m%s\x1b[0m" , "Test passed!!!");
  } else {
    console.log("Test failed");
  }
}

function testDecryptCeaser() {
  plainText = "Hello It is important keep it secret";
  salt = 15;
  const encryptText = encryptCaesar(plainText, salt);
  const decryptText = decryptCaesar(encryptText, salt);
  if (decryptText === plainText) {
    console.log("\x1b[32m%s\x1b[0m", decryptText + " == " + plainText);
    console.log("\x1b[32m%s\x1b[0m", "Test passed!!!");
  } else {
    console.log("\x1b[31m%s\x1b[0m", "Test failed");
    console.log("\x1b[31m%s\x1b[0m", decryptText + " == " + plainText);
  }
}

testEncryptCeaser();
testDecryptCeaser();