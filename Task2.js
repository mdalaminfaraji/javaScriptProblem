//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const SumOfPositiveNumber=(arr)=>{
   let sum=0;
    for(let val of arr){
        if(val>0){
          sum+=val;
        }
       
    }
    console.log(sum);
}

const arr=[2, -5, 10, -3, 7];
SumOfPositiveNumber(arr);