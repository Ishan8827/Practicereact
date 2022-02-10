// array for loop

var a=["Lemon","Guvava","Litchi"]

for(i=0;i<a.length;i++){
    console.log(a[i])
}

fruits2=[]
for(i=0;i<a.length;i++){
    fruits2.push(a[i].toUpperCase())   //Getting the value of array a using for loop and putting it to another array alongwith converting it to uppercase
}

console.log(fruits2)
