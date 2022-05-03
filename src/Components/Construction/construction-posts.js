import { callerConstruction} from "../../Services/api.js"
import React from "react"

export default class ConstructionPosts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Posts: []
        };
    }
 

    getConstructionPost(){
        callerConstruction.get('/post', {})
        .then(res => {
            const data = res.data
            console.log(data);
            const info = data.map(u =>
                <div key={u.customerPostId} className="construction-posts">
                <div className="construction-posts-image-div">
                <img className="construction-posts-image" src={u.image} alt="image"/>
                </div>
                <div className="construction-posts-contents">
                <div className="construction-posts-title">
                <span>{u.title}</span>
                </div>
                <div className="construction-posts-description">
                <p>{u.description}</p>
                </div>
                <div className="construction-posts-contact">
                <span> Phone : {u.phone}</span>
                </div>             
                </div>
                </div>
                )
                this.setState({
                    Posts : info
                })
        })
        .catch((error)=>{
          console.log(error)
        });
    }

    componentDidMount(){
        this.getConstructionPost();
    }
    render(){
        return(
        <div className="construction-posts-container">
            <div className="construction-posts-header">
            <span>Here are all the customers who need to buy something!</span>
            </div>
            <div className="construction-posts-main">
            {this.state.Posts}
            </div>
           
            </div>
        )
    }
}