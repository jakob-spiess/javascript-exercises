const fibonacci = function(index) {
    index = +index;
    if (index < 0) return "OOPS";
    else if (index === 1 || index === 2) return 1;
    let lastlast = 1;
    let last = 1;
    let res = 0;
    for(let i = 3; i <= index; i++) {
        res = last + lastlast;
        lastlast = last;
        last = res;
    }
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
