/**
 * @description: 拼接URL，返回完整URL
 * @param {string} base BASE 路径
 * @param {array} paths 待拼接的路径
 * @return {string}
 */
export const joinUrl = (base: string, ...paths: string[]): string => {
  const cleanPaths: string[] = paths.map(path => path?.replace(/^\/+|\/+$/g, ''));
  const joinedPath: string = cleanPaths.join('/');
  return `${base.replace(/\/+$/, '')}/${joinedPath}`;
};
/**
 * @description: BASE64转文本
 * @param {string} base64Text
 */
export const base64ToText = (base64Text: string): string => {
  if (!base64Text) return '';
  const binaryString = atob(base64Text);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  const utf8String = new TextDecoder().decode(bytes);
  return utf8String;
};
/**
 * @description: 文本转BASE64
 * @param {string} text
 */
export const textToBase64 = (text: string): string => {
  if (!text) return '';
  const utf8Bytes = encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (_, p1) =>
    String.fromCharCode(parseInt(p1, 16)),
  );
  return btoa(utf8Bytes);
};
