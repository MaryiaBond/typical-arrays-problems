
exports.min = function min (array) {
    if(array === undefined)
        return 0
    return array.reduce((min, n) => min > n ? min = n : min, 0);
}

exports.max = function max (array) {
    if(array === undefined)
        return 0
    return array.reduce((min, n) => min < n ? min = n : min, 0);
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0)
        return 0
    let total = array.reduce((total, n) => total+=n, 0);
    return total/array.length
}
