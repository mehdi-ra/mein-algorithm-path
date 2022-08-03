export default (function SimpleStoreModule() {
  const storedData = {};

  const get = (key) => storedData[key];

  const store = (key, data) => {
    storedData[key] = data;
    return storedData[key];
  };

  const check = (key) => {
    if (storedData[key]) return true;
    return false;
  };

  return { get, store, check };
}());
