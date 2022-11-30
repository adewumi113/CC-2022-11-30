//https://www.codewars.com/kata/546e2562b03326a88e000020
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9 square is 81 and 1 square is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits (num) {
  let b = num.toString() //converts the number to string
  let addition = (b[0] ** 2).toString() //we obtain square of first number and convert it to string by using toString() method
  for (i = 1; i < b.length; i++) {
    addition += (b[i] ** 2).toString();//we loop through the string and add square of each number to addition and leave the answer in string
  }
  return Number (addition)// we convert the final result to integer by using Number() method
}
squareDigits (9119)


//short solution

function squareDigits(num){
  return Number(String(num).split('').map(x => x ** 2).join('')); //convert the input to string, then transform to array by splitting, then obtain square of each individual number by map() method, join results together by join() method and then turn to integer by using Number() method.
}
squareDigits (9119)
