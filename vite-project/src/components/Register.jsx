import { useState } from 'react';
import axios from "axios";
export default function Register(){
    const [user,setUser] = useState({});
    const [error, setError] = useState();
    const handleSubmit = async () =>{
        try{
            //const url = "http://localhost:8080/api/users/register"
            const url = "https://portfolio-web-merncafe.vercel.app/api/users/register"
            const result = await axios.post(url,user);
            setError("Data saved successfully");
        }catch(err){
            console.log(err);
            setError("Something went wrong");
        }
    };
    return(
        <>
        <h2>Registration form</h2>
        {error}
        <p>
            <input type="text"
             placeholder="First Name" 
            onChange={(e) => setUser({ ...user, firstName: e.target.value})}
            />
        </p>
        <p>
            <input type="text" 
            placeholder="Last Name"
            onChange={(e) => setUser({ ...user, lastName: e.target.value})}
            />
        </p>
        <p>
            <input type="text" 
            placeholder="Email Address" 
            onChange={(e) => setUser({ ...user, emailAddress: e.target.value})}
            />
        </p>
        <p>
            <input type="password" 
            placeholder="New" 
            onChange={(e) => setUser({ ...user, password: e.target.value})}
             />
        </p>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
