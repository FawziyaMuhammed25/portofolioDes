import React from "react";

import { NavLink, Outlet } from 'react-router-dom';
const HeadProj =()=>{
    return(
      <>
        <div className="container">
           <div className="ju my-4">
                <div className="headProj m-auto">
                        <NavLink className="nav-link active text-white " to ='onesection'>1st Section</NavLink> 
                </div>
                <div className="headProj1 m-auto">
                        <NavLink className="nav-link active text-white " to ='twoSection'>2st Section</NavLink> 
                </div>
                <div className="headProj2 m-auto">
                        <NavLink className="nav-link active text-white " to ='threeSection'>3st Section</NavLink> 
                </div>
           </div>
        </div>
        <Outlet/>
     </>
    );
}
export default HeadProj;