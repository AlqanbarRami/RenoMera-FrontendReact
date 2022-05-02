import React from "react";
import { useState } from "react"

export function CustomerNewPost(props){
    const[Title,setTitle] = useState('');
    const[Description, setDescription] = useState('');
    const[City, setCity] = useState('');
    const[Image,setImage]= useState('');
    const[PhoneNumber, setPhoneNumber] = useState('');

    function onCreatePost(e){
        e.preventDefault();
        const postData = {
            Title,
            Description,
            City,
            Image,
            PhoneNumber,
        };

        callerCustomer.post('/newpost', postData).then((response)=>{
            console.log(response.status);
        });

        
    }
    return(
        <div className="post-container">
        <div className="customer-post-container">
            <div className="describe-customer">
                <span>Describe Your Problem</span>
            </div>
            <div className="customer-post-contents">
            <form onSubmit={onCreatePost}>
                <div>
                    <input type="text" value={Title}  onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                </div>
                <div>
                    <input type="text" value={Description}  onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/>
                </div>
                <div>
                    <input type="text" value={City}  onChange={(e)=>setCity(e.target.value)} placeholder="City" />
                </div>
                <div>
                    <input type="text" value={Image}  onChange={(e)=>setImage(e.target.value)} placeholder="Image URL"/>
                </div>
                <div>
                    <input type="text" value={PhoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)} placeholder="Phone Number"/>
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