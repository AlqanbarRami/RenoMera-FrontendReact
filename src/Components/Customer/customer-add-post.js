import React from "react";
import { callerCustomer } from "../../Services/api";
import {Helmet} from "react-helmet";


export class CustomerNewPost extends React.Component{
    constructor(props){
        super(props)
        this.onCreatePost = this.onCreatePost.bind(this)
        this.state = {
            Title: '',
            Description:'',
            City:'',
            Image:'',
            PhoneNumber: '',
        }
    }

        onCreatePost(e){
        e.preventDefault();
        const postData = {
            Title:this.state.Title,
            Description:this.state.Description,
            City:this.state.City,
            Image:this.state.Image,
            PhoneNumber:this.state.PhoneNumber,
        };
        callerCustomer.post('/newpost', postData).then((response)=>{
            if(response.status == 200){
                console.log("Ok" +  this.state.showHome)
                window.location.reload();
            } 
        });
       
    }


    
        render(){
        return( 
            <div>
            <Helmet>
            <title>Customer : Add New Post</title>
        </Helmet>
            <div className="post-container">
            <div className="customer-post-container">
                <div className="describe-customer">
                    <span>Describe Your Problem</span>
                </div>
                <div className="customer-post-contents">
                <form onSubmit={this.onCreatePost}>
                    <div>
                        <input type="text" value={this.state.Title}  onChange={(e)=>this.setState({Title: e.target.value})} placeholder="Title"/>
                    </div>
                    <div>
                        <input type="text" value={this.state.Description}  onChange={(e)=>this.setState({Description: e.target.value})} placeholder="Description"/>
                    </div>
                    <div>
                        <input type="text" value={this.state.City}   onChange={(e)=>this.setState({City: e.target.value})} placeholder="City" />
                    </div>
                    <div>
                        <input type="text" value={this.state.Image}   onChange={(e)=>this.setState({Image: e.target.value})} placeholder="Image URL"/>
                    </div>
                    <div>
                        <input type="text" value={this.state.PhoneNumber}   onChange={(e)=>this.setState({PhoneNumber: e.target.value})} placeholder="Phone Number"/>
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