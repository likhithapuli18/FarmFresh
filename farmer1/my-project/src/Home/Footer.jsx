import React from 'react'
import { useNavigate } from 'react-router-dom'

 

function Footer() {
  const nav = useNavigate()
  return (
    <div>
           <footer>
      
        <div className="foot-links">
            <h5 onClick={()=>nav('/aboutus')}> <b>About Us</b>  </h5>
             
            <h5 onClick={()=>nav('/privacy')}> <b>Privacy Policy</b> </h5>
            {/* <h5 onClick={()=>nav('/conditions')}><b>Terms & Conditions</b></h5> */}
        </div>
    </footer>
    </div>
  )
}

export default Footer