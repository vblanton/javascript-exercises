const reverseString = function(string) {
    strArr = string.split("");
    reverseArr = strArr.reverse();
    newStr = reverseArr.join("");
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
