import React from "react"
import  "./showPosts.css"
import PropTypes from "prop-types";
import Helmet from "react-helmet";

export default class ShowPosts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }

    }

    
    getMyData(){
        let getTheKeys = [];
        let filterTheKeys = [];
        let info = [];
        let mainpush=[];
        let dataLength = this.props.PostsData.length;
        let data = this.props.PostsData;
        const valuesToArray = data.map( Object.values )
        for(let i = 0 ; i< dataLength; i++){
            //get number of keys and names of keys inside our data
            for(const key in data[i]){
               getTheKeys.push(key);
           }
       }
       // Let's filter them
        filterTheKeys = [...new Set(getTheKeys)];

       for(let k = 0; k < dataLength; k++){
           for(let i = 0; i< filterTheKeys.length; i++){
                info.push(<div className="content-showPosts">
                    <strong>{filterTheKeys[i]} : </strong> 
                    <span>{valuesToArray[k][i]}</span>
                    </div>
                    )
                if(i== filterTheKeys.length-1){
                    mainpush.push(<div className="sub-container-showPosts">
                        <div className="header-shwoPosts">
                            <span> Your Post</span>
                        </div>
                        <div className="contents-showPosts">
                        {info}
                        </div>
                    </div>)
                    info = [];
                   }
           }
        }
         
       

       return(
           <div className="container-showPosts">
               {mainpush}
           </div>
       )


    }

     componentDidMount(){
         this.getMyData();
    }

    render(){
      if(this.state.show){
        return(
            this.getMyData()
         )
      }
      
    }

        

        
    
}

ShowPosts.propTypes = {
    PostsData:PropTypes.array
}