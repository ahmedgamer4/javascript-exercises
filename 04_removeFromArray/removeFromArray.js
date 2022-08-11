const removeFromArray = function(...args) {
    const list = args[0];
    const n_list = [];

    for (item of list){
        if (!args.includes(item)){
            n_list.push(item);
        }
    }
    return n_list;
};

// Do not edit below this line
module.exports = removeFromArray;
