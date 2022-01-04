/*
Given an array/list [] of integers, construct a product array of same size such that prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

productArray([12,20])           => [20,12]
productArray([3,27,4,2])        => [216,24,162,324]
productArray([13,10,5,2,9])     => [900,1170,2340,5850,1300]
productArray([16,17,4,3,5,2])   => [2040,1920,8160,10880,6528,16320]
*/

function productArray(arr)
{
    let result = [];

    for (let i = 0; i < arr.length; i++)
    {
        let num = arr.reduce((a,b) => (a*b));
        let newnum = num/arr[i];
        result.push(newnum);
    }

    return result;
}

console.log(productArray([12,20]));
console.log(productArray([3,27,4,2]));
console.log(productArray([13,10,5,2,9]));
console.log(productArray([16,17,4,3,5,2]));