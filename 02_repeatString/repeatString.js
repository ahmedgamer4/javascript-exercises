const repeatString = function(text, times) {
    let txt = '';
    if (times < 0){
        return 'ERROR';
    }
    for (var i = 0; i < times; i++){
        txt += text;
    }
    return txt;
};

// Do not edit below this line
module.exports = repeatString;
