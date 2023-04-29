// Encryption function
function encryptCaesar(plaintext, key) {
  var ciphertext = "";
  for (var i = 0; i < plaintext.length; i++) {
    var char = plaintext.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      ciphertext += String.fromCharCode((char - 65 + key) % 26 + 65);
    } else if (char >= 97 && char <= 122) {
      ciphertext += String.fromCharCode((char - 97 + key) % 26 + 97);
    } else {
      ciphertext += plaintext.charAt(i);
    }
  }
  return ciphertext;
}

// Decryption function
function decryptCaesar(ciphertext, key) {
  var plaintext = "";
  for (var i = 0; i < ciphertext.length; i++) {
    var char = ciphertext.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      plaintext += String.fromCharCode((char - 65 - key + 26) % 26 + 65);
    } else if (char >= 97 && char <= 122) {
      plaintext += String.fromCharCode((char - 97 - key + 26) % 26 + 97);
    } else {
      plaintext += ciphertext.charAt(i);
    }
  }
  return plaintext;
}

module.exports = {
  encryptCaesar,
  decryptCaesar
}
