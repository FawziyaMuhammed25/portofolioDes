import React from 'react';
import HeadProj from './HeadProj';
import Connect from './Connect';
const Projects  =() =>{
    return(
        <div className=' '>
            <div className='container '>
                <div  className='text-center  py-3 '>
                    <h2 className='text-white'>My Project </h2>
                    <p>My Name is Fawziya Muhammed , I live in Tanat , this is<br/> all MyProject</p>
                     <HeadProj/>
                     
                </div>

            </div>
           
            <div  >
                <Connect/>
             
             </div>
        </div>
    );
}
export default Projects;