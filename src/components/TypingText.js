import React from 'react';
import {useTypewriter , Cursor} from 'react-simple-typewriter'
const TypingText  =() =>{

    const [text] = useTypewriter({
        words:[' Developer'  ,'Front-end ', 'Engineering'],
        loop : {},
    });
    return(
        <div className='container my-auto pt-5'>
              <div className='row'>
                <div className='col-4 text-center position-relative mt-5 l'>
                <h4 className='text-white border border-1 border-dark py-3 px-2 porto mb-5'>Welcome All in My Portfolio</h4>
                  <div className="h1 mb-3 mt-5 me"  >
                    <h1 className="text-white tQ"  >
                        Hi! I'm Fawziya <br/> Muhammed <br/>
                         Ahmed , <span style={{fontWeight:'bold' }}>
                            {text}
                         </span>
                        <span>
                            <Cursor/>
                        </span>
                    </h1>
                  
                   
                  </div>
                 
                </div>

              </div>
      
        </div>
    );
}
export default TypingText;