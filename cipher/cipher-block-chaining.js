const CryptoJS = require("crypto-js");

// Define the message and the encryption key
const message = "Abc@1234";
const key = "MQ5GAhurtXAnwtFpQwDEZQ==";

// Generate a random initialization vector (IV)
const iv = CryptoJS.lib.WordArray.random(16);

// Encrypt the message using AES 128 with CBC mode
const ciphertext = CryptoJS.AES.encrypt(message, key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,
});

// Get the encrypted message as a base64-encoded string
let encryptedMessage = ciphertext.toString();

// Print the encrypted message and the IV
console.log("Encrypted message: ", encryptedMessage);
console.log("IV: ", iv.toString());

// Convert the IV from a string to a WordArray
const ivWordArray = CryptoJS.enc.Hex.parse(iv);

// Decrypt the message using AES 128 with CBC mode
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key, {
  iv: ivWordArray,
  mode: CryptoJS.mode.CBC,
});

// Convert the decrypted message from a WordArray to a string
const decryptedText = decryptedMessage.toString(CryptoJS.enc.Utf8);

// Print the decrypted message
console.log("Decrypted message: ", decryptedText);
