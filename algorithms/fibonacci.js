import simpleStore from '../memorization/simple-store/simple-store.js';

function fibonacci(num = 0) {
    if (num <= 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibMemo(num = 0) {
    if (simpleStore.check(num)) return simpleStore.get(num);
    if (num <= 2) return 1;

    const result = fibMemo(num - 1) + fibMemo(num - 2);
    return simpleStore.store(num, result);
}

export { fibonacci, fibMemo };
