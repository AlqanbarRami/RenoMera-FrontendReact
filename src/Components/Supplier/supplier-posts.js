import { callerSupplier} from "../../Services/api.js"
import React from "react"
import Helmet from "react-helmet";

export default class SupplierPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Posts: []
        };
    }
    

    getSupplierPost(){
        callerSupplier.get('/post', {})
        .then(res => {
            const data = res.data
            console.log(data);
            const info = data.map(u =>
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
        })
        .catch((error)=>{
          console.log(error)
        });
    }

    componentDidMount(){
        this.getSupplierPost();
    }
    render(){
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
}