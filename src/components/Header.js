import React from 'react';
import { NavLink } from 'react-router-dom';
import Iconpage from './IconPage';
const Header =()=>{

    return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light py-4">
                    <div className="container-fluid ">
                        <a className="navbar-brand text-white ms-5" href="">LOGO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto ">
                            <NavLink className="nav-link active text-white mt-3 pe-5" aria-current="page" to="/home">Home</NavLink>
                            <NavLink className="nav-link text-white mt-3  pe-5" to ="skills">Skills</NavLink>
                            <NavLink className="nav-link text-white me-5 mt-3 " to ="projects">Projects</NavLink>
                            <Iconpage/>
                            <NavLink className="btn btn-outline-light px-4 py-2 me-5" to="/connect" >let's Connect</NavLink>
                           
                        </div>
                        </div>
                    </div>
                </nav>
            </>

    );
}
export default Header ;