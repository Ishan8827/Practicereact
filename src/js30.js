const userCart=[
    {productid:"1",productname:"Mobile",price:"15000"},
    {productid:"2",productname:"Laptop",price:"85000"},
    {productid:"3",productname:"Tablet",price:"35000"},
    {productid:"4",productname:"drier",price:"3000"},
    {productid:"5",productname:"heater",price:"3500"}, 
]

let total=0
for(let item of userCart){
    console.log(+item.price);
    total=total+(+item.price)     //calculating total price using for of
}
console.log(total)
 
console.log("THis is the break")

console.log(userCart.reduce((item,list)=>{return item+(+list.price)},0))   //calculating total using reduce method  

const sorted=userCart.slice(0).sort((a,b)=>{return a.price-b.price});
console.log(sorted)

const newone=[...userCart]  // a way of cloning the array

console.log(newone)
