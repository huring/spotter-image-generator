// Return random full Int
exports.randomInt = function(max) {

    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0)) + 0;

}

exports.randomAlphaNumeric = function(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}
