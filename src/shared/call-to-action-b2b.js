import React from "react";
import { Link } from "react-router-dom";


const CallToActionB2B = () =>{
  return(
    <div className="call-to-action-b2b">
        <p className="main-title">Partner with Maidora — Grow Your Business Together</p>
        <Link to="/agent-register">Become a Partner</Link>
    </div>
  )
}

export default CallToActionB2B;