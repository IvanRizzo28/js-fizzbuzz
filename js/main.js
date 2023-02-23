'use strict';

const row=document.getElementById("row");
let output;

for (let i=1;i<=100;i++){
    const col=document.createElement("div");
    col.classList.add("col-2");
    output=""+i;
    if (i%3 === 0 && i%5 === 0){
        output="FizzBuzz";
        col.classList.add("fizzbuzz");
    } 
    else{
        if (i%3 === 0){
            output="Fizz";
            col.classList.add("fizz");
        }  
        if (i%5 === 0){
            output="Buzz";
            col.classList.add("buzz");
        }  
    }
    console.log(i+": "+output);
    
    col.append(output);
    row.append(col);
}