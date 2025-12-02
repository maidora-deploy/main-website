import React from "react";
import { Link } from "react-router-dom";


const CallToActionD2C = () =>{
  return(
    <div className="call-to-action-d2c">
        <p className="main-title">Find Your Perfect Maid — Fast, Safe, and Reliable</p>
        <Link to="/client-register">Hire Now</Link>
    </div>
  )
}

export default CallToActionD2C;