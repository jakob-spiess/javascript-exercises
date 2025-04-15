const sumAll = function(num1, num2) {
    if ((typeof num1 !== "number") || (typeof num2 !== "number")) return "ERROR";
    else if ((Math.floor(num1) !== num1) || (Math.floor(num2) !== num2)) return "ERROR";
    else if ((num1 < 0) || (num2 < 0)) return "ERROR";
    let smaller, bigger;
    if (num1 === num2) return num1;
    else if (num1 < num2) {
        smaller = num1;
        bigger = num2;
    } else {
        smaller = num2;
        bigger = num1;
    }
    let sum = 0;
    for (let i=smaller; i<=bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
