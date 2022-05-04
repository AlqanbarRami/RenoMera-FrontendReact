import React from "react"
import Helmet from "react-helmet"

export class CustomerMyPosts extends React.Component{
    render(){
        return(
            <div>
            <Helmet>
            <title>Customer : Your Posts</title>
        </Helmet>
            <div className="customer-container">
            <div className="customer-page-myposts">
                <span>Welcome Customer!<br></br> <br></br>
                The application is under development, here your posts will appear so that you can edit or delete them</span></div>
                </div>
                </div>

        )
    }
}