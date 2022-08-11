const sumAll = function(start, end) {
    let sum = 0;
    if (typeof start != "number" || typeof end != "number" || Math.sign(start) == -1 || Math.sign(end) == -1){
        return 'ERROR';
    }
    else{
        if (end < start){
            let tmp = start;
            start = end;
            end = tmp;
        }
        for (var i = start; i <= end; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
