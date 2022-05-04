import React from "react"
import ReactDOM from "react-dom/client"
import Helmet from "react-helmet";
import { Footer } from "./Components/General/footer.js"
import { Header } from "./Components/General/header.js";



class Application extends React.Component{
  render(){    
    return(
      <div>
                    <Helmet>
                    <title>RenoMera: App For Alla</title>
                </Helmet>
      <Header />
      <Footer />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Application />)

 