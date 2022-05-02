import React from "react"
import { CustomerNewPost } from "./customer-add-post";

export class CustomerPage extends React.Component{

    constructor(props) {
        super(props);
       
        this.state = {
            customerMain:true,
            askHelp:false,
            buyMaterial: false,
            yourPosts:false,
            displayCompanies:false
        }
    }

    componentDidMount(){
        this.ShowMain = this.ShowMain.bind(this);
        this.NewPost = this.NewPost.bind(this);
        this.ShowMatrial = this.ShowMatrial.bind(this);
        this.ShowPosts = this.ShowPosts.bind(this);
    }

    ShowMain(){
        this.setState({customerMain:true, askHelp:false, buyMaterial:false, yourPosts:false, displayCompanies:false})
    }

    NewPost(){
        this.setState({customerMain:false, askHelp:true, buyMaterial:false, yourPosts:false, displayCompanies:false})
    }

    ShowMatrial(){
        this.setState({customerMain:false, askHelp:false, buyMaterial:true, yourPosts:false, displayCompanies:false})
    }

    ShowPosts(){
        this.setState({customerMain:false, askHelp:false, buyMaterial:false, yourPosts:true, displayCompanies:false})
    }


    render(){
        if( this.state.customerMain){
        return( 
            <div className="customer-container">
            <div className="customer-page">
            <div className="customer-welcome"><span>
                Welcome Customer!
                </span> 
                </div>
                <div className="customer-contents">
                <span onClick={this.NewPost}>Ask Help</span>
                <span onClick={this.ShowMatrial}>Buy Material</span>
                <span onClick={this.ShowPosts}>Your Posts</span>
                </div>
                </div>
                </div>
        )
        }
        else if(this.state.askHelp){
            return(
                <CustomerNewPost/>
            )
        }
        else if(this.state.buyMaterial){
            return(
                <span>Buy</span>
            )
        }

        else if(this.state.yourPosts){
            return(
                <span>My post</span>
            )
        }
        
        
    
        

        
    }
}