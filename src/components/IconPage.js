import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Iconpage = () => {
  return (
    <div className='text-white  me-5 text-center  icon '>
        
           
           <a href='https://www.linkedin.com/in/fawziya-zeyada-78843222b/'  className='icon1 pt-1 text-white'>
               <FontAwesomeIcon icon="fa-brands fa-linkedin-in"  />
          </a>
        
        <a href='#' className='icon1 mx-2 pt-1 text-white'>
          
          <FontAwesomeIcon icon="fa-brands fa-facebook-f"  />
         
       
        </a>
        <a href='#' className='icon1 pt-1 text-white'>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
    </div>
  )
}

export default Iconpage