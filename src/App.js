import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import {React } from "react";
// import axios, { Axios } from "axios";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
 import "./App.css" ;
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import OneSection from './components/OneSection'
import TwoSection from './components/TwoSection';
import ThreeSection from './components/ThreeSection';

const App =()=>
{
  
   
 return(
  
    <>
       <Router>
       
         <Header/>
         <Routes>
            <Route path='/' element={<Main/>} />
           <Route path="/home" element={<Main/>}>
               <Route path='onesection' element ={<OneSection/>} />
                <Route path='twoSection' element ={<TwoSection/>}/>
                <Route path='threeSection' element ={<ThreeSection/>}/>
           </Route>
            <Route path='/skills' element ={<Skills/>}/>
           <Route path='/projects' element={<Projects/>}>
               <Route path='onesection' element ={<OneSection/>} />
                <Route path='twoSection' element ={<TwoSection/>}/>
                <Route path='threeSection' element ={<ThreeSection/>}/>
            </Route>
           
           <Route path='/connect' element={<Connect/>}/>
           <Route path='*' element={<h2 className='text-center'>NotFound</h2>}/>
         </Routes>
        
       </Router>
     
    </>
 );
}

export default App;
library.add(fab, fas, far);
