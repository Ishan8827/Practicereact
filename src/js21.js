// iterating object

const person={
    names:"ishan",
    age:"22",
    class:"super",
}

// for(let i in person){
//     console.log(person.i)     technically we see that this will be right but this is wrong method it gives undefined,,,here if we use person .name javascript  will think i as the first key of the object
// }

// for (let i in person){
//     console.log(person["i"])  this is also wrong because it is not variable..here if we use person["i"] javascript  will think i as the first key of the object
// }
// }

for (let i in person){
    console.log(person[i])     // this is right method for itrating object because it is variabel and takes all the values of key of the object
}