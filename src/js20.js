// Objects

const person={
    names:"ishan",
    age:"22",
    class:"super",
}

console.log(person);

console.log(person.names);  //to acces an object's key value we have to use dot
  
console.log(person["names"]) // we can use this method also

// objects key have a string type value so we can access it by this method also

//to add new key these are two methods
/*1*/person.email="ishanpatel2468@gmail.com"
console.log(person)

/*2*/person["hobbie"]="guitar"
console.log(person)


// but we have to add key which is defined before then we will do this method 
value="address"

person[value]="Bilaspur";
console.log(person);

// not in this way--person.value  (We will not use dot notation .....instead we will use bracket notation)