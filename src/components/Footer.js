import React from 'react';
import Iconpage from './IconPage';


const Footer = () =>{
    return(
        <>
        <div className=''>
            
        <div className='container   position-relative'>
            <div className='footer_cont w-100  '>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 '>
                              <h4 className='text-center  py-4'> 
                                   See My Projects At Once <br/> &
                                   Leave Here Your E-mail Address <br/>, Please
                              </h4>
                        </div>
                        <div className='col-lg-5 col-md-12 '>
                       
                           <div className='position-relative '>
                                <input type="email" class="form-control px-3 py-4  rounded-4 mt-4" placeholder='Email Address' aria-describedby="emailHelp"
                                    
                                    />
                               <div className='position-absolute  btn_ab'>
                                <button type="submit" class="btn btn-primary  p-3 px-5 rounded-4">
                                        Submit
                                        
                                    </button>
                           </div>     
                           </div>
                           
                      
                        </div>

                    </div>
                   
            </div>
           
        </div>
        
    </div>
    <div className='footer mt-5 pt-5'>
    <div className='container pt-5'> 
            <div className=' mt-5 mb-2'>
                <div className='row'>
                    <div className='col-lg-6 '>
                        <div className=' d-flex mt-5'>
                            <a className="navbar-brand text-white  " href="">LOGO</a>
                        </div>

                    </div>
                    <div className='col-lg-6  '>
                        <div className='icon  text-center dis'>
                            <Iconpage/>
                        </div>
                        <p className=' pt-2 dis'>Copyrights 2024--All Rights Reserved here By Fawziya Muhammed Ahmed</p>
                    </div>
                    <div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
    );
}
export default Footer;