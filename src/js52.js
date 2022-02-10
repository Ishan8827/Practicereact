//checking prime numbers and composite numbers
let num=7;
let setvalu=true
for(i=2;i<num;i++){
   if(num%i===0){
     setvalu=false
   }
   
}

if(setvalu===false){
  console.log("composite")
}
else{
  console.log("prim ")
}