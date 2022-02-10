let firstname="Ishan";

const func=()=>{console.log(firstname)};   //lexical scope means if aariable is defined outside then it can be accesesd but vice versa is not possible
func();


function addTwo(a,b=0){            //b has default value 0 ....,, if argument of parameter b is not givrn any defined value it will take b as 0 
    return a+b
}