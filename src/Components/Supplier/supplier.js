
import React from "react"
import {Login}   from '../General/login.js'

export class Supplier  extends React.Component{
    userInfo;

    constructor(props) {
        super(props);
        this.eventuserName = this.eventuserName.bind(this);
        this.eventPassword = this.eventPassword.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            userName: '',
            userPassword: '',
            role : 'supplier',
            comp : true
        }
    }

    
    eventuserName(event) {
        this.setState({ userName : event.target.value })
    }

    eventPassword(event) {
        this.setState({ userPassword: event.target.value })
    }

    onFormSubmit(event) {
      event.preventDefault();
      this.setState({comp:false})

    }


    componentDidMount() {
        this.userInfo = JSON.parse(sessionStorage.getItem('user'));
        sessionStorage.clear();
        if (sessionStorage.getItem('user')) {
            this.setState({
                userName: this.userInfo.userName,
                userPassword: this.userInfo.userPassword,
                role: this.userInfo.role,
            })
        } else {
            this.setState({
                userName: '',
                userPassword: '',
                role: 'supplier'
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        {if(this.state.comp){
        return (
                <div className="register-container">
                <div className="register-div">
                <div className="choose">
               <span>Register a new supplier</span>
                </div>
                   <form className="form" onSubmit={this.onFormSubmit}>
                       <div className="username">
                           <input type="text" placeholder="Username" value={this.state.userName} onChange={this.eventuserName} />
                       </div>
                       <div className="password">
                           <input type="password" placeholder="Password" value={this.state.userPassword} onChange={this.eventPassword} />
                       </div>
                       <div className="submit-button-div">
                           <button type="submit" className="submit-button">Register</button>
                       </div>
                   </form>
             </div>
       </div>
        );
        }
        else{
            return(
                <Login />
            );
        }
    }
    }
}
