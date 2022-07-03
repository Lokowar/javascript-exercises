const palindromes = function (x) {
    for(i=0; i <= x.length; i++){
        if(x[i] === "!"){
            let copy;

            copy = x.split("!").reverse().join("");

            copy += "!";

            return x === copy;
        }
        if(x[i] == " "){
            let copy;
            let copyOfCopy;

            copy = x.replace(/\s|,/g, "");
            copy = copy.toLowerCase();

            copyOfCopy = copy.replace(".", "");

            return copyOfCopy === copyOfCopy.split("").reverse().join("");
        }
    }

    return x === x.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
