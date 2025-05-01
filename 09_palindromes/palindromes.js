const palindromes = function (input) {
    let str = input;
    str = str.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ")
         .replaceAll(/\s/g,'')
         .toLowerCase();
    arr = Array.from(str);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[arr.length-1-i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
