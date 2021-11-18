function func_amontEvenOdd() {
    let array = [1, 2, "hello", NaN, 0, 4, 10, 99];
    let amontEven = 0;
    let amontOdd = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("В массиве есть значение 0");
        } else if (typeof array[i] === "number" && Number.isNaN(array[i]) === false) {
            let mod = array[i] % 2;
            if (mod === 1) {
                amontOdd++;
            } else {
                amontEven++;
            }
        }
    }
    console.log(`Количество нечетных чисел - ${amontOdd}.Количество нечетных чисел - ${amontEven}`);
}
func_amontEvenOdd();
