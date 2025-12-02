import React from "react";
import { Link } from "react-router-dom";


const CallToActionMaid = () =>{
  return(
    <div className="call-to-action-maid">
        <p className="main-title">Join Maidora — Get Jobs That Value Your Work</p>
        <Link to="/maid-register">Join as Maid</Link>
    </div>
  )
}

export default CallToActionMaid;