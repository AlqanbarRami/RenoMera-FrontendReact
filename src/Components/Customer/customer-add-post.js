import React from "react";
import { callerCustomer } from "../../Services/api";
import { Helmet } from "react-helmet";
import { ErrorBoundary } from "../../errorBoundary";

import { CustomerMyPosts } from "./customer-my-posts";

export class CustomerNewPost extends React.Component {
    constructor(props) {
        super(props)
        this.onCreatePost = this.onCreatePost.bind(this)
        this.state = {
            Title: '',
            Description: '',
            City: '',
            Image: '',
            PhoneNumber: '',
            Error: "",
            msg: ''
        }
    }

    onCreatePost(e) {
        e.preventDefault();
        let myerr = false;
        const postData = {
            Title: this.state.Title,
            userId: localStorage.getItem('Id'),
            Description: this.state.Description,
            City: this.state.City,
            Image: this.state.Image,
            PhoneNumber: this.state.PhoneNumber,
        };
        const valuesToLoop = Object.values(postData);
        for (const value of valuesToLoop) {
            if (value == "" ) {
                this.setState({ Error: "error", msg:"Please fill fields"})
                myerr = true;
            }
            else if(isNaN(postData.PhoneNumber)){
                this.setState({Error: "error", msg:'Phonenumber should be numbers'})
                myerr = true;

            }
            else{
                this.setState({Error:"noError"})
            }
        }

        if (myerr == false ) {
            console.log(this.state.Error)
            callerCustomer.post('/newpost', postData).then((response) => {
                if (response.status == 200) {
                    console.log("Ok!")
                }
            });
        }

    }



    render() {
        if (this.state.Error == "error" ) {
            return (
                <ErrorBoundary>
                    <CustomerMyPosts Error={this.state.Error} msg={this.state.msg} />
                </ErrorBoundary>
            )
        }
        if (this.state.Error == "noError" ) {
            return (
                    <CustomerMyPosts />
            )
        }
        else {
            return (
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
                                        <input type="text" value={this.state.Title} onChange={(e) => this.setState({ Title: e.target.value })} placeholder="Title" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.Description} onChange={(e) => this.setState({ Description: e.target.value })} placeholder="Description" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.City} onChange={(e) => this.setState({ City: e.target.value })} placeholder="City" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.Image} onChange={(e) => this.setState({ Image: e.target.value })} placeholder="Image URL" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.PhoneNumber} onChange={(e) => this.setState({ PhoneNumber: e.target.value })} placeholder="Phone Number" />
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