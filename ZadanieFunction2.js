function primeNumber(my_numb) {
    my_numb = +my_numb;

    if (my_numb > 1000) {
        let string = "Число больше 1000";
        return string;
    }

    if (my_numb <= 1 || my_numb === 0) {
        let string = "Не является простым";
        return string;
    }

    for (i = 2; i < my_numb; i++) {
        if (my_numb % i === 0) {
            let string = "Не является простым";
            return string;
        }
    }

    let string = "является простым";
    return string;
}
console.log(primeNumber(2000));
