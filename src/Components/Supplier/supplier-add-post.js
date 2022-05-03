import React from "react";
import { callerSupplier } from "../../Services/api";


export class SupplierNewPost extends React.Component{
    constructor(props){
        super(props)
        this.onCreatePost = this.onCreatePost.bind(this)
        this.state = {
            title: '',
            Description:'',
            Image:'',
            City:'',
            Price: '',
            Phone: '',
        };
    }

        onCreatePost(e){
        e.preventDefault();
        const postData = {
            title:this.state.title,
            Description:this.state.Description,
            Image:this.state.Image,
            City:this.state.City,
            Price: this.state.Price,
            Phone:this.state.Phone,
        };
        callerSupplier.post('/newpost', postData).then((response)=>{
            if(response.status == 200){
                console.log("Ok")
                window.location.reload();
            } 
        });
       
    }    
    
    render(){     
    return(
        <div className="post-container">
        <div className="supplier-post-container">
            <div className="describe-supplier">
                <span>What will you sell?</span>
            </div>
            <div className="supplier-post-contents">
            <form onSubmit={this.onCreatePost}>
                <div>
                    <input type="text" value={this.state.title}  onChange={(e)=>this.setState({title: e.target.value})} placeholder="Title"/>
                </div>
                <div>
                    <input type="text" value={this.state.Description}  onChange={(e)=>this.setState({Description: e.target.value})} placeholder="Description"/>
                </div>
                <div>
                    <input type="text" value={this.state.Image}  onChange={(e)=>this.setState({Image: e.target.value})} placeholder="Image URL"/>
                </div>
                <div>
                    <input type="text" value={this.state.City}  onChange={(e)=>this.setState({City: e.target.value})} placeholder="City"/>
                </div>
                <div>
                    <input type="text" value={this.state.Price}  onChange={(e)=>this.setState({Price: e.target.value})} placeholder="Price"/>
                </div>
                <div>
                    <input type="text" value={this.state.Phone}  onChange={(e)=>this.setState({Phone: e.target.value})} placeholder="Phone Number"/>
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

    )
    }
}