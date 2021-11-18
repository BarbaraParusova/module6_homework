function numbArg1(numb1) {
    return function (numb2) {
        return numb1 + numb2;
    };
}

let func1 = numbArg1(2);
console.log(func1(3));
