module.exports = function check(str, bracketsConfig) {
    let length = str.length;
    let result;
    if (str.length % 2 !== 0) {
        result = false;
    }
    let arr = str.split('');
    let bracketsConfig1 = bracketsConfig.flat();
    for (let i = 0; i < bracketsConfig1.length; i++) {
        let array = arr.filter(n => bracketsConfig1.indexOf(n) === -1);
        if (array.length > 0) {
            result = false;
        }
    }
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            str = str.replace(bracketsConfig[j].join(''), '');
        }
    }
    if (str.length > 0) {
        result = false;
    } else {
        result = true;
    }

    return result; // your solution
}