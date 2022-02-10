// use of function's prototype to create methods accesible to different objects


function abc(name,classs,subjexts){
    this.name=name;
    this.cals=classs;
    this.subejt=subjexts;
}

abc.prototype.about=function(){
    console.log(this.name)
}

const user1=new abc("deval","himanshu","physics")

console.log(user1);
user1.about()

const user2=new abc("Shivashish","Ishan","Maths")

console.log(user2);
user2.about()