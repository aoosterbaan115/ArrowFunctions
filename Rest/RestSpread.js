// filterOutOdds
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


// findMin
const findMin = (...nums) => Math.min(...nums);


// mergeObjects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};


// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => {
  const doubled = args.map(num => num * 2);
  return [...arr, ...doubled];
};


// removeRandom
const removeRandom = items => {
  const index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};


// extend
const extend = (array1, array2) => {
  return [...array1, ...array2];
};


// addKeyVal
const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};


// removeKey
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};


// combine
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};


// update
const update = (obj, key, val) => {
  return { ...obj, [key]: val };
};
