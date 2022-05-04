
import React from "react";
import Helmet from "react-helmet";

export class About extends React.Component{

    render(){
        return(
                   <div>
                    <Helmet>
                    <title>About RenoMera</title>
                </Helmet>
        <div className="about-container">
            <div className="about-info">
            Some Info To About
        </div>
        </div>
        </div>);

    }
    
}