import CryptoJS from 'crypto-js';

const SECRET_KEY = 'iloveyouilona';

export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (encryptedData: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    throw new Error('Invalid password or corrupted data');
  }
};

export const hashData = (data: string): string => {
  return CryptoJS.SHA256(data).toString();
}; 