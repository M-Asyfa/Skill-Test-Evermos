/*
Alternate each case of each of string given 

alternateCase("abc")            => "ABC"
alternateCase("ABC")            => "abc"
alternateCase("Hello World")    => "hELLO wORLD"
*/

function alternateCase(str)
{
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
  
    for(let i = 0; i < str.length; i++)
    {
        if(UPPER.indexOf(str[i]) !== -1)
        {
            result.push(str[i].toLowerCase());
        }
        else if(LOWER.indexOf(str[i]) !== -1)
        {
            result.push(str[i].toUpperCase());
        }
        else 
        {
            result.push(str[i]);
        }
    }

    return result.join('');
}

console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));