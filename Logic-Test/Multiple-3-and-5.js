/*
Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed.

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18
*/

function solution(number)
{
    let sum = 0;

    for (let i = 0; i < number; i++)
    {
      if (i % 3 === 0 || i % 5 === 0)
      {
        sum += i;
      }
    }

    return sum;
}
  
console.log(solution(10));
console.log(solution(20));