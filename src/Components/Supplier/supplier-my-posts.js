import React from "react"
import { Helmet } from 'react-helmet'
import { callerSupplier } from "../../Services/api";
import ShowPosts from "../ReUseComponents/show-posts";
import PropTypes from "prop-types";


export class SupplierMyPosts extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        PostsData: []
    };
}

getSupplierPost(){
    callerSupplier.get(`/${localStorage.getItem("Id")}`, {})
    .then(res => {
            this.setState({
                PostsData : res.data
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
        if(this.props.Error == "error"){
            throw new Error(this.props.msg);
        }
        else{
            return(
            <ShowPosts PostsData={this.state.PostsData}/>
            )

}
}
}

SupplierMyPosts.propTypes={

    Error:PropTypes.string,
    msg:PropTypes.string
}