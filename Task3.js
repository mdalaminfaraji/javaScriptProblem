// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
const MostFrequentElement=(arr)=>{
    const countMap={};

    for(let i=0; i<arr.length; i++){
        if(countMap[arr[i]]){
             countMap[arr[i]]++;
        }else{
            countMap[arr[i]]=1;
        }
       
    }
    let FrequentElement;
    let maxCont=0; 
   for(let val in countMap){
       if(countMap[val]>maxCont){
        maxCont=countMap[val];
        FrequentElement=val;
       }
   }

   return FrequentElement;

} 

let arr=[3, 5, 2, 5, 3, 3, 1, 4, 5] ;

const element=MostFrequentElement(arr);
console.log(element);