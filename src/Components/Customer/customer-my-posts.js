import React from "react"
import Helmet from "react-helmet"
import { callerCustomer } from "../../Services/api";
import ShowPosts from "../ReUseComponents/show-posts";
import PropTypes from "prop-types";

export class CustomerMyPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            PostsData: []
        };
    }
    getCustomersPost(){
        callerCustomer.get(`/${localStorage.getItem("Id")}`, {})
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
        this.getCustomersPost();
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

CustomerMyPosts.propTypes = {
    Error: PropTypes.string,
    msg: PropTypes.string
}