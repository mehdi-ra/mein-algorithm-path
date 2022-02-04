const runWithTimer = (name, callback, ...args) => {
  console.time(name);
  callback(args);
  console.timeEnd(name);
};

export { runWithTimer };
