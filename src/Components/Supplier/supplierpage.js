import React from "react"
import { SupplierNewPost } from "./supplier-add-post";

export class SupplierPage extends React.Component{
    constructor(props) {
        super(props);   
        this.state = {
            supplierMain:true,
            sellMatrial:false,
            findBuyer: false,
            yourPosts:false
        }
    }

    ShowMain(){
        this.setState({supplierMain:true, sellMatrial:false, findBuyer:false,yourPosts:false})
    }

    SellMatrial(){
        this.setState({supplierMain:false, sellMatrial:true, findBuyer:false, yourPosts:false})
    }
    FindBuyer(){
        this.setState({supplierMain:false, sellMatrial:false, findBuyer:true, yourPosts:false})
    }

    YourPosts(){
        this.setState({supplierMain:false, sellMatrial:false, findBuyer:false, yourPosts:true})
    }

    componentDidMount(){
        this.ShowMain = this.ShowMain.bind(this);
        this.SellMatrial = this.SellMatrial.bind(this);
        this.FindBuyer = this.FindBuyer.bind(this);
        this.YourPosts = this.YourPosts.bind(this);
    }
    render(){
        if(this.state.supplierMain){
        return(
            <div className="supplier-container">
            <div className="supplier-page">
            <div className="supplier-welcome"><span>
                Welcome Supplier!
                </span> 
                </div>
                <div className="supplier-contents">
                <span onClick={this.SellMatrial}>Sell Material</span>
                <span onClick={this.FindBuyer}>Find buyer</span>
                <span onClick={this.YourPosts}>You Posts</span>
                </div>
                </div>
                </div>
        )
        }
        if(this.state.sellMatrial){
            return(
                <SupplierNewPost/>
            )
        }
        if(this.state.findBuyer){
            return(
                <span>find Buyer</span>
            )
        }
        if(this.state.yourPosts){
            return(
                <span>Your Posts</span>
            )
        }
    }
    
}