import { callerConstruction} from "../../Services/api.js"
import React from "react"
import Helmet from "react-helmet";
import PropTypes from 'prop-types';
import { ApiError } from "../../ApiError.js";


export default class ConstructionPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Posts: [],
            Error: ""
        };
    }
 
    getConnect(){
        callerConstruction.get('/post', {})
        .then(res => {
            let info;
            if ( res.request.status != 0) {
            this.setState({Error:"noError"})          
            const data = res.data
             info = data.map(u =>
                <div key={u.customerPostId} className="construction-posts">
                <div className="construction-posts-image-div">
                <img className="construction-posts-image" src={u.image} alt="image"/>
                </div>
                <div className="construction-posts-contents">
                <div className="construction-posts-title">
                <span>{u.title}</span>
                </div>
                <div className="construction-posts-description">
                <p>{u.description}</p>
                </div>
                <div className="construction-posts-contact">
                <span> Phone : {u.phone}</span>
                </div>             
                </div>
                </div>
                )
                this.setState({Posts:info})
            }
            else{
                return(false)
            }
         
        })
    }

    getConstructionPost(){
  
        if(this.getConnect() == false){
            this.setState({Error:"error"})
        }
        else{
            return(this.state.Posts)
        }
    }

    componentDidMount(){
      this.getConstructionPost()
    }
    render(){
        if(this.state.Error =="noError"){
        return(
            <div>
            <Helmet>
            <title>All Construction Posts</title>
        </Helmet>
        <div className="construction-posts-container">
            <div className="construction-posts-header">
            <span>Here are all the customers who need to buy something!</span>
            </div>
            <div className="construction-posts-main">
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
