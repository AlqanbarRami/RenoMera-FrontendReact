import { callerCustomer} from "../../Services/api.js"
import React from "react"

export default class CustomerPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Posts: []
        };
    }

    getCustomersPost(){
        callerCustomer.get('/post', {})
        .then(res => {
            const data = res.data
            console.log(data);
            const info = data.map(u =>
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
                    Posts : info
                })
        })
        .catch((error)=>{
          console.log(error)
        });
    }

    componentDidMount(){
        this.getCustomersPost();
    }
    render(){
        return(
        <div className="customer-posts-container">
            <div className="customer-posts-header">
            <span>Here are all the customers who need your services</span>
            </div>
            <div className="customer-posts-main">
            {this.state.Posts}
            </div>
           
            </div>
        )
    }
}