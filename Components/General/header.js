import React from "react"
import { About } from "./about.js";
import { ConstructionPage } from "../../Construction/constructionpage.js";
import { Contact } from "./contact.js";
import { CustomerPage } from "../../customerpage.js";
import { Login } from "../../../login.js";
import { Main } from './Main.js.js.js.js'
import { SupplierPage } from "../../../supplierpage.js";



export class Header extends React.Component {
  constructor(props) {
    super(props)
    this.user = localStorage.getItem('logged');
    this.state = {
      main: true,
      about: false,
      contact: false,
      login: false,
      homebutton : "",
      loginbutton : "Login"

    };
  }

  showHome() {
    this.setState({
      main: true, login: false, contact: false, about: false, welcome: false
    })
  }

  hideHome() {
    this.setState({
      main: false, login: false, contact: false, about: false, welcome: true
    })
  }

  showAbout() {
    this.setState({
      main: false, contact: false, about: true, login : false , welcome: false
    })
  }

  showContact() {
    this.setState({
      main: false, contact: true, about: false, login : false , welcome: false
    })
  }

  showLogin() {
    this.setState({
      main: false, contact: false, about: false, login : true , welcome: false
    })
  }


  componentDidMount() {
    if (this.user === null) {
      this.setState({homebutton: "Home"})
    }
    else if(this.user !== null){
      this.setState({loginbutton:"Logout"})
      if(this.user == "customer"){
      this.setState({homebutton: "Customer"})
      }
      if(this.user == "construction"){
        this.setState({homebutton: "Construction"})
      }
      if(this.user == "supplier"){
        this.setState({homebutton: "Supplier"})
      }
  
  }
}

  Logout() {
    localStorage.clear();
    window.location.reload();
  }

  showLoginOrLogout() {
    if (this.user === null) {
      return (
        <span onClick={() => this.showLogin()} className='right'>{this.state.loginbutton}</span>
      )
    }
    else {
      return (
        <span onClick={() => this.Logout()} className='right'>{this.state.loginbutton}</span>

      )
    }
  }

  showHeader() {
    return (
      <header className='header'>
        <ul className='nav'>
          <li onClick={() => this.showHome()}>{this.state.homebutton}</li>
          <li onClick={() => this.showAbout()} >About</li>
          <li onClick={() => this.showContact()} >Contact</li>
        </ul>
        {this.showLoginOrLogout()}
      </header>
    )
  }

  showMainOrLogin() {
    if (this.state.main) {
      if (this.user === null) {
        return (
          <div>{this.showHeader()}
            <Main />
          </div>
        );
      }
      else if (this.user !== null) {
        if(this.user == "customer"){
        return (
          <div>
            {this.showHeader()}
            <CustomerPage/>
          </div>
        )
      }
      if(this.user == "construction"){
        return (
          <div>
            {this.showHeader()}
            <ConstructionPage/>
          </div>
        )
      }
      if(this.user == "supplier"){
        return (
          <div>
            {this.showHeader()}
            <SupplierPage/>
          </div>
        )
      }
    }
    }
    else if (this.state.login) {
      return (
        <div>
          {this.showHeader()}
          <Login />
        </div>
      );
    }
    else if (this.state.contact) {
      return (
        <div>
          {this.showHeader()}
          <Contact />
        </div>
      )
    }
    else if (this.state.about) {
      return (
        <div>
          {this.showHeader()}
          <About />
        </div>
      )
    }
  }

  render() {
    return (
      this.showMainOrLogin()
    );
  }
}







