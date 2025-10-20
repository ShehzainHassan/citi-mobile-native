import CryptoJS from 'crypto-js';
import { createTransform } from 'redux-persist';

let encryptionKey: string = 'DEV_KEY';

export const encryptTransform = createTransform(
  (inboundState, key) => {
    if ((key === 'auth' || key === 'user') && encryptionKey) {
      return CryptoJS.AES.encrypt(
        JSON.stringify(inboundState),
        encryptionKey,
      ).toString();
    }
    return inboundState;
  },
  (outboundState, key) => {
    if ((key === 'auth' || key === 'user') && encryptionKey) {
      try {
        const decrypted = CryptoJS.AES.decrypt(
          outboundState as string,
          encryptionKey,
        ).toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted);
      } catch (error) {
        console.warn(`Failed to decrypt ${key} slice:`, error);
        return null;
      }
    }
    return outboundState;
  },
);
