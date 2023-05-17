import React, { useCallback, useState } from 'react';
import './register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<string>('');
console.log("user",user);
   const signUp = useCallback((async ()=>{
     createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login")
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
    });

   }),[email, navigate, password])
  return (
    <>
      <div className='outerContainer'>
        <div className='centerContainer'>
          <div className='loginForm'>
            <header className='headertitle'>Register Form</header>
            <hr />
            <div className='inputDiv'>
              {/* <label htmlFor='username'> User Name</label> */}
              <input id='username' type='text' placeholder='Enter the userName' onChange={(e) => setUser(e.target.value)}/>
            </div>

            <div className='inputDiv'>
              {/* <label htmlFor='mail'>Mail Id</label> */}
              <input id='mail' type='mail' placeholder='Enter the mail Id'onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='inputDiv'>
              {/* <label htmlFor='password'> Password</label> */}
              <input id='pssword' type='password' placeholder='Enter the password' onChange={(e) => setPassword(e.target.value)}/>
              <i className="bi bi-eye-slash" id="togglePassword"></i>
            </div>
            <div className='buttonDiv'>
              <button className='buttonInnerDiv' onClick={signUp}>{"Register"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;