export const getUUID = (prefix, ids = []) => {
  do prefix += ~~(Math.random() * 1000000)
  while (ids.includes(prefix));
  return prefix;
}

export const prefix = 'cd';

export const isArray = (arr) => {
  return Object.prototype.toString.call(arr) == '[object Array]';
}

export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) == '[object Object]';
};
