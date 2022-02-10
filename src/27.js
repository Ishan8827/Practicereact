const funk=(a,b,c,...d)=>{    //rest parameter
     console.log(a);
     console.log(b);
    console.log(c);
     console.log(d);
    var total=0
    for(i of d){
        
         total=total+i; 
                    
    }
    console.log(total)
}

funk(1,2,3,4,5,6,7,8,9,0)