import React from "react"
import Helmet from "react-helmet";
import CustomerPosts from "../Customer/customer-posts";
import SupplierPosts from "../Supplier/supplier-posts";
import { ConstructionNewPost } from "./construction-add-post"; 
import { ConstructionMyPosts } from "./construction-my-posts";

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
        this.setState({constructionMain:false, findTask:false, findMaterial:false, displayMaterial:true, yourPosts:false})
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
            <div>
            <Helmet>
            <title>Welcome Construction</title>
        </Helmet>
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
                </div>
        )
        }
        else if(this.state.findTask){
            return(
            <CustomerPosts />
            )
        }
        else if(this.state.findMaterial){
            return(
            <ConstructionNewPost/>
            )
        }
        else if(this.state.displayMaterial){
            return(
            <SupplierPosts/>
            )
        }
        else if(this.state.yourPosts){
            return(
                <ConstructionMyPosts/>
            )
        }

    }
}