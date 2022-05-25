
import React from "react"
import Helmet from "react-helmet";
import { ErrorBoundary } from "../../errorBoundary.js";
import { callerRegister } from "../../Services/api.js";
import {Login}   from '../General/login.js'

export class Customer extends React.Component{
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            Role : 'customer',
            UserName: '',
            PassWord: '',
            Error : false,
            comp : true,
            msg:''
        }
    }


    onFormSubmit(e) {
        e.preventDefault();
        const postData = {
            Role: this.state.Role,
            UserName: this.state.UserName,
            PassWord: this.state.PassWord
        };
        const valuesToLoop = Object.values(postData);
        for (const value of valuesToLoop) {
            if (value == "") {
                this.setState({ Error: "error" })
                this.setState({msg:'Please fill fields'})
            }
            else{
                callerRegister.post('/register', postData).then((response) => {
                    if (response.status == 200) {
                        this.setState({Error: "noError"})
                    }
                })
                .catch((error) => {
                    if(error.response.status == 0){
                        this.setState({ Error:'error', msg: 'Problem : connection with api' })
                        }
                        if(error.response.status == 400){
                            this.setState({ Error:'error', msg: 'Problem : You need a strong password Ex: Abvc123!K? OR You need another username' })
                            }
                })
            }
            
        }      
    }

    render() {
        if (this.state.Error == "error" ) {
            return (
                <ErrorBoundary>
                    <Login Error={this.state.Error} msg={this.state.msg} />
                </ErrorBoundary>
            )
        }
        if (this.state.Error == "noError" ) {
            return (
                    <Login />
            )
        }
        if(this.state.comp){
        return (
            <div>
            <Helmet>
            <title>Register New customer</title>
        </Helmet>
            <div className="register-container">
                     <div className="register-div">
                     <div className="choose">
                    <span>Register new customer</span>
                     </div>
                        <form className="form" onSubmit={this.onFormSubmit}>
                            <div className="username">
                                <input type="text" placeholder="Username" value={this.state.UserName} onChange={(e) => this.setState({ UserName: e.target.value })} />
                            </div>
                            <div className="password">
                                <input type="password" placeholder="Password" value={this.state.PassWord} onChange={(e) => this.setState({ PassWord: e.target.value })} />
                            </div>
                            <span>{this.state.msg}</span>
                            <div className="submit-button-div">
                                <button type="submit" className="submit-button">Register</button>
                            </div>
                        </form>
                  </div>
            </div>
            </div>
        );
        }
     
    }
}
