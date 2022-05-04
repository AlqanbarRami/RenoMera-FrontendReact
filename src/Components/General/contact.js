
import React from "react";
import Helmet from "react-helmet";

export class Contact extends React.Component{

    render(){
        return(
            <div>
            <Helmet>
            <title>Contact RenoMera</title>
        </Helmet>
        <div className="contact-container">
            <div className="contact-info">
            Some Info To Contact
        </div>
        </div>
        </div>);

    }
    
}