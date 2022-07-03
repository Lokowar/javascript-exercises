const fibonacci = function(tg) {
    let x = 1;
    let y = 1;
    let z;

    tg = parseInt(tg);

    if (tg <= 2 && tg >= 0){
        return 1;
    }

    if(tg < 0){
        error = "OOPS";
        return error;
    }

    for ( i = 0; i <= tg - 3; i++){
        z = x + y;
        y = x;
        x = z;
    }
    return z;
};

// Do not edit below this line
module.exports = fibonacci;
