
var arry=[{
name:"ishan",
number:2
},{
    name:"patel",
    number:1
},{
    name:"is",
    number:5
},{
    name:"online",
    number:6
}]


function Sorting(){
    console.log(arry.sort((a,b)=>(a.number-b.number)))
    return (
        <div>
         {arry.sort().map((val,ind)=>{ return<li style={{color:"blue"}} imgsrc={"https:\/\/www.justwravel.com\/uploads\/package\/original\/main-banner\/Jaisalmer-Weekend-Trip-JustWravel-1597382611.jpg"}>{val.number}</li>})}
        </div>
    )
}

export default Sorting;