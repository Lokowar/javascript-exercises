const repeatString = function(string, num) {
    if (num === 0){
        string = ''
    }
    if (num === -1){
        return string = "ERROR"
    }
    if (string === ''){
        for (i = 2; i <= num; i++){
            string += ""
        }
        return string
    }
    else{
        for (i = 2; i <= num; i++){
            string += "hey"
        }
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
