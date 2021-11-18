let flag = 0;
let idIntervals = 0;
const timeOut = function (a, b) {
    if (a + flag <= b) {
        console.log(a + flag);
        flag++;
    }
    if (a > b) {
        console.log("Некорректно введены числа");
        clearInterval(idIntervals);
    }
};

idIntervals = setInterval(timeOut, 1000, 1, 5);
