import React, { useState } from 'react';
import './SignUp.css';
import { auth } from "./firebase";
import {Link,useHistory} from "react-router-dom";
import axios from "axios"
// import { useHistory } from 'react-router-dom';

function SignUp() {

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setreEnterPassword] = useState('');

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                alert("user registered");
                if (auth) {
                    history.push('/login')
                }
            })
            .catch(error => alert(error.message))
    }
    
    // const register = () => {
    //     const { name, email, password, reEnterPassword } = user
    //     if( name && email && password && (password === reEnterPassword)){
              
    //         // alert("Ho gya")
    //         // const history = useHistory();
    //         axios.post("http://localhost:9002/register", user)
    //         .then( res => {
    //             alert(res.data.message)
    //             // history.push("/Login")
    //         })
    //     } else {
    //         alert("Error - Invalid Input!!!")
    //     }
        
    // }


  return (
    <div className='signup'>
          
    <Link to='/'>
    <img
        className="login__logo"
        src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' 
    />
</Link>

<div className='signup__container'>
    <h1>Sign-up</h1>

    <form>

    <h5>Name</h5>
    <input type='text' name='name' value={name} placeholder="Your Name" onChange={e => setName(e.target.value)}/>     

        <h5>E-mail</h5>
        <input type='email' name='email' value={email} placeholder="Your Email" onChange={ e => setEmail(e.target.value) }/>

        <h5>Password</h5>
        <input type='password' name='password' value={password} placeholder="Your Password" onChange={ e => setPassword(e.target.value) }/>
         
        <h5>Confirm Password</h5>
        <input type="password" name="reEnterPassword" value={reEnterPassword} placeholder="Re-enter Password" onChange={ e => setreEnterPassword(e.target.value) }/>
          
        <button type='submit' className="signup__signInButton" onClick={register} >Register</button> 
    
        </form>
       <Link to="/login">
        <button type='submit' className='signup__signInButton'>Sign In</button>
        </Link> 
     
 
    </div>

</div>

  )
}

export default SignUp
 