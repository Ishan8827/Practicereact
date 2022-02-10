import react ,{useState}from "react"

function Array(){
   
        var myarray=[{id:0,name:"Ishan",age:70},{id:1,name:"Patel",age:70},{id:2,name:"Rohit",age:9},

        ]

        const[aray,setaray]=useState(myarray);

       function updatefunction(){
            setaray([])
        };      

        const deleteitems = (y)=>{  
        const mynewaray = aray.filter((x)=>{
            return x.id!==y;    
        }
        )
        setaray(mynewaray);
}       
        

        
        return(
            <>
          {
           aray.map((x)=><h1 key={x.id}>my name is{x.name}and my age is{x.age} <button onClick={ () => deleteitems(x.id)}>Clear!!</button></h1> )
          }

          <button onClick={updatefunction}>Click me!

          </button>
          </>
    )
}

export default Array;   