import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signUp = useCallback(() =>{
        navigate('/signup')
    },[navigate]);

    const login = useCallback(async() =>{
         signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    },[email, navigate, password])
  return (
    <div className='outerContainer'>
    <div className='centerContainer'>
      <div className='loginForm'>
        <header className='headertitle'>Login</header>
        <hr/>
        <div className='inputDiv'>
         <input id='mail'type='mail' placeholder='Enter the mail Id' onChange={(e) => {setEmail(e.target.value)}}/>
         </div>
        <div className='inputDiv'>
         <input id='pssword'type='password' placeholder='Enter the password' onChange={(e) => {setPassword(e.target.value)}} />
         </div>
         <div style={{display:'flex',alignItems:'center'}}>
          <input type='checkbox'/>
          <span>{'Remember me'}</span>
         </div>
         <div className='buttonDiv'>
         <button className='buttonInnerDiv' onClick={login}>{"Login"}</button>
         <div style={{display:'flex',alignItems:'center'}}>
         <p>{'Not a member'}</p><span onClick={signUp}>Register</span>
         </div>
         </div>
      </div>
    </div>
</div>

  )
}

export default Login