// Return random full Int
exports.randomInt = function(max) {

    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0)) + 0;

}
