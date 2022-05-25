import React from "react";
import Helmet from "react-helmet";
import { ErrorBoundary } from "../../errorBoundary";
import { callerConstruction } from "../../Services/api";
import { ConstructionMyPosts } from "./construction-my-posts";

export class ConstructionNewPost extends React.Component{
    constructor(props){
        super(props)
        this.onCreatePost = this.onCreatePost.bind(this)
        this.state = {
            Title:'',
            Description: '',
            Image: '',
            Phone: '',
            Error: "",
            msg:''
        };
    }


    onCreatePost(e){
        e.preventDefault();
        let myerr = false;
        const postData = {
            Title: this.state.Title,
            userId: localStorage.getItem('Id'),
            Description: this.state.Description,
            Image: this.state.Image,
            Phone: this.state.Phone,
        };
        const valuesToLoop = Object.values(postData);
        for (const value of valuesToLoop) {
            if (value == "" ) {
                this.setState({ Error: "error", msg:"Please fill fields"})
                myerr = true;
            }
            else if(isNaN(postData.Phone)){
                this.setState({Error: "error", msg:'Phonenumber should be numbers'})
                myerr = true;

            }
            else{
                this.setState({Error:"noError"})
            }
        }

        if (myerr == false ) {
            console.log(this.state.Error)
            callerConstruction.post('/newpost', postData).then((response) => {
                if (response.status == 200) {
                    console.log("Ok")
                }
            });
        }
    }

    render(){
        if (this.state.Error == "error" ) {
            return (
                <ErrorBoundary>
                    <ConstructionMyPosts Error={this.state.Error} msg={this.state.msg} />
                </ErrorBoundary>
            )
        }
        if (this.state.Error == "noError" ) {
            return (
                    <ConstructionMyPosts />
            )
        }
        else {
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
}

