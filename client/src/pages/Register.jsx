import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [err, setError] = useState(null);

    /* sending multiple things through one file*/
    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
      e.preventDefault() ;  // to prevent page refresh when we click submit button
        try {
            const res = await axios.post("/auth/register",inputs);
            console.log(res)
        } catch(err){
          console.log(err)
        }
    }
  return (
      <div className='auth'>
        <h1>Register</h1>
        <form>
          <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
            <input required type='text' placeholder='email' name='email' onChange={handleChange}/>
          <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
          <button onClick={handleSubmit}>Register</button>
          <p>This is an error!</p>
          <span>You have an account? <Link to="/login">Login</Link></span>
        </form>
      </div>
  )
}

export default Register