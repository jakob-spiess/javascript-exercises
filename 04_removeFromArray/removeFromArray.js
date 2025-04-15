const removeFromArray = function(array) {
    const finalArray = [];
    outer: for (let i=0; i < array.length; i++) {
                for (let j=0; j < arguments.length; j++) {
                    if (arguments[j] === array[i]) continue outer;
                }
            finalArray.push(array[i]);
            }
            return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
