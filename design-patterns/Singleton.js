/**
 * The main reason you want to use this design patterns
 * in your project is that you want to create one object
 * only once.
 */

// Instance holder
let instance;

export class Singleton {
  constructor() {
    if (instance) {
      console.log('Singleton object instance created before');
    } else {
      instance = this;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getInstance() {
    return instance;
  }
}

export const singletonFactory = () => new Singleton();
