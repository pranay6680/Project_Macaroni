import React from "react";
import "./Style.css";
function Contact({closeContact}){
   
    return(
        <div className="contactCont">
        <div className="contact">
            <div className="head1">
                <h1>Contact</h1>
            </div>
            <p>info@macaronirestaurant.co.uk / TEL : +44 7398222053</p>
            <p className="childPara">Opening hours:</p>
            <p>Every Day</p>
            <p>12:00 - 22:00</p>
            <p>24 Darkes Lane, Potters Bar EN6 2HW</p>
        </div>
        
        <button className="contactContButton"style={{ height: 40, width: 40 }} onClick={closeContact}>
        X
      </button> 
      </div>
    )
}
export default Contact;