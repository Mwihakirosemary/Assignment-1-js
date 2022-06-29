// Assignment 1: Conditionals & Loops1.
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function iterate(){
    for (var i = 0; i < 100;i++){
        if(i % 3 == 0 && i % 5 == 0){
          console.log("FizzBuzz");
        }
        else if (i % 3 == 0){
          console.log("Fizz");
        }
        else if (i % 5 == 0){
          console.log("Buzz");
        }
  }
}
// iterate()

// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (n = 0;n < 1000;n++){
    if (n % 3 == 0 && n % 5 == 0){
        sum += n;
    }
    // console.log(sum)
}
// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for(i = 0;i <= 20; i++){
    if(i % 2 === 0) {
      // console.log(i+' '+"is even")

    }
    
    // else console.log(i+' '+"is odd")
    
}
// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

let num = [-2,4,-5,6,0]
let largest = 0;

for (let m = 0;m < num.length; m++){
  if (num[m] > largest){
    largest = num[m];

  console.log(largest)
  }
}

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
function two_nums (j,k){
  if(j > k){
    console.log(j);
  }
  else{
    console.log(k);
  }

}
// two_nums(10,40)
// function two_nums(10,40)
// Write a JavaScript program to find leap years from 2000 to 2022
// program to check leap year

function checkLeapYear(l) {
  for(l = 0;l < 2022; l++)
  if ((0 == l % 4) && (0 != l % 100)) {
      console.log(l + ' is a leap year');
  } else {
      console.log(l + ' is not a leap year');
  }
}

// checkLeapYear();
