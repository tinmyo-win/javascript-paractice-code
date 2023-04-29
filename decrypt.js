function decrypt() {
    const crypto = require('crypto');

    // The encrypted data and the key and initialization vector used for encryption
    const encryptedData = Buffer.from('e7f27a2d70a7c08f2d74', 'hex');
    const key = Buffer.from('0123456789abcdef0123456789abcdef', 'hex');
    const iv = Buffer.from('abcdef0123456789', 'hex');
    
    // Create a decipher object using the key and initialization vector
    const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    
    // Decrypt the data
    let decryptedData = decipher.update(encryptedData);
    decryptedData = Buffer.concat([decryptedData, decipher.final()]);
    
    console.log(decryptedData.toString('utf8'));
}

decrypt();

