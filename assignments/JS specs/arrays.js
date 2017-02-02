function sum(arr)
{
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

function odds(arr)
{
    var odd = [];
    for (var i = 0; i < arr.length; i++)
        if (arr[i] % 2 != 0)
            odd.push(arr[i]);
    return odd;
}

function find (arr, fn)
{
    for (var i = 0; i < arr.length; i++)
        if (fn(arr[i]) == true)
            return arr[i];
}

exports.sum = sum;
exports.odds = odds;
exports.find = find;