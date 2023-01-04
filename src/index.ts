import baseX from '@vandeurenglenn/base-x'

/**
 * A base64String only contains ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_
 */
type base64String = string

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'

const base64 = baseX(ALPHABET)

export const decode = base64.decode

export const encode = base64.encode

export const isBase64 = (string: base64String): boolean => {
  try {
    decode(string)
    return true;
  } catch (e) {
    return false;
  }
}

export default {
  encode,
  decode,
  isBase64
}
