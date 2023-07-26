//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const SecondSmallest=(arr)=>{
    let smallest=Infinity;
    let secondSmallestValue=Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<smallest){
            secondSmallestValue=smallest;
            smallest=arr[i];

        }else if(arr[i]<secondSmallestValue && arr[i]!=smallest){
            secondSmallestValue=arr[i];
        }
    }
    return secondSmallestValue;
}
let arr=[12,4 ,5, 6, 7,8];
const val=SecondSmallest(arr);
console.log(val);