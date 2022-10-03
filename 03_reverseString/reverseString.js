const reverseString = function(string) {

splitString = string.split('');
reverseArray = splitString.reverse();
reversedString = reverseArray.join('');

return reversedString
};

// Do not edit below this line
module.exports = reverseString;
