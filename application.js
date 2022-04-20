import React from "react"
import ReactDOM from "react-dom/client"
import { Footer } from "./footer.js"
import './header-footer.css';
import { Header } from "./header.js";
import './Main.css'



class Application extends React.Component{
  render(){    
    return(
      <div>
      <Header />
      <Footer />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />)

 