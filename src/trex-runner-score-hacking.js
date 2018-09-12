let hackScore = 0;

Object.defineProperty(Runner.instance_, 'distanceRan', {
  get: () => hackScore,
  set: (value) => hackScore = value + Math.floor(Math.random() * 1000),
  configurable: true,
  enumerable: true,
});