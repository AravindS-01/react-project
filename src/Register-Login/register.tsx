import React from 'react';
import  './register.css';

const Register = () => {
  return (
    <>
    {false &&(<div className='outerContainer'>
        <div className='centerContainer'>
          <div className='loginForm'>
            <header className='headertitle'>Register Form</header>
            <hr/>
            <div className='inputDiv'>
            {/* <label htmlFor='username'> User Name</label> */}
             <input id='username'type='text' placeholder='Enter the userName' />
             </div>
             
            <div className='inputDiv'>
            {/* <label htmlFor='mail'>Mail Id</label> */}
             <input id='mail'type='mail' placeholder='Enter the mail Id' />
             </div>
             
            <div className='inputDiv'>
            {/* <label htmlFor='password'> Password</label> */}
             <input id='pssword'type='password' placeholder='Enter the password' />
             </div>
             <div className='buttonDiv'>
             <button className='buttonInnerDiv'>{"Register"}</button>
             </div>
          </div>
        </div>
    </div>)}
    {true &&(<div className='outerContainer'>
        <div className='centerContainer'>
          <div className='loginForm'>
            <header className='headertitle'>Login</header>
            <hr/>
            <div className='inputDiv'>
             <input id='mail'type='mail' placeholder='Enter the mail Id' />
             </div>
            <div className='inputDiv'>
             <input id='pssword'type='password' placeholder='Enter the password' />
             </div>
             <div style={{display:'flex',alignItems:'center'}}>
              <input type='checkbox'/>
              <span>{'Remember me'}</span>
             </div>
             <div className='buttonDiv'>
             <button className='buttonInnerDiv'>{"Login"}</button>
             <div style={{display:'flex',alignItems:'center'}}>
             <p>{'Not a member'}</p><span><a href=''>Register</a></span>
             </div>
             </div>
          </div>
        </div>
    </div>
    )}
    
    </>
  )
}

export default Register;