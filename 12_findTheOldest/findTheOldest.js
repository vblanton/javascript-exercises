const findTheOldest = function(arr) {    
    let oldest = arr[0];
    if (oldest.yearOfDeath === undefined) {
        oldest.yearOfDeath = new Date().getFullYear();
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].yearOfDeath === undefined) {
            arr[i].yearOfDeath = new Date().getFullYear();
        }
        if (oldest.yearOfDeath - oldest.yearOfBirth < arr[i].yearOfDeath - arr[i].yearOfBirth) {
            oldest = arr[i];
        }
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
