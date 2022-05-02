import { useState } from "react"

export default function CustomerNewPost(props){
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
        <div>
            <form onSubmit={onCreatePost}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={Title}  onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={Description}  onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" value={City}  onChange={(e)=>setCity(e.target.value)}/>
                </div>
                <div>
                    <label>Image Url: </label>
                    <input type="text" value={Image}  onChange={(e)=>setImage(e.target.value)}/>
                </div>
                <div>
                    <label>PhoneNumber: </label>
                    <input type="text" value={PhoneNumber}  onChange={(e)=>setPhoneNumber(e.target.value)}/>
                </div>
                <div>
                <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}