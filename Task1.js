//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const StringReverse=(st)=>{
    let Length=st.length;
    let reverse='';
    for(let i=Length-1; i>=0; i--){
      reverse+=[st[i]]
    }
  
  console.log(reverse);
}

let st='hello world';
StringReverse(st);