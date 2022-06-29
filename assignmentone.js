// function iterate(){
//     for (var i = 0; i < 100;i++){
//         if(i % 3 == 0 && i % 5 == 0){
//           console.log("FizzBuzz");
//         }
//         else if (i % 3 == 0){
//           console.log("Fizz");
//         }
//         else if (i % 5 == 0){
//           console.log("Buzz");
//         }
//   }
// }
// iterate()

// var sum = 0;
// for (n = 0;n < 1000;n++){
//     if (n % 3 == 0 && n % 5 == 0){
//         sum += n;
//         console.log(sum)
//     }
// }

let num = [-2,4,-5,6,0]
let largest = 0;

for (let m = 0;m < num.length; m++){
  if (num[m] > largest){
    largest = num[m];

  
  }
  console.log(largest);
}