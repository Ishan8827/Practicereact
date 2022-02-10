const details=[
    {id:1,
    name:"praveen",
    address:{
        city:"Delhi",
        pin:099099,
    },
    email:"paras.gmail",
    edu:{
        school:"school",
        collage:"Du",                                                   
    }
}
]

console.log(details.map(({id,name,address,email,edu})=>({id,name,...address,email,...edu})));

