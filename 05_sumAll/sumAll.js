const sumAll = function(x, y) {
    if(typeof x === 'string' || typeof y === 'string'){
        return "ERROR";
    }
    if(x < 0 || y < 0){
        return "ERROR";
    }
    if (x < y){
        for (i = 0; i <= y; i++){
            x = x + i;
        }
        return x-1;
    }
    if (x > y){
        for (i = 0; i <= x; i++){
            y = y + i;
        }
        return y-1;
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
