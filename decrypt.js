const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);
  
  const iv = Buffer.alloc(16);
  input.read(iv);
  
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  input.pipe(decipher).pipe(output);
  
  output.on('finish', () => {
    console.log('✅ Decryption complete! Output:', outputFile);
  });
  
  output.on('error', (err) => {
    console.error('❌ Error:', err.message);
  });
};

decryptFile("character.enc", "character.glb", "Character3D#@");
// '@ | Out-File -FilePath decrypt.js -Encoding utf8