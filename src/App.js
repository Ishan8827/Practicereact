import react, { useMemo } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./Forms";
import Array from "./Array";
import CompA from "./CompA";
import { createContext } from 'react';
import Usereducer from './Usereducer';
import King from './lifecycle';
import Cdm from './Cdm';
import Cdu from './Cdu';
import Scu from './Scu';
import Cwu1 from './Cwu1';
import Menu from './Menu';
import Axios from './Axios';
import Fetch from './Fetch';
import Todoo from './todoo';
import Useeffect from './Useeffect';
import Usestate from './Usestate';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Cwu2 from './Cwu2';
import Cmxx from "./Cmxx"
import Cmxxx from "./Cmxxx";
import Circle from "./Circle";
import Uclick from './Uclick';
import Axioss from './Axios2';
import Axioa from './Axioa';
import Axios2 from './Axios2';
import REF from './REf';
import REff from './Reff';
import CMxxxxx from './Cmxxxxx';
import USEmemo from './useMemo';
import Formvalidation from './Formvalidation';
import Contextpractice from "./Contextpractice.js"
import Uareducer from './Uareducer';
import USemememo from './USemememo';
import Usred from './Usred';
import Useco2 from './Useco2';
import './Circle.css';
import Useco from './Useco';
import Compana from "./Compana";
import Cirl from './Cirl';
import Forms2 from './Forms2';
import Todopractice from './Todopractice';
import Sorting from './Sorting ';
import Botstrap from './Botstrap';
import Botpractice from './Botpractice';
import Sorted from './Sorted';
import Sortedd from './Sortedd';
export const fname = React.createContext();
export const fnames = React.createContext();
export const userer = React.createContext();

function App() {
  return (
    <div>
      {/* <div class="flex"> */}
      {/* <fnames.Provider value={"Ishan"}> */}
      {/* <Usestate/> */}
 <BrowserRouter>
<ul>
              <li>
                <Link to="/">Normal</Link>
              </li>
              <li>
                <Link to="/cwu2p">sorted by price</Link>
              </li>
              <li>
                <Link to="/fetchhere">Sorted by number of days</Link>
              </li>
              </ul>
<Routes>
    <Route exact path='/' element={< Botstrap />}></Route>
    <Route exact path='/cwu2p' element={< Sorted />}></Route>
    <Route exact path='/fetchhere' element={<Sortedd />}></Route>
</Routes>
</BrowserRouter> 
{/* <Cmxx color="Voilet"/> */}
{/* <Cmxxx idd="this is ishan patel web developer"/> */}
{/* { <Circle/>}  /* height="25px"
    width="25px"
    border-radius= "50px"
    background-color="red"
display="inline-block"*/}
{/* <Uclick/> */}
{/* <Axioss/>    */}
{/* <REF/> */}
{/* <Axios2/> */}
{/* <REff/> */}
{/* <CMxxxxx/> */}
{/* <REff/> */}
{/* <USEmemo/> */}
{/* <Formvalidation/> */}
{/* {<Contextpractice/>} */}
{/* </fnames.Provider> */}
{/* <Uareducer/> */}
{/* <USemememo/> */}
{/* <Usred/> */}
{/* <Circle new="blue"/>        
<Circle new="red"/> */}
{/* <Circle new="red"/> 
</div> */}
{/* <REff/> */}
{/* <Useco/> */}
{/* <Compana lbsana="afadf"/> */}
{/* <USemememo/> */}
{/* <Cirl/> */}
{/* <Forms2/> */}
{/* <Todopractice/> */}
{/* <Fetch/> */}
{/* <Sorting/> */}
<Botstrap/>
{/* <Botpractice/> */}
</div>
  );
}

export default App;

