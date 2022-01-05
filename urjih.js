let p = 1;
const factorial = (limit, number) => {
    if (limit < number) {
        console.log(p)
        return
    }
    p = p * number;
    factorial(limit, number + 1)
}

factorial(3, 1)