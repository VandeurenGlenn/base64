/**
 * A base64String only contains ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_
 */
type base64String = string;
export declare const decode: (source: string) => Uint8Array;
export declare const encode: (source: Uint8Array | ArrayBuffer) => string;
export declare const isBase64: (string: base64String) => boolean;
declare const _default: {
    encode: (source: Uint8Array | ArrayBuffer) => string;
    decode: (source: string) => Uint8Array;
    isBase64: (string: string) => boolean;
};
export default _default;
