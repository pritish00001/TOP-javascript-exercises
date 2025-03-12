const removeFromArray = function(array) {
    if (array.length===0) return array;
    
    args = Array.from(arguments);
    if (args.length===0) return array;

    for (arg of args){
        let i =0;
        while(i<array.length){
            if (arg === array[i]){
                array.splice(i,1);
                continue;
            }
            i++;
        }
    }
    // console.log(array);
    return array;
};
removeFromArray([1,2,3,4], 3)
// Do not edit below this line
module.exports = removeFromArray;
