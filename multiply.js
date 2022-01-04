// function multiply (array)
// {
//     var sum = 1;

//     for (var i = 0; i < array.length - 1; i++)
//     {
//         sum = sum * array[i];
//     }

//     return sum;
// }

// console.log(multiply[1,2,3]);


// First lets create our array

// let arr = [1,2,3,4,5,30];

// then create your function

function multiply(arr)
{
    let total = 1; // this is our result function
    let result = [];

    for(let i = 0; i < arr.length; i++)
    {
        total *= arr[i]; // total variable value is always change until for loop ffinished and add value itself every multiply.
        result.push(total);
    }

    // return total;
    return result;
}

console.log(multiply([1,2,3,4,5,30]));