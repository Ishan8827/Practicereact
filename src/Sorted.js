import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,faIndianRupee,faCalendarDays,faLocationDot,faBurger,faCarSide,faClock,faBed } from '@fortawesome/free-solid-svg-icons'


function Sorted(){
    const[state,setstate]=useState([]);
    useEffect(()=>fetch("https://www.justwravel.com/otherPages/month_trip_api/February/all").then((res)=>res.json()).then((response)=>setstate(response.data.sort((a,b)=>a.price-b.price))))

    return(
        
       
      
          <div className="conatainer" >
              <div className="row g-3">
            
       {state.map((val)=> <div className="col-12 col-md-6 col-lg-4 col-sm-12">
       <div className="card img-fluid shadow" style={{width:"400px",height:"310px"}}>
      
      <img className="card-img-top" src= {val.image} alt="Card image" style={{width:"100%",height:"250px"}}></img>
   
      <div className="card-img-overlay">
        <h4 className="card-title text-center  ">{val.title}</h4>
        <div className="text-right" style={{float:"left"}}>
        <a href="#" className="btn btn-light btn-sm" style={{color:'blue'}} style={{marginTop:"133px"}}><FontAwesomeIcon icon={faIndianRupee}/>{val.price}</a>
        </div>
        <div className="text-center" style={{marginLeft:"250px",marginTop:"140px"}}>
        <a href="#" className="btn btn-primary btn-sm" ><FontAwesomeIcon icon={faClock}/> {`${val.numofdays} days`}</a>
        </div>
      </div>
      <div className="card-footer" style={{height:"55px"}}>
          <div style={{marginTop:"-6px"}}>
   <h6><FontAwesomeIcon icon={faCalendarDays}/> {val.startdate}</h6>
          </div>
          <div>
  <pre><h6><FontAwesomeIcon icon={faLocationDot}/> {val.location} to {val.location}      <FontAwesomeIcon icon={faCarSide}/>  <FontAwesomeIcon icon={faBurger}/>  <FontAwesomeIcon icon={faBed}/></h6></pre>
          </div>
        
      </div>
    </div>


  
        




        </div>)}
        </div>
        </div>
        
        )
    
}

export default Sorted;