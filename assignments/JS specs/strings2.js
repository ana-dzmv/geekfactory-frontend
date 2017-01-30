function lengthOfLastWord(a)
{
    var words = a.trim().split(" ");

    return words[words.length - 1].length;
}

exports.lengthOfLastWord = lengthOfLastWord;