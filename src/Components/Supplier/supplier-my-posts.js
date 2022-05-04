import React from "react"
import { Helmet } from 'react-helmet'

export class SupplierMyPosts extends React.Component{
    render(){
        return(
                <div>
                    <Helmet>
                    <title>Supplier Your Post</title>
                </Helmet>
            <div className="supplier-container">
            <div className="supplier-page-myposts">
                <span>Welcome Supplier!<br></br> <br></br>
                The application is under development, here your posts will appear so that you can edit or delete them</span></div>
                </div>
                </div>

        )
    }
}