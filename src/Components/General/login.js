import React from "react"
import {ConstructionPage}  from "../Construction/constructionpage.js";
import {CustomerPage} from "../Customer/customerpage.js";
import  {SupplierPage}  from "../Supplier/supplierpage.js";



export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.CheckUser = this.CheckUser.bind(this)
        this.userInfo = JSON.parse(localStorage.getItem('user'))
        this.state = {
            construction : false,
            supplier : false,
            customer : false,
        
        }
    }

    showConstruction(){
        this.setState({  construction : true,
            supplier : false,
            customer : false
            })
    }

    showSupplier(){
        this.setState({  construction : false,
            supplier : true,
            customer : false
            })
    }

    showCustomer(){
        this.setState({  construction : false,
            supplier : false,
            customer : true
            });
    }

    refresh() {
        localStorage.clear();
        window.location.reload();
      }

    CheckUser(){
        const user = document.getElementById("user").value;
        const pass = document.getElementById("pass").value;
        
        if( (user == this.userInfo.userName) && (pass == this.userInfo.userPassword) ){
            if(this.userInfo.role == "construction"){
                this.refresh();
                localStorage.setItem("logged","construction")
                this.showConstruction();
            }
            else if(this.userInfo.role == "supplier"){
                this.refresh();
                localStorage.setItem("logged","supplier")
                this.showSupplier();

            }
            else if(this.userInfo.role == "customer"){
                this.refresh();
                localStorage.setItem("logged","customer")
                this.showCustomer();

            }
        }
  
    }

    showLoginForm(){
        return(
            <div className="login-container">
                <div className="login-sub-container">
                    <div className="login-now">
                        <span> Login Now
                        </span>
                    </div>
                    <div className="login-input">
                        <input type="text" id="user" placeholder="User"></input>
                        <input type="password" id="pass" placeholder="Password"></input>
                        <button className="login-button" onClick={this.CheckUser}>Login</button>
                    </div>
                </div>
                </div>  
        )
        
    }

    render(){
        if(this.state.customer){
            return(
                <CustomerPage/>
            )
        }
        if(this.state.construction){
            return(
                <ConstructionPage/>
            )
        }
        if(this.state.supplier){
            return(
                <SupplierPage/>
            )
        }
        else{
            return(
                this.showLoginForm()      
                 )
            }
        }

    
}

