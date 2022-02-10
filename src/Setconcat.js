var a=[1,2,2,4,5,66,7,3,4];

console.log(new Set(a))    

console.log(...new Set(a))

console.log([...new Set(a)].sort())  //set method to clear reapeating values and sort to arrange in order

var b=[11,22,33,44,55,66,77]

console.log(a.concat(b))   //concat to combine two arrays

console.log(new Set([1,2,2,2,2,]))
 

var c=[1,25,4,15,3];
console.log(c.sort((a,b)=>{return b-a;}));

