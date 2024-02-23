import React from 'react';
import Footer from './Footer';
const Connect  =() =>{
    return(
       <div className=''>
       
       <div className=' One-Conct '>
            <div className='container my-5 pb-5'>
            <div className='row py-5 '>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='TSec '>
                        <div className='form-img'>
                            <img src='../image/ContF2.jpg' className='w-100'/>
                        </div>
                    </div>

                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <section class=" text-white">
                        <div class="row">
                            <h2 className='py-4'> Get To Touch</h2>
                            <div class="col">
                                <input type="text" class="form-control px-3 py-3  rounded-4"  aria-label="First name"  placeholder='First Name'/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control px-3 py-3  rounded-4 " aria-label="Last name" placeholder='Last Name' />
                            </div>
                            
                        
                        </div>
                        <div className='row my-4'>
                        <div class="col  ">
                            <input type="email" class="form-control px-3 py-3  rounded-4" placeholder='Email Address' aria-describedby="emailHelp"/>
                        </div>
                        <div class=" col ">
                            
                            <input type="text" class="form-control px-3 py-3  rounded-4" placeholder="Phone Number"/>
                        </div>
                        <div class="my-4">
                            <textarea class="form-control px-3 py-3  rounded-4" id="exampleFormControlTextarea1" placeholder='Message' rows="5"></textarea>
                            
                        </div>
                        <button type="submit" class="btn btn-outline-info ">Send</button>
                        </div>      
                     </section>

                </div>

            </div>

             </div >
             
        </div>
      
       </div>
    );
}
export default Connect;