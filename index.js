var outPut = [];

function fizzBuzz() {
  for (var count = 1; count <= 150; count++) {
    
  if (count % 3 === 0 && count % 5 === 0) {
        outPut.push ("FizzBuzz");
  }
  else if (count % 3 === 0) {
        outPut.push ("Fizz");
      } 
 else if (count % 5 === 0){
         outPut.push ("Buzz");
 }
 else {
        outPut.push(count);
      }
   }
  console.log(outPut);
}
