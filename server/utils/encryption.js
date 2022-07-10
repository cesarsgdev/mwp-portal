const crypto = require("crypto");
const algo = "aes-256-cbc";
require("dotenv").config();
const key = process.env.ENCRYPTION_KEY;

const encrypt = (password) => {
  try {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algo, key, iv);
    let encryptedPassword = cipher.update(password, "utf-8", "hex");
    encryptedPassword += cipher.final("hex");

    const base64data = Buffer.from(iv, "binary").toString("base64");

    return { encryptedPassword, base64data };
  } catch (e) {
    console.log(e);
  }
};

const decrypt = (base64, password) => {
  try {
    const original = Buffer.from(base64, "base64");
    const decipher = crypto.createDecipheriv(algo, key, original);
    let decrypted = decipher.update(password, "hex", "utf-8");
    decrypted += decipher.final("utf-8");

    return decrypted;
  } catch (e) {
    console.log(e);
  }
};

exports.encrypt = encrypt;
exports.decrypt = decrypt;
