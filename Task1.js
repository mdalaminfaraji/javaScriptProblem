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