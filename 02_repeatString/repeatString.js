const repeatString = function(string, num) {
   
    if(num<0) return "ERROR";

    let repeated_string = "";
    for (let n=0; n<num; n++){
       repeated_string=  repeated_string.concat(string);
    }
    return repeated_string;
};

// Do not edit below this line
module.exports = repeatString;


