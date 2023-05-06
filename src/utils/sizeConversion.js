/**
 * 文件大小 字节转换单位
 * @param size
 * @returns {string|*}
 */
export const filterSize = size => {
  if (!size) return '';
  if (size < pow1024(1)) return size + ' B';
  if (size < pow1024(2)) return (size / pow1024(1)).toFixed(2) + ' KB';
  if (size < pow1024(3)) return (size / pow1024(2)).toFixed(2) + ' MB';
  if (size < pow1024(4)) return (size / pow1024(3)).toFixed(2) + ' GB';
  return (size / pow1024(4)).toFixed(2) + ' TB';
};

// 求次幂
function pow1024(num) {
  return Math.pow(1024, num);
}

// 下载链接转换名称
export function extractFilename(url) {
  const components = url.split('/');
  let filename = components[components.length - 1];
  filename = filename.replace(/^\d+\s*/, '');
  return filename;
}
