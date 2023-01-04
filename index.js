import baseX from '@vandeurenglenn/base-x';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const base64 = baseX(ALPHABET);
const decode = base64.decode;
const encode = base64.encode;
const isBase64 = (string) => {
    try {
        decode(string);
        return true;
    }
    catch (e) {
        return false;
    }
};
var index = {
    encode,
    decode,
    isBase64
};

export { decode, index as default, encode, isBase64 };
