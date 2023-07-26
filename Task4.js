let arr=[1, 3, 6, 8, 11, 15]
// arr.map((val, index, arr1)=>console.log(val, index, arr1));
function TargetIndices(arr, targetValue){
    let arr1=[]
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
              if(arr[i]+arr[j]==9){
               arr1=[i, j];
              }
        }
    }
    return arr1;
}
let indices=TargetIndices(arr, 9);
console.log(indices);