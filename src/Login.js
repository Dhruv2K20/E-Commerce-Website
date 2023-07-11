import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import { useHistory,Link } from "react-router-dom"
import { auth } from "./firebase";


const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
 

    
    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //     .then(res => {
    //         alert(res.data.message)
            
    //        if(res?.data.error===null){

    //          history.push("/");
    //        } 
           
    //     })
    // }

    return (
        <div className='login'>
    <Link to='/'>
        <img
            className="login__logo"
            src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' 
        />
    </Link>


        <div className="login__container">
        <h1>Sign-in</h1>


        
        <h5>E-mail</h5>
        <input type='text' name='email' value={email} onChange={e => setEmail(e.target.value)}/>

        <h5>Password</h5>
        <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)}/>


        <button type='submit'  className='login__signInButton' onClick={login}>Sign In</button>
    
        

         <button type='submit' className='login__registerButton'  onClick={() => history.push("/signup")}>Sign-Up</button>

        </div>
        </div>
    )
}

export default Login