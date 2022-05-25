import React from "react"
import { callerConstruction } from "../../Services/api";
import ShowPosts from "../ReUseComponents/show-posts";
import PropTypes from "prop-types";


export class ConstructionMyPosts extends React.Component{
 
    constructor(props){
        super(props)
    this.state = {
        PostsData: []
    };
}

getConstructionPost(){
    callerConstruction.get(`/${localStorage.getItem("Id")}`, {})
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
    this.getConstructionPost();
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

ConstructionMyPosts.propTypes={

    Error:PropTypes.string,
    msg:PropTypes.string
}