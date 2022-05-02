import React from "react"
import { ConstructionNewPost } from "./construction-add-post"; 

export class ConstructionPage extends React.Component{
    constructor(props) {
        super(props);   
        this.state = {
            constructionMain:true,
            findTask:false,
            findMaterial: false,
            displayMaterial:false,
            yourPosts:false
        }
    }

    ShowMain(){
        this.setState({constructionMain:true, findTask:false, findMaterial:false, displayMaterial:false, yourPosts:false})
    }

    FindTask(){
        this.setState({constructionMain:false, findTask:true, findMaterial:false, displayMaterial:false, yourPosts:false})
    }

    FindMaterial(){
        this.setState({constructionMain:false, findTask:false, findMaterial:true, displayMaterial:false, yourPosts:false})
    }

    DisplayMaterial(){
        this.setState({constructionMain:false, findTask:false, findMaterial:true, displayMaterial:true, yourPosts:false})
    }

    YourPosts(){
        this.setState({constructionMain:false, findTask:false, findMaterial:false, displayMaterial:false, yourPosts:true})
    }
    
    componentDidMount(){
        this.ShowMain = this.ShowMain.bind(this);
        this.FindTask = this.FindTask.bind(this);
        this.DisplayMaterial = this.DisplayMaterial.bind(this);
        this.FindMaterial = this.FindMaterial.bind(this);
        this.YourPosts = this.YourPosts.bind(this);
    }

    render(){
        if(this.state.constructionMain){
        return(
            <div className="construction-container">
            <div className="construction-page">
            <div className="construction-welcome"><span>
                Welcome Company!
                </span> 
                </div>
                <div className="construction-contents">
                <span onClick={this.FindTask}>Find Task</span>
                <span onClick={this.FindMaterial}>Ask for Material</span>
                <span onClick={this.DisplayMaterial}>Display Material</span>
                <span onClick={this.YourPosts}>Your Posts</span>
                </div>
                </div>
                </div>
        )
        }
        else if(this.state.findTask){
            return(
            <span>Display Tasks</span>
            )
        }
        else if(this.state.findMaterial){
            return(
            <ConstructionNewPost/>
            )
        }
        else if(this.state.displayMaterial){
            return(
            <span>Display Material</span>
            )
        }
        else if(this.state.yourPosts){
            return(
            <span>My post</span>
            )
        }

    }
}