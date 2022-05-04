import React from "react";
import Helmet from "react-helmet";
import { callerConstruction } from "../../Services/api";

export class ConstructionNewPost extends React.Component{
    constructor(props){
        super(props)
        this.onCreatePost = this.onCreatePost.bind(this)
        this.state = {
            Title:'',
            Description: '',
            Image: '',
            Phone: ''
        };
    }


    onCreatePost(e){
        e.preventDefault();
        const postData = {
            Title: this.state.Title,
            Description: this.state.Description,
            Image: this.state.Image,
            Phone: this.state.Phone,
        };

        callerConstruction.post('/newpost', postData).then((response)=>{
            console.log(response.status);
            window.location.reload();
        });
        
    }

    render(){
    return(
        <div>
        <Helmet>
        <title>Construction Add New Post</title>
    </Helmet>
        <div className="post-container">
        <div className="construction-post-container">
            <div className="describe-construction">
                <span>Describe What You Need</span>
            </div>
            <div className="construction-post-contents">
            <form onSubmit={this.onCreatePost}>
                <div>
                    <input type="text" value={this.state.Title}  onChange={(e)=>this.setState({Title: e.target.value})} placeholder="Title"/>
                </div>
                <div>
                    <input type="text"  value={this.state.Description}  onChange={(e)=>this.setState({Description: e.target.value})} placeholder="Description"/>
                </div>
                <div>
                    <input type="text"  value={this.state.Image}  onChange={(e)=>this.setState({Image: e.target.value})} placeholder="Image URL"/>
                </div>
                <div>
                    <input type="text"  value={this.state.Phone}  onChange={(e)=>this.setState({Phone: e.target.value})} placeholder="Phone Number"/>
                </div>
                <div>
                <div className="submit-add-button">
                <button type="submit">Add</button>
                </div>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>

    )
    }
}