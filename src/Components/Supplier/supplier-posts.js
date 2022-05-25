import { callerSupplier} from "../../Services/api.js"
import React from "react"
import Helmet from "react-helmet";
import PropTypes from 'prop-types';
import { ApiError } from "../../ApiError.js";


export default class SupplierPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Posts: [],
            Error: ""
        };
    }
    
    getConnect(){
        callerSupplier.get('/post', {})
        .then(res => {
            let info;
            if ( res.request.status != 0) {
                this.setState({Error:"noError"})          
            const data = res.data
             info = data.map(u =>
                <div key={u.supplierPostId} className="supplier-posts">
                <div className="supplier-posts-image-div">
                <img className="supplier-posts-image" src={u.image} alt="image"/>
                </div>
                <div className="supplier-posts-contents">
                <div className="supplier-posts-title">
                <span>{u.title}</span>
                </div>
                <div className="supplier-posts-description">
                <p>{u.description}</p>
                </div>
                <div className="supplier-posts-contact">
                <span>Price : {u.price}</span>
                <span>City : {u.city}</span>
                <span> Phone : {u.phone}</span>
                </div>             
                </div>
                </div>
                )
                this.setState({
                    Posts : info
                })
            }
            else{
                return(
                    false
                )

            }
        })

    }

    getSupplierPost(){
        if(this.getConnect() == false){
            this.setState({Error:"error"})
        }
        else{
            return(this.state.Posts)
        }
    }

    componentDidMount(){
        this.getSupplierPost();
    }
    render(){
        if(this.state.Error =="noError"){
        return(
            <div>
            <Helmet>
            <title>Buy now</title>
        </Helmet>
        <div className="supplier-posts-container">
            <div className="supplier-posts-header">
            <span>Buy what you need to fix something!</span>
            </div>
            <div className="supplier-posts-main">
            {this.state.Posts}
            </div>
            </div>
            </div>
        )
    }
else{
    return(
        <ApiError/>
    )
}
    }
}
