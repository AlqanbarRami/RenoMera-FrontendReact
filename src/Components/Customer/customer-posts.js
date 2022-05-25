import { callerCustomer} from "../../Services/api.js"
import React from "react"
import Helmet from "react-helmet";
import { ApiError } from "../../ApiError.js";


export default class CustomerPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Posts: [],
            Error:""
        };
    }

    getConnect(){
        callerCustomer.get('/post', {})
        .then(res => {
            let info;
            if ( res.request.status != 0) {
            this.setState({Error:"noError"})   
            const data = res.data   
             info = data.map(u =>
                <div key={u.customerPostId} className="customer-posts">
                <div className="cutomer-posts-image-div">
                <img className="customer-posts-image" src={u.image} alt="image"/>
                </div>
                <div className="customer-posts-contents">
                <div className="customer-posts-title">
                <span>{u.title}</span>
                </div>
                <div className="customer-posts-description">
                <p>{u.description}</p>
                </div>
                <div className="customer-posts-contact">
                <span>City : {u.city}</span>
                <span> Phone : {u.phoneNumber}</span>
                </div>             
                </div>
                </div>
                )
                this.setState({
                    Posts : info,
                    Error : "noError"
                })
    }
    else{
        return(
            false
            )
    }
})
    }

    getCustomerPost(){
        if(this.getConnect() == false){
            this.setState({Error:"error"})
        }
        else{
            return(this.state.Posts)
        }
    }

    componentDidMount(){
        this.getCustomerPost();
    }
    render(){
        if(this.state.Error =="noError"){
        return(
            <div>
            <Helmet>
            <title>All Customers Posts</title>
        </Helmet>
        <div className="customer-posts-container">
            <div className="customer-posts-header">
            <span>Here are all the customers who need your services</span>
            </div>
            <div className="customer-posts-main">
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
