//callback

function abcdefg(number1,number2,onsucces,onfailure){
    if(typeof number1==="number" &&typeof number2==="number"){
onsucces(number1,number2);}
else{onfailure();}
};
function abc(num1,num2){console.log(num1+num2)}

function def(){console.log("Fialue")};
abcdefg(2,3,abc,()=>{});    