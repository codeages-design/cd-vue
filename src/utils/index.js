export const getUUID = (prefix, ids = []) => {
  do prefix += ~~(Math.random() * 1000000)
  while (ids.includes(prefix));
  return prefix;
}

export const prefix = 'cd';