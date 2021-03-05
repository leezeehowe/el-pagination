function getParamFromUrl(key, searchUrl) {
  if(!searchUrl) {
    return '';
  }
  const reg = new RegExp(`${key}=[^&]*&{0,1}`);
  let res = searchUrl.match(reg);
  if(!res || res.length === 0) {
    return '';
  }
  res = res[0];
  // 正则可能会匹配出来 k=v& 或者 k=v
  res = res.endsWith('&', res.length) ? res.substr(0, res.length - 1) : res;
  return res.substring(res.indexOf('=') + 1);
}

function replaceParamValue(key, value, targetStr) {
  targetStr = targetStr
  .replace(new RegExp(/^\??/), '')
  .replace(new RegExp(`${key}=[^&]&?`), '')
  .replace(new RegExp(/&$/), '');
  if(targetStr) {
    return [targetStr, `${key}=${value}`].join('&');
  }
  else {
    return `${key}=${value}`;
  }
}

console.log(replaceParamValue('page', 2, '?age=16&page=1&name=elvis'));