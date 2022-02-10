const obj1={
    names:"ishan",
    class:"super",               // use of __proto__ to take the properties of other object
    
}
const obj2={
    namess:"ishan1",
    class:"super1",              //Object.create(obj1)--this is also the method of setting __proto__
    __proto__:obj1
}
const obj3={
    names:"ishan2",
    class:"super3",
   __proto__:obj2,
   method:function(){
       console.log(this.namess)
   }
}

obj3.method()

console.log(obj1)
console.log(obj2)
console.log(obj3)


