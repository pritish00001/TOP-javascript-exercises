const reverseString = function(string) {
    arr = string.split("");
    rev_arr = [];

    for (let i=arr.length-1; i>=0; i--){
        rev_arr.push(arr[i]);
    }

    return rev_arr.join("");

};

// Do not edit below this line
module.exports = reverseString;
