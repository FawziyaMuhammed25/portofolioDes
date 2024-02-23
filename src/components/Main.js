import React from 'react';
import TypingText from './TypingText';
import Skills from './Skills';

const Main  =() =>{
    return(
       
        <>
           <div>
              <div className="user-select-none" id="stars" ></div>
                    
                    <div className="user-select-none floating-animation" id="waving" ></div>
                    
                    <div className="user-select-none" id="rocket" ></div> 
                
                    <TypingText/> 
           </div>
           <div  className='marg'>
              <Skills/>
           </div>
         </>      
      
        
    );
}
export default Main;