const removeFromArray = function(x, y1, y2, y3, y4) {
    for (i = x.length; i >= 0; i--){
        if (x[i] === y1 || x[i] === y2 || x[i] === y3 || x[i] === y4){
            x.splice(i, 1);
        }
    }
    return x;
}

// Do not edit below this line
module.exports = removeFromArray;
