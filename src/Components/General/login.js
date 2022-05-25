import React from "react"
import Helmet from "react-helmet";
import { callerRegister } from "../../Services/api.js";
import PropTypes from "prop-types";




export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            Name: '',
            Pass: '',
            msg: ''

        };
    }



    onFormSubmit(e) {
        e.preventDefault();
        const post = {
            UserName: this.state.Name,
            PassWord: this.state.Pass,
        };

        const valuesToLoop = Object.values(post);
        for (const value of valuesToLoop) {
            if (value == "") {
                this.setState({ msg: 'Username or password invaild. be sure there is no empty field' })
            }
            else {
                this.setState({ msg: 'Checking......' })
                callerRegister.post('/login', post).then((response) => {
                    if (response.request.status == 200) {
                        console.log("logged")
                        localStorage.setItem("logged", response.data.role);
                        localStorage.setItem("Id", response.data.id);
                        window.location.reload();
                    }
                })
                    .catch((error) => {
                        if (error.response.status == 400) {
                            this.setState({ msg: 'Username Or password invaild' })
                        }
                        if (error.response.status == 0) {
                            this.setState({ msg: 'Problem : connection with api' })
                        }

                    })

            }
        }
    }


    showLoginForm() {
        return (
            <div>
                <Helmet>
                    <title>RenoMera Login</title>
                </Helmet>
                <div className="login-container">
                    <div className="login-sub-container">
                        <div className="login-now">
                            <span> Login Now
                            </span>
                        </div>
                        <form className="login-input" onSubmit={this.onFormSubmit}>
                            <div className="username">
                                <input type="text" placeholder="Username" value={this.state.Name} onChange={(e) => this.setState({ Name: e.target.value })} />
                            </div>
                            <div className="password">
                                <input type="password" placeholder="Password" value={this.state.Pass} onChange={(e) => this.setState({ Pass: e.target.value })} />
                            </div>
                            <span>{this.state.msg}</span>
                            <div className="submit-button-div">
                                <button type="submit" className="login-button">login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.Error == 'error') {
            throw new Error(this.props.msg);
        }
        return (
            this.showLoginForm()
        )

    }


}


Login.propTypes={
    Error:PropTypes.bool,
    msg:PropTypes.string
}