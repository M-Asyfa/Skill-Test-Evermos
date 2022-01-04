/*
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return null if the argument is invalid.

maxRedigit(123) --> 321
maxRedigit(231) --> 321
maxRedigit(321) --> 321

maxRedigit(-1)  --> null 
maxRedigit(0)   --> null
maxRedigit(99)  --> null
maxRedigit(1000) --> null
*/

function maxRedigit (num)
{
    let stringNum = num.toString();

    if (stringNum.length == 3)
    {
        return Number(stringNum.split('').sort((a, b) => b - a).join(''));
    }
    else
    {
        return null;
    }
}

console.log(maxRedigit(123));
console.log(maxRedigit(231));
console.log(maxRedigit(321));

console.log(maxRedigit(-1));
console.log(maxRedigit(0));
console.log(maxRedigit(99));
console.log(maxRedigit(1000));