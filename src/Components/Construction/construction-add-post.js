import React from "react";
import { useState } from "react"

export function ConstructionNewPost(props){
    const[Title,setTitle] = useState('');
    const[Description, setDescription] = useState('');
    const[Image,setImage]= useState('');
    const[Phone, setPhone] = useState('');

    function onCreatePost(e){
        e.preventDefault();
        const postData = {
            Title,
            Description,
            Image,
            Phone,
        };

        callerCustomer.post('/newpost', postData).then((response)=>{
            console.log(response.status);
        });

        
    }
    return(
        <div className="post-container">
        <div className="construction-post-container">
            <div className="describe-construction">
                <span>Describe What You Need</span>
            </div>
            <div className="construction-post-contents">
            <form onSubmit={onCreatePost}>
                <div>
                    <input type="text" value={Title}  onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                </div>
                <div>
                    <input type="text" value={Description}  onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/>
                </div>
                <div>
                    <input type="text" value={Image}  onChange={(e)=>setImage(e.target.value)} placeholder="Image URL"/>
                </div>
                <div>
                    <input type="text" value={Phone}  onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number"/>
                </div>
                <div>
                <div className="submit-add-button">
                <button type="submit">Add</button>
                </div>
                </div>
            </form>
        </div>
        </div>
        </div>

    )
}