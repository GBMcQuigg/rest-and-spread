const filterOutOdds = (...args) => args.filter((val) => val % 2 === 0);

// const findMin = (...args) => args.forEach(val => val < min === min); // My Attempt

const findMin = (...args) => Math.min(...args);

const mergeObjs = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleArgs = (arr, ...args) => [...arr, args * 2]; //My Attempt
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

// const removeRandomItems = ()

const extendArr = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

const addKeyVal = (obj, key, val) => {
  let obj1 = { ...obj };
  newObj[key] = val;
  return newObj;
};

const removeKey = (obj, key) => {
  let obj2 = { ...obj };
  delete obj[key];
  return obj2;
};

const combine = (obj1, obj2) => {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
};

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
