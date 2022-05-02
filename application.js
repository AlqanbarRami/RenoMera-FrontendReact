import React from "react"
import ReactDOM from "react-dom/client"
import { Footer } from "./footer.js"
import { Header } from "./header.js";



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

 