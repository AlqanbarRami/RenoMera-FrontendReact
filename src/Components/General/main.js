import React from "react"
import { Customer } from '../Customer/customer.js'
import { Construction } from '../Construction/construction.js'
import { Supplier } from '../Supplier/supplier.js'
import { ApiError } from "../../ApiError.js"
import { callerConstruction } from "../../Services/api.js"






export class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      state: true,
      customer: false,
      company: false,
      supplier: false,
      ErrorConnect:true,
    };
  }

  showCustomerRegister(){
    this.setState({
        state: false,
        customer: true,
        company: false,
        supplier: false
      })
  }

  showConstructionRegister(){
    this.setState({
        state: false,
        customer: false,
        company: true,
        supplier: false
      })
  }

  showSupplierRegister(){
    this.setState({
        state: false,
        customer: false,
        company: false,
        supplier: true
      })
  }

  SelectMenu() {
    return ( 
      <main className="container">
        <div className="sub-container">
          <div className="choose">
            <span>Please Choose One</span>
          </div>
          <div className="content">
            <span onClick={()=> this.showCustomerRegister()}>Customer</span>
            <span onClick={()=> this.showConstructionRegister()}>Construction</span>
            <span onClick={()=> this.showSupplierRegister()}>Supplier</span>
          </div>
        </div>
      </main>
    );
  }

  ShowRegisterOrSelectMenu() {
    if (this.state.state) {
   
      return (
        this.SelectMenu()
      )

  }
    else if (this.state.customer) {
      return (
        
           <Customer />

        
      )
    }
    else if (this.state.company) {
      return (
        <Construction />
      )
    }
    else if(this.state.supplier) {
      return (
        <Supplier />
      )
    }

  }

  check(){
    callerConstruction.get('/post',{}).then((res=>{
        if(res.request.status == 0){
                this.setState({ErrorConnect:true, state:false })
        }
        else{
          this.setState({ErrorConnect:false, state:true })
        }
  
    }))
}

componentDidMount(){
this.check();

}

  render() {
    if(this.state.ErrorConnect){
      return(
      <ApiError/>)
    }
    return (
      this.ShowRegisterOrSelectMenu()
    );
  }

}

