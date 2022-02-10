var obj={                
    names:"people",
    classs:"super",
    gender:"female",
}

const{names,classs,gender}=obj     // For object destructring we give the name of variables same as the key

console.log(names)
console.log(obj); 
const{...rest}=obj
console.log(rest)      //we can us rest operator also in this way here

