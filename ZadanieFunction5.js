const func_exponentiation = (x, n) => {
    let result = x;
    if (n === 0 && x !== 0) {
        result = 1;
    } else {
        for (let i = 1; i < n; i++) {
            result = result * x;
        }
    }
    console.log(result);
};
func_exponentiation(0, 5);
