import React from "react";
import { useState } from "react"

export function SupplierNewPost(props){
    const[title,setTitle] = useState('');
    const[Description, setDescription] = useState('');
    const[Image,setImage]= useState('');
    const[City,setCity]= useState('');
    const[Price,setPrice]= useState('');
    const[Phone, setPhone] = useState('');

    
    function onCreatePost(e){
        e.preventDefault();
        const postData = {
            title,
            Description,
            Image,
            City,
            Price,
            Phone,
        };


        callerCustomer.post('/newpost', postData).then((response)=>{
            console.log(response.status);
        });

        
    }
    return(
        <div className="post-container">
        <div className="supplier-post-container">
            <div className="describe-supplier">
                <span>Describe What You Need</span>
            </div>
            <div className="supplier-post-contents">
            <form onSubmit={onCreatePost}>
                <div>
                    <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                </div>
                <div>
                    <input type="text" value={Description}  onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/>
                </div>
                <div>
                    <input type="text" value={Image}  onChange={(e)=>setImage(e.target.value)} placeholder="Image URL"/>
                </div>
                <div>
                    <input type="text" value={City}  onChange={(e)=>setCity(e.target.value)} placeholder="City"/>
                </div>
                <div>
                    <input type="text" value={Price}  onChange={(e)=>setPrice(e.target.value)} placeholder="Price"/>
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