const sumAll = function(a,b) {
    // if (typeof(a) !== Number || typeof(b) !== Number) return "ERROR"

    let start = a;
    let end =b; 
    if (start>end){
        let temp= start;
        start =end; 
        end =temp;
    }
    if (start<0) return "ERROR"
    if (Math.floor(start)!==start || Math.floor(end)!==end) return "ERROR"
    let sum = 0;
    let i= start ;
    while(i<=end){
        sum += i;
        i++;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
