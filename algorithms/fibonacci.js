function fibonacci(n = 0) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

export { fibonacci };
