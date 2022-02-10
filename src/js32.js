const obj={
    names:"ishan",
    class:"super",
    method:function(state){
      console.log(this.names);
      console.log(state)
    }
}

const obj2={
    names:"ishan2",
    class:"super2",
}

obj.method.call(obj2,"chhattisgarh");    //call




obj.method.apply(obj2,["chhasttisgarh"]); // apply is also used in samw way as call but arguments are passed as an array




const oject=obj.method.bind(obj2,"chhasttisgarh");// bind is also used like call but it returns the function so that we can use it later

console.log(oject);

oject()


